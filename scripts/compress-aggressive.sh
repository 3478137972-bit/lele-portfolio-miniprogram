#!/bin/bash

# 激进图片压缩脚本
# 目标：将所有图片压缩到 100K 以下

PROJECT_ROOT="/root/.openclaw/workspace_manager/lele-portfolio-miniprogram"
cd "$PROJECT_ROOT"

echo "🔧 开始激进压缩（质量 60%，最大 1280px）..."
echo "================================"

COMPRESSED=0

# 压缩 works 目录
echo "📁 压缩 works 目录..."
find static/images/works -type f \( -name "*.jpg" -o -name "*.jpeg" \) | while read file; do
  size=$(du -k "$file" | cut -f1)
  if [ "$size" -gt 100 ]; then
    convert "$file" -quality 60 -resize '1280x1280>' -strip -define jpeg:dct-method=float "${file}.tmp" && mv "${file}.tmp" "$file"
    new_size=$(du -k "$file" | cut -f1)
    COMPRESSED=$((COMPRESSED + 1))
    echo "  $(basename $file): ${size}K → ${new_size}K"
  fi
done

# 压缩 operations 目录
echo "📁 压缩 operations 目录..."
find static/images/operations -type f \( -name "*.jpg" -o -name "*.jpeg" \) | while read file; do
  size=$(du -k "$file" | cut -f1)
  if [ "$size" -gt 100 ]; then
    convert "$file" -quality 60 -resize '1280x1280>' -strip -define jpeg:dct-method=float "${file}.tmp" && mv "${file}.tmp" "$file"
    new_size=$(du -k "$file" | cut -f1)
    echo "  $(basename $file): ${size}K → ${new_size}K"
  fi
done

# 压缩 cases 目录
echo "📁 压缩 cases 目录..."
find static/images/cases -type f \( -name "*.jpg" -o -name "*.jpeg" \) | while read file; do
  size=$(du -k "$file" | cut -f1)
  if [ "$size" -gt 100 ]; then
    convert "$file" -quality 60 -resize '1280x1280>' -strip -define jpeg:dct-method=float "${file}.tmp" && mv "${file}.tmp" "$file"
    new_size=$(du -k "$file" | cut -f1)
    echo "  $(basename $file): ${size}K → ${new_size}K"
  fi
done

echo ""
echo "📊 最终大小统计："
du -sh static/images/* | sort -hr
echo ""
echo "✅ 激进压缩完成！"
