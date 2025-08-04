@echo off
echo ========================================
echo           盘搜项目快速部署脚本
echo ========================================
echo.

echo [1/4] 检查Vercel CLI...
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Vercel CLI未安装，正在安装...
    npm install -g vercel
    if %errorlevel% neq 0 (
        echo ❌ Vercel CLI安装失败，请手动安装
        pause
        exit /b 1
    )
    echo ✅ Vercel CLI安装完成
) else (
    echo ✅ Vercel CLI已安装
)
echo.

echo [2/4] 构建Collections模块...
cd collections
npm run build
if %errorlevel% neq 0 (
    echo ❌ Collections构建失败
    pause
    exit /b 1
)
echo ✅ Collections构建完成
cd ..
echo.

echo [3/4] 登录Vercel...
echo 请在浏览器中完成Vercel登录...
vercel login
if %errorlevel% neq 0 (
    echo ❌ Vercel登录失败
    pause
    exit /b 1
)
echo ✅ Vercel登录成功
echo.

echo [4/4] 部署到Vercel...
echo 首次部署请按照提示配置项目...
vercel --prod
if %errorlevel% neq 0 (
    echo ❌ 部署失败
    pause
    exit /b 1
)
echo.
echo ========================================
echo ✅ 部署完成！
echo 请查看上方输出的URL访问你的网站
echo ========================================
pause