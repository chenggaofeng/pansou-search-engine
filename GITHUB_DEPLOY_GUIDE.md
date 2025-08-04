# 盘搜项目 GitHub 部署指南

## 📋 部署步骤

### 第一步：创建 GitHub 仓库

1. 打开 [GitHub](https://github.com) 并登录您的账户
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `pansou-search-engine`
   - **Description**: `盘搜 - 一个功能强大的网盘资源搜索引擎，支持多平台搜索、PWA应用、资源集合管理等功能`
   - **Visibility**: Public（推荐）或 Private
   - **不要勾选** "Add a README file"（因为本地已有文件）
4. 点击 "Create repository"

### 第二步：连接本地仓库到 GitHub

在当前项目目录下执行以下命令（请将 `YOUR_USERNAME` 替换为您的 GitHub 用户名）：

```bash
# 添加远程仓库地址
git remote add origin https://github.com/YOUR_USERNAME/pansou-search-engine.git

# 推送代码到 GitHub
git branch -M main
git push -u origin main
```

### 第三步：配置 Vercel 部署（推荐）

1. 访问 [Vercel](https://vercel.com) 并使用 GitHub 账户登录
2. 点击 "New Project"
3. 选择刚创建的 `pansou-search-engine` 仓库
4. 配置项目设置：
   - **Framework Preset**: Other
   - **Root Directory**: `./`（保持默认）
   - **Build Command**: 留空或使用 `npm run build`
   - **Output Directory**: 留空（使用根目录）
5. 点击 "Deploy"

### 第四步：配置环境变量（如需要）

在 Vercel 项目设置中添加必要的环境变量：
- 进入项目 Dashboard
- 点击 "Settings" → "Environment Variables"
- 添加所需的环境变量

## 🔧 项目结构说明

```
盘搜/
├── index.html              # 主页面
├── api/                     # Serverless API 函数
├── collections-static/      # 资源集合静态文件
├── collections/            # 资源集合管理系统源码
├── lib/                    # 工具库
├── manifest.json           # PWA 配置
├── sw.js                   # Service Worker
├── package.json            # 项目依赖
└── vercel.json             # Vercel 部署配置
```

## 🚀 部署后的功能

- ✅ 网盘资源搜索
- ✅ 多平台支持（百度网盘、阿里云盘等）
- ✅ PWA 应用支持
- ✅ 资源集合管理
- ✅ 热搜功能
- ✅ 响应式设计
- ✅ 二维码分享

## 📝 注意事项

1. **API 功能**：项目包含 Serverless API，需要部署到支持 Node.js 的平台（如 Vercel）
2. **域名配置**：部署后可以绑定自定义域名
3. **HTTPS**：Vercel 自动提供 HTTPS 支持
4. **缓存优化**：静态资源会自动缓存优化

## 🔍 故障排除

### 推送代码时遇到问题
```bash
# 如果遇到认证问题，可以使用 Personal Access Token
# 在 GitHub Settings → Developer settings → Personal access tokens 创建
```

### Vercel 部署失败
- 检查 `package.json` 文件是否正确
- 确认 API 函数语法正确
- 查看 Vercel 部署日志获取详细错误信息

## 📞 技术支持

如果在部署过程中遇到问题，可以：
1. 查看 GitHub Issues
2. 检查 Vercel 部署日志
3. 参考项目文档

---

**部署完成后，您的盘搜应用将可以通过 Vercel 提供的域名访问！**