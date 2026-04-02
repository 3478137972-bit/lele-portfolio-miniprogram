#!/bin/bash
# 全面图片压缩脚本 - 针对微信小程序
# 目标：将所有图片压缩到 200KB 以下

set -e

WORK_DIR="/root/.openclaw/workspace_manager/lele-portfolio-miniprogram"
IMAGE_DIR="$WORK_DIR/static/images"
SIZE_LIMIT=200  # KB
QUALITY=75      # 初始质量

echo "=========================================="
echo "🚀 微信小程序图片全面压缩"
echo "=========================================="
echo "📁 工作目录：$IMAGE_DIR"
echo "📏 大小限制：${SIZE_LIMIT}KB"
echo "🎯 图片质量：$QUALITY%"
echo ""

# 检查 ImageMagick
if ! command -v convert &> /dev/null; then
    echo "❌ 错误：未找到 ImageMagick"
    exit 1
fi

# 统计
total_files=0
compressed_files=0
skipped_files=0
failed_files=0
original_total=0
compressed_total=0

# 获取所有图片文件
mapfile -t all_images < <(find "$IMAGE_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) ! -name "*_compressed.*" ! -name "*_optimized.*")

echo "📊 找到 ${#all_images[@]} 张图片文件"
echo ""

for img in "${all_images[@]}"; do
    total_files=$((total_files + 1))
    
    # 获取文件大小 (KB)
    file_size=$(stat -c %s "$img")
    file_size_kb=$((file_size / 1024))
    original_total=$((original_total + file_size))
    
    filename=$(basename "$img")
    rel_path=${img#$IMAGE_DIR/}
    
    if [ $file_size_kb -le $SIZE_LIMIT ]; then
        skipped_files=$((skipped_files + 1))
        compressed_total=$((compressed_total + file_size))
        continue
    fi
    
    # 需要压缩
    ext="${filename##*.}"
    name="${filename%.*}"
    dirname=$(dirname "$img")
    
    # 生成临时文件
    temp_file=$(mktemp --suffix=".$ext")
    
    echo "📷 压缩：$rel_path (${file_size_kb}KB)"
    
    # 根据格式使用不同策略
    if [[ "$ext" == "png" ]]; then
        # PNG 文件：先尝试保持 PNG，如果太大则转 JPG
        convert "$img" -strip -quality $QUALITY -resize '1920x1920>' "$temp_file" 2>/dev/null
        
        compressed_size=$(stat -c %s "$temp_file")
        compressed_size_kb=$((compressed_size / 1024))
        
        # 如果还是太大，尝试转换为 JPG
        if [ $compressed_size_kb -gt $SIZE_LIMIT ]; then
            echo "   ⚠️ PNG 压缩后仍为 ${compressed_size_kb}KB，尝试转换为 JPG..."
            convert "$img" -strip -quality 65 -resize '1920x1920>' -background white -alpha remove "${temp_file%.png}.jpg" 2>/dev/null
            
            if [ -f "${temp_file%.png}.jpg" ]; then
                rm "$temp_file"
                temp_file="${temp_file%.png}.jpg"
                compressed_size=$(stat -c %s "$temp_file")
                compressed_size_kb=$((compressed_size / 1024))
            fi
        fi
        
        # 如果还是太大，进一步降低质量
        if [ $compressed_size_kb -gt $SIZE_LIMIT ]; then
            echo "   ⚠️ 进一步压缩到质量 50..."
            if [[ "$temp_file" == *.png ]]; then
                convert "$img" -strip -quality 50 -resize '1280x1280>' -background white -alpha remove "${temp_file%.png}.jpg" 2>/dev/null
                rm "$temp_file"
                temp_file="${temp_file%.png}.jpg"
            else
                convert "$img" -strip -quality 50 -resize '1280x1280>' "$temp_file" 2>/dev/null
            fi
            compressed_size=$(stat -c %s "$temp_file")
            compressed_size_kb=$((compressed_size / 1024))
        fi
        
    elif [[ "$ext" == "jpg" || "$ext" == "jpeg" ]]; then
        # JPG 文件：直接压缩
        convert "$img" -strip -quality $QUALITY -resize '1920x1920>' "$temp_file" 2>/dev/null
        
        compressed_size=$(stat -c %s "$temp_file")
        compressed_size_kb=$((compressed_size / 1024))
        
        # 如果还是太大，进一步压缩
        if [ $compressed_size_kb -gt $SIZE_LIMIT ]; then
            echo "   ⚠️ 进一步压缩到质量 60..."
            convert "$img" -strip -quality 60 -resize '1280x1280>' "$temp_file" 2>/dev/null
            compressed_size=$(stat -c %s "$temp_file")
            compressed_size_kb=$((compressed_size / 1024))
        fi
        
        if [ $compressed_size_kb -gt $SIZE_LIMIT ]; then
            echo "   ⚠️ 进一步压缩到质量 45..."
            convert "$img" -strip -quality 45 -resize '1024x1024>' "$temp_file" 2>/dev/null
            compressed_size=$(stat -c %s "$temp_file")
            compressed_size_kb=$((compressed_size / 1024))
        fi
        
    elif [[ "$ext" == "webp" ]]; then
        # WebP 文件：压缩并保持格式
        convert "$img" -strip -quality $QUALITY -resize '1920x1920>' "$temp_file" 2>/dev/null
        
        compressed_size=$(stat -c %s "$temp_file")
        compressed_size_kb=$((compressed_size / 1024))
    fi
    
    # 检查压缩结果
    if [ $compressed_size_kb -le $SIZE_LIMIT ]; then
        # 压缩成功，替换原文件
        mv "$temp_file" "$img"
        compressed_files=$((compressed_files + 1))
        compressed_total=$((compressed_total + compressed_size))
        echo "   ✅ 成功：${file_size_kb}KB → ${compressed_size_kb}KB"
    else
        # 压缩失败，保留原文件
        rm -f "$temp_file"
        failed_files=$((failed_files + 1))
        compressed_total=$((compressed_total + file_size))
        echo "   ❌ 失败：压缩后仍为 ${compressed_size_kb}KB，保留原文件"
    fi
    
    echo ""
done

# 计算结果
original_total_mb=$((original_total / 1024 / 1024))
compressed_total_mb=$((compressed_total / 1024 / 1024))
saved_mb=$((original_total_mb - compressed_total_mb))
saved_percent=0
if [ $original_total -gt 0 ]; then
    saved_percent=$(( (original_total - compressed_total) * 100 / original_total ))
fi

echo "=========================================="
echo "📊 压缩统计"
echo "=========================================="
echo "📁 总文件数：$total_files"
echo "✅ 成功压缩：$compressed_files"
echo "⏭️  跳过（已符合）：$skipped_files"
echo "❌ 失败（仍太大）：$failed_files"
echo ""
echo "💾 原始总大小：${original_total_mb}MB"
echo "💾 压缩后总大小：${compressed_total_mb}MB"
echo "💾 节省空间：${saved_mb}MB (${saved_percent}%)"
echo ""

# 显示各目录大小
echo "=========================================="
echo "📁 各目录大小"
echo "=========================================="
du -sh "$IMAGE_DIR"/* 2>/dev/null | sort -hr

echo ""
echo "✅ 压缩完成！"
