@echo off
chcp 65001 >nul
echo ========================================
echo   乐乐小程序 - 一键更新代码
echo ========================================
echo.

cd /d %~dp0

echo [1/2] 正在连接 GitHub...
git fetch origin

if %errorlevel% neq 0 (
    echo.
    echo ❌ 连接失败！请检查：
    echo    1. 网络连接是否正常
    echo    2. 是否能访问 github.com
    echo    3. 防火墙是否阻止
    echo.
    pause
    exit /b 1
)

echo.
echo [2/2] 正在拉取最新代码...
git pull origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   ✅ 更新成功！
    echo ========================================
    echo.
    echo 最新提交：
    git log --oneline -1
    echo.
    pause
) else (
    echo.
    echo ❌ 拉取失败！
    echo.
    echo 可能的原因：
    echo    1. 本地有未提交的修改
    echo    2. 网络连接问题
    echo    3. Git 配置问题
    echo.
    echo 解决方法：
    echo    1. 打开微信开发者工具
    echo    2. 点击"终端"
    echo    3. 输入：git stash
    echo    4. 再运行本脚本
    echo.
    pause
)
