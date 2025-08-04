# 盘搜 - GitHub部署指南

## 🎉 项目已成功部署到GitHub

**仓库地址**: https://github.com/chenggaofeng/pansou-search-engine

## 📋 项目概述

盘搜是一个功能强大的网盘资源搜索引擎，具有以下特性：

- 🔍 **多平台搜索**: 支持百度网盘、阿里云盘、夸克网盘等
- 📱 **PWA应用**: 支持离线使用和桌面安装
- 📚 **资源集合**: 内置电影、音乐、软件等分类集合
- 🎯 **智能筛选**: 支持按平台、日期、类型筛选
- 🔥 **热搜功能**: 实时热门搜索词推荐
- 📊 **数据统计**: 搜索量和资源访问统计

## 🚀 部署选项

### 1. Vercel部署（推荐）

```bash
# 1. 安装Vercel CLI
npm i -g vercel

# 2. 登录Vercel
vercel login

# 3. 部署项目
vercel

# 4. 配置自定义域名（可选）
vercel --prod
```

### 2. GitHub Pages部署

1. 进入仓库设置页面
2. 找到 "Pages" 选项
3. 选择 "Deploy from a branch"
4. 选择 "master" 分支
5. 点击 "Save"

**注意**: GitHub Pages只支持静态文件，API功能需要额外配置。

### 3. Netlify部署

1. 访问 [Netlify](https://netlify.com)
2. 连接GitHub账户
3. 选择 `pansou-search-engine` 仓库
4. 配置构建设置：
   - Build command: `cd collections && npm run build`
   - Publish directory: `collections-static`

## 🔧 本地开发

```bash
# 1. 克隆仓库
git clone https://github.com/chenggaofeng/pansou-search-engine.git
cd pansou-search-engine

# 2. 构建collections模块
cd collections
npm install
npm run build
cd ..

# 3. 启动本地服务器
python -m http.server 3000
# 或使用Node.js
npx serve . -p 3000
```

## 📁 项目结构

```
pansou-search-engine/
├── index.html              # 主页面
├── api/                    # Serverless API函数
│   ├── hot-searches.js     # 热搜API
│   ├── check-term.js       # 词汇检查
│   └── ...
├── collections/            # 资源集合管理系统
│   ├── src/               # Astro源码
│   ├── package.json       # 依赖配置
│   └── ...
├── collections-static/     # 构建后的静态文件
├── lib/                   # 工具库
├── mgck2/                 # 敏感词库
├── manifest.json          # PWA配置
├── sw.js                  # Service Worker
└── README.md              # 项目说明
```

## ⚙️ 环境变量配置

如果使用Vercel部署，需要配置以下环境变量：

```bash
# 数据库配置（如果需要）
DATABASE_URL=your_database_url

# API密钥（如果需要）
API_KEY=your_api_key

# 其他配置
NODE_ENV=production
```

## 🔍 功能说明

### 主要功能
- **搜索引擎**: 支持关键词搜索网盘资源
- **热搜榜单**: 显示当前热门搜索词
- **资源筛选**: 按平台、日期、类型筛选
- **资源收藏**: 标记和管理喜欢的资源
- **PWA支持**: 可安装到桌面，支持离线使用

### API接口
- `GET /api/hot-searches` - 获取热搜数据
- `POST /api/increment-views` - 增加访问量
- `POST /api/mark-invalid` - 标记失效资源
- `GET /api/check-term` - 检查敏感词

## 🛠️ 自定义配置

### 修改搜索源
编辑 `index.html` 中的搜索配置部分，添加或修改搜索源。

### 更新资源集合
1. 进入 `collections` 目录
2. 修改 `src/data` 中的数据文件
3. 运行 `npm run build` 重新构建

### 自定义样式
修改 `index.html` 中的CSS样式，或创建独立的样式文件。

## 📈 监控和分析

项目内置了基础的访问统计功能，可以通过以下方式查看：

1. 查看热搜数据变化
2. 监控API调用频率
3. 分析用户搜索行为

## 🤝 贡献指南

1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 📄 许可证

本项目采用MIT许可证，详见LICENSE文件。

## 🆘 问题反馈

如遇到问题，请在GitHub Issues中反馈：
https://github.com/chenggaofeng/pansou-search-engine/issues

---

**部署时间**: 2025-08-04  
**版本**: v1.0.0  
**维护者**: chenggaofeng