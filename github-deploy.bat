@echo off
chcp 65001 >nul
echo ========================================
echo 盘搜项目 GitHub 自动部署脚本
echo ========================================
echo.

echo [1/4] 检查 Git 状态...
git status
if %errorlevel% neq 0 (
    echo 错误：Git 仓库未初始化或存在问题
    pause
    exit /b 1
)

echo.
echo [2/4] 添加所有文件到 Git...
git add .
if %errorlevel% neq 0 (
    echo 错误：添加文件失败
    pause
    exit /b 1
)

echo.
echo [3/4] 提交更改...
git commit -m "Update: 更新盘搜项目代码"
if %errorlevel% neq 0 (
    echo 提示：没有新的更改需要提交，或提交失败
)

echo.
echo [4/4] 推送到 GitHub...
echo 请确保您已经设置了远程仓库地址！
echo 如果还没有设置，请先运行：
echo git remote add origin https://github.com/YOUR_USERNAME/pansou-search-engine.git
echo.
set /p confirm="是否继续推送到 GitHub？(y/n): "
if /i "%confirm%"=="y" (
    git push -u origin main
    if %errorlevel% equ 0 (
        echo.
        echo ✅ 成功推送到 GitHub！
        echo.
        echo 下一步：
        echo 1. 访问您的 GitHub 仓库
        echo 2. 前往 https://vercel.com 部署项目
        echo 3. 选择您的仓库并点击部署
        echo.
    ) else (
        echo.
        echo ❌ 推送失败！请检查：
        echo 1. 网络连接
        echo 2. GitHub 认证信息
        echo 3. 远程仓库地址是否正确
        echo.
        echo 如需帮助，请查看 GITHUB_DEPLOY_GUIDE.md
    )
) else (
    echo 取消推送操作
)

echo.
echo 按任意键退出...
pause >nul