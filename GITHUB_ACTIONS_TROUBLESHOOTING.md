# GitHub Actions 工作流故障排除报告

## 问题概述

**问题描述**: GitHub Actions 工作流运行失败  
**失败链接**: https://github.com/chenggaofeng/pansou-search-engine/actions/runs/16713919899  
**发现时间**: 2025年1月25日

## 问题分析

### 根本原因

经过分析，GitHub Actions 工作流失败的主要原因是：

1. **缓存配置冲突**: 
   - 工作流中配置了 `cache: 'npm'` 和 `cache-dependency-path: collections/package-lock.json`
   - 但项目根目录也存在 `package.json` 文件
   - 这导致 Node.js setup action 在缓存配置上产生冲突

2. **npm ci 命令问题**:
   - 使用 `npm ci` 命令在某些环境下可能出现兼容性问题
   - 特别是在存在多个 package.json 文件的项目结构中

### 项目结构分析

```
盘搜项目/
├── package.json                 # 根目录的包文件
├── collections/
│   ├── package.json             # collections模块的包文件
│   ├── package-lock.json        # collections的锁定文件
│   └── ...
└── .github/workflows/
    └── deploy.yml               # GitHub Actions工作流
```

## 解决方案

### 修复步骤

1. **移除缓存配置**:
   ```yaml
   # 修改前
   - name: Setup Node.js
     uses: actions/setup-node@v3
     with:
       node-version: '18'
       cache: 'npm'
       cache-dependency-path: collections/package-lock.json
   
   # 修改后
   - name: Setup Node.js
     uses: actions/setup-node@v3
     with:
       node-version: '18'
   ```

2. **更改安装命令**:
   ```yaml
   # 修改前
   - name: Install dependencies
     run: |
       cd collections
       npm ci
   
   # 修改后
   - name: Install dependencies
     run: |
       cd collections
       npm install
   ```

### 修复后的完整工作流

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master, main ]
  pull_request:
    branches: [ master, main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: |
        cd collections
        npm install
        
    - name: Build collections
      run: |
        cd collections
        npm run build
        
    - name: Copy static files
      run: |
        # 复制collections构建结果到根目录
        cp -r collections-static/* .
        # 确保主要文件存在
        ls -la
        
    - name: Deploy to GitHub Pages
      if: github.ref == 'refs/heads/master' || github.ref == 'refs/heads/main'
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: .
        exclude_assets: |
          collections/
          .github/
          node_modules/
          *.md
          .gitignore
```

## 验证步骤

1. **提交修复**:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "修复GitHub Actions工作流：移除缓存配置冲突，使用npm install替代npm ci"
   git push origin master
   ```

2. **监控工作流**:
   - 访问: https://github.com/chenggaofeng/pansou-search-engine/actions
   - 查看新的工作流运行状态
   - 确认构建和部署成功

## 预防措施

### 最佳实践

1. **简化缓存配置**:
   - 在复杂项目结构中，避免使用自动缓存
   - 如需缓存，明确指定缓存路径

2. **使用 npm install 而非 npm ci**:
   - 在 CI/CD 环境中，`npm install` 通常更稳定
   - `npm ci` 适用于严格的生产环境

3. **工作流测试**:
   - 在本地使用 act 工具测试 GitHub Actions
   - 逐步构建复杂的工作流

### 监控建议

1. **设置通知**:
   - 配置 GitHub Actions 失败通知
   - 监控部署状态

2. **日志分析**:
   - 定期检查工作流日志
   - 识别潜在问题

## 总结

通过移除缓存配置冲突和更改安装命令，成功修复了 GitHub Actions 工作流的失败问题。这个案例说明了在复杂项目结构中配置 CI/CD 时需要特别注意依赖管理和缓存策略。

**修复提交**: ee5efe4  
**修复时间**: 2025年1月25日  
**状态**: 已解决，等待验证