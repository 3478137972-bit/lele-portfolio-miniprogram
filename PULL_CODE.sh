#!/bin/bash

# 乐乐小程序 - Git 拉取代码脚本
# 使用方式：bash PULL_CODE.sh

echo "======================================"
echo "乐乐小程序 - Git 代码拉取"
echo "======================================"
echo ""

# 仓库地址
REPO_URL="https://github.com/3478137972-bit/lele-portfolio-miniprogram.git"

# 检查是否已存在仓库
if [ -d "lele-portfolio-miniprogram" ]; then
    echo "✓ 检测到本地仓库，执行拉取..."
    cd lele-portfolio-miniprogram
    git pull origin main
    echo ""
    echo "✓ 拉取完成！"
else
    echo "✓ 首次克隆仓库..."
    git clone $REPO_URL
    cd lele-portfolio-miniprogram
    echo ""
    echo "✓ 克隆完成！"
fi

echo ""
echo "======================================"
echo "代码路径：$(pwd)"
echo "======================================"
echo ""
echo "下一步："
echo "1. 打开微信开发者工具"
echo "2. 导入项目：$(pwd)"
echo "3. 填写你的 AppID"
echo "4. 编译运行"
echo ""
