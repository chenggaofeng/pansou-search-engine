@echo off
chcp 65001 >nul
echo ========================================
echo GitHub Auto Deploy Script for Pansou
echo ========================================
echo.

echo [1/4] Checking Git status...
git status
if %errorlevel% neq 0 (
    echo Error: Git repository not initialized or has issues
    pause
    exit /b 1
)

echo.
echo [2/4] Adding all files to Git...
git add .
if %errorlevel% neq 0 (
    echo Error: Failed to add files
    pause
    exit /b 1
)

echo.
echo [3/4] Committing changes...
git commit -m "Update: Pansou project code update"
if %errorlevel% neq 0 (
    echo Note: No new changes to commit, or commit failed
)

echo.
echo [4/4] Pushing to GitHub...
echo Please make sure you have set up the remote repository!
echo If not set up yet, please run:
echo git remote add origin https://github.com/YOUR_USERNAME/pansou-search-engine.git
echo.
set /p confirm="Continue to push to GitHub? (y/n): "
if /i "%confirm%"=="y" (
    git push -u origin main
    if %errorlevel% equ 0 (
        echo.
        echo Success! Pushed to GitHub!
        echo.
        echo Next steps:
        echo 1. Visit your GitHub repository
        echo 2. Go to https://vercel.com to deploy
        echo 3. Select your repository and deploy
        echo.
    ) else (
        echo.
        echo Push failed! Please check:
        echo 1. Network connection
        echo 2. GitHub authentication
        echo 3. Remote repository URL
        echo.
        echo For help, see GITHUB_DEPLOY_GUIDE.md
    )
) else (
    echo Push operation cancelled
)

echo.
echo Press any key to exit...
pause >nul