#!/bin/bash

# 小程序图片压缩脚本
# 目标：将所有图片压缩到 200K 以下

PROJECT_ROOT="/root/.openclaw/workspace_manager/lele-portfolio-miniprogram"
cd "$PROJECT_ROOT"

echo "🔧 开始压缩图片..."
echo "================================"

# 统计原始大小
ORIGINAL_SIZE=$(du -sh static/images 2>/dev/null | cut -f1)
echo "📊 原始大小：$ORIGINAL_SIZE"
echo ""

# 需要压缩的目录
DIRS=(
  "static/images/works"
  "static/images/operations"
  "static/images/cases"
  "static/images/ai-miniprogram"
  "static/images/activities"
  "static/images/home"
  "static/images/ai-web"
)

TOTAL_ORIGINAL=0
TOTAL_COMPRESSED=0
TOTAL_FILES=0
COMPRESSED_FILES=0

for dir in "${DIRS[@]}"; do
  if [ -d "$dir" ]; then
    echo "📁 处理目录：$dir"
    
    # 统计该目录原始大小
    dir_size=$(du -sm "$dir" 2>/dev/null | cut -f1)
    TOTAL_ORIGINAL=$((TOTAL_ORIGINAL + dir_size))
    
    # 查找所有 jpg 和 png 文件
    find "$dir" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | while read file; do
      TOTAL_FILES=$((TOTAL_FILES + 1))
      
      # 获取文件大小（KB）
      file_size=$(du -k "$file" 2>/dev/null | cut -f1)
      
      # 如果文件大于 200K，进行压缩
      if [ "$file_size" -gt 200 ]; then
        echo "  📸 压缩：$(basename $file) (${file_size}K)"
        
        # 使用 ImageMagick 压缩
        # -quality 75: 质量 75%
        # -resize '1920x1920>': 如果超过 1920px 则缩小
        # -strip: 移除元数据
        convert "$file" -quality 75 -resize '1920x1920>' -strip "${file}.tmp"
        
        # 替换原文件
        mv "${file}.tmp" "$file"
        
        # 检查压缩后大小
        new_size=$(du -k "$file" 2>/dev/null | cut -f1)
        COMPRESSED_FILES=$((COMPRESSED_FILES + 1))
        echo "    → ${new_size}K (节省 $((file_size - new_size))K)"
      fi
    done
    
    # 统计压缩后大小
    dir_size_new=$(du -sm "$dir" 2>/dev/null | cut -f1)
    TOTAL_COMPRESSED=$((TOTAL_COMPRESSED + dir_size_new))
    
    echo "  ✅ 完成：$dir"
    echo ""
  fi
done

# 统计最终大小
FINAL_SIZE=$(du -sh static/images 2>/dev/null | cut -f1)
echo "================================"
echo "📊 压缩结果："
echo "  原始大小：$ORIGINAL_SIZE"
echo "  压缩后：$FINAL_SIZE"
echo "  压缩文件数：$COMPRESSED_FILES"
echo ""
echo "✅ 图片压缩完成！"
