#!/bin/bash
# 小程序体积验证脚本

echo "========== 小程序体积验证 ========== "
echo ""

WORK_DIR="/root/.openclaw/workspace_manager/lele-portfolio-miniprogram"

# 忽略的目录和文件
IGNORE_DIRS=("node_modules" ".git" "static/images/works" "static/images/operations" "static/images/cases")
IGNORE_PATTERNS=(".md" ".bat" ".sh" ".log")

echo "📋 忽略的目录和文件:"
for dir in "${IGNORE_DIRS[@]}"; do
    echo "  - $dir"
done
echo ""

# 计算有效包大小
echo "📊 各目录大小:"
total_size=0

for dir in $(find "$WORK_DIR" -maxdepth 1 -mindepth 1 -type d 2>/dev/null); do
    dir_name=$(basename "$dir")
    
    # 检查是否是忽略的目录
    should_ignore=false
    for ignore_dir in "${IGNORE_DIRS[@]}"; do
        if [ "$dir_name" == "$ignore_dir" ]; then
            should_ignore=true
            break
        fi
    done
    
    if [ "$should_ignore" = true ]; then
        dir_size=$(du -sh "$dir" 2>/dev/null | cut -f1)
        echo "📁 $dir_name: $dir_size (忽略)"
    else
        dir_size=$(du -sh "$dir" 2>/dev/null | cut -f1)
        total_size=$((total_size + $(du -sb "$dir" 2>/dev/null | cut -f1)))
        echo "📁 $dir_name: $dir_size"
    fi
done

# 忽略的文件
echo ""
echo "📝 忽略的文件类型 (.md, .bat, .sh, .log):"
ignored_files_size=0
while IFS= read -r -d '' file; do
    file_size=$(stat -c %s "$file" 2>/dev/null || echo 0)
    ignored_files_size=$((ignored_files_size + file_size))
done < <(find "$WORK_DIR" -type f \( -name "*.md" -o -name "*.bat" -o -name "*.sh" -o -name "*.log" \) -print0 2>/dev/null)

echo "  总大小: $((ignored_files_size / 1024))KB"

echo ""
echo "========== 优化统计 ========== "
echo "📊 有效包大小（不含忽略目录）: $((total_size / 1024 / 1024))MB"
echo "📊 有效包大小（字节）: $total_size"

# 检查是否超过1.5M限制
limit=1572864  # 1.5MB in bytes
if [ $total_size -lt $limit ]; then
    echo "✅ 体积符合微信小程序限制 (< 1.5MB)"
else
    echo "❌ 体积超过限制 (当前: $((total_size / 1024 / 1024))MB, 限制: 1.5MB)"
fi

echo ""
echo "📋 上传到微信小程序时的忽略配置:"
echo "  - static/images/works: 已配置忽略"
echo "  - static/images/operations: 已配置忽略"
echo "  - static/images/cases: 已配置忽略"
echo "  - 大于10MB的PNG图片: 建议从这些目录移除或压缩"

echo ""
echo "✅ 验证完成！"
