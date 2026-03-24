@echo off
chcp 65001 >nul
echo ======================================
echo 乐乐小程序 - Git 代码拉取
echo ======================================
echo.

REM 仓库地址
set REPO_URL=https://github.com/3478137972-bit/lele-portfolio-miniprogram.git

REM 检查是否已存在仓库
if exist "lele-portfolio-miniprogram" (
    echo [信息] 检测到本地仓库，执行拉取...
    cd lele-portfolio-miniprogram
    git pull origin main
    echo.
    echo [完成] 拉取完成！
) else (
    echo [信息] 首次克隆仓库...
    git clone %REPO_URL%
    cd lele-portfolio-miniprogram
    echo.
    echo [完成] 克隆完成！
)

echo.
echo ======================================
echo 代码路径：%CD%
echo ======================================
echo.
echo 下一步：
echo 1. 打开微信开发者工具
echo 2. 导入项目：%CD%
echo 3. 填写你的 AppID
echo 4. 编译运行
echo.
pause
