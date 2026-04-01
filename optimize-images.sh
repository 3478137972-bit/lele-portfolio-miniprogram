#!/bin/bash
# 小程序图片优化脚本
# 将超过 200K 的图片压缩到 200K 以下

set -e

WORK_DIR="/root/.openclaw/workspace_manager/lele-portfolio-miniprogram"
IMAGE_DIRS=("static/images/works" "static/images/operations" "static/images/cases")
SIZE_LIMIT=200  # KB

echo "========== 开始图片优化 ========== "
echo "工作目录: $WORK_DIR"
echo "大小限制: ${SIZE_LIMIT}KB"
echo ""

# 检查 ImageMagick 是否安装
if ! command -v convert &> /dev/null; then
    echo "⚠️ 未找到 ImageMagick，尝试使用 ImageMagick 的 mogrify 命令"
    if ! command -v mogrify &> /dev/null; then
        echo "❌ 错误: 未找到 ImageMagick。请安装: sudo apt-get install imagemagick"
        exit 1
    fi
fi

total_original_size=0
total_compressed_size=0
files_processed=0
files_skipped=0

# 遍历所有图片目录
for dir in "${IMAGE_DIRS[@]}"; do
    full_path="$WORK_DIR/$dir"
    
    if [ ! -d "$full_path" ]; then
        echo "📁 目录不存在: $full_path"
        continue
    fi
    
    echo "📁 处理目录: $dir"
    
    # 查找所有图片文件
    for img in $(find "$full_path" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) 2>/dev/null); do
        # 获取文件大小 (KB)
        file_size=$(stat -c %s "$img" 2>/dev/null || echo 0)
        file_size_kb=$((file_size / 1024))
        
        if [ $file_size_kb -gt $SIZE_LIMIT ]; then
            original_size=$file_size_kb
            total_original_size=$((total_original_size + original_size))
            
            # 获取文件名和扩展名
            filename=$(basename "$img")
            dirname=$(dirname "$img")
            name="${filename%.*}"
            ext="${filename##*.}"
            
            # 生成压缩后的文件名
            compressed_img="$dirname/${name}_compressed.${ext}"
            
            echo "  📊 $filename: ${original_size}KB -> 压缩中..."
            
            # 使用 ImageMagick 压缩图片
            if command -v mogrify &> /dev/null; then
                # 使用 mogrify 压缩（覆盖原文件）
                if [[ "$ext" == "jpg" || "$ext" == "jpeg" ]]; then
                    convert "$img" -quality 75 -strip "$compressed_img"
                elif [[ "$ext" == "png" ]]; then
                    convert "$img" -strip "$compressed_img"
                else
                    convert "$img" -quality 75 -strip "$compressed_img"
                fi
            else
                echo "  ⚠️  未找到 ImageMagick，跳过: $filename"
                files_skipped=$((files_skipped + 1))
                continue
            fi
            
            # 检查压缩后大小
            if [ -f "$compressed_img" ]; then
                compressed_size=$(stat -c %s "$compressed_img" 2>/dev/null || echo 0)
                compressed_size_kb=$((compressed_size / 1024))
                
                if [ $compressed_size_kb -le $SIZE_LIMIT ]; then
                    # 压缩后大小符合要求，替换原文件
                    mv "$compressed_img" "$img"
                    total_compressed_size=$((total_compressed_size + compressed_size_kb))
                    files_processed=$((files_processed + 1))
                    echo "  ✅ $filename: ${original_size}KB -> ${compressed_size_kb}KB"
                else
                    # 还是太大，尝试进一步压缩
                    convert "$img" -quality 60 -strip "$compressed_img"
                    compressed_size=$(stat -c %s "$compressed_img" 2>/dev/null || echo 0)
                    compressed_size_kb=$((compressed_size / 1024))
                    
                    if [ $compressed_size_kb -le $SIZE_LIMIT ]; then
                        mv "$compressed_img" "$img"
                        total_compressed_size=$((total_compressed_size + compressed_size_kb))
                        files_processed=$((files_processed + 1))
                        echo "  ✅ $filename: ${original_size}KB -> ${compressed_size_kb}KB (强力压缩)"
                    else
                        rm -f "$compressed_img"
                        echo "  ⚠️  $filename: ${original_size}KB -> 压缩后仍为 ${compressed_size_kb}KB，跳过"
                        files_skipped=$((files_skipped + 1))
                    fi
                fi
            else
                echo "  ❌ $filename: 压缩失败"
                files_skipped=$((files_skipped + 1))
            fi
        else
            files_skipped=$((files_skipped + 1))
        fi
    done
done

echo ""
echo "========== 优化统计 ========== "
echo "✅ 处理文件数: $files_processed"
echo "⏭️  跳过文件数: $files_skipped"
echo "📊 原始总大小: $((total_original_size / 1024))MB"
echo "📊 压缩后总大小: $((total_compressed_size / 1024))MB"
echo "💾 节省空间: $(( (total_original_size - total_compressed_size) / 1024 ))MB"

# 显示优化后的目录大小
echo ""
echo "========== 优化后目录大小 ========== "
for dir in "${IMAGE_DIRS[@]}"; do
    full_path="$WORK_DIR/$dir"
    if [ -d "$full_path" ]; then
        dir_size=$(du -sh "$full_path" 2>/dev/null | cut -f1)
        echo "📁 $dir: $dir_size"
    fi
done

echo ""
echo "✅ 图片优化完成！"
