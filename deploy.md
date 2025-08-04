# 盘搜项目部署指南

## 项目概述
盘搜是一个网盘资源搜索工具，支持多个网盘平台的资源搜索，包括阿里云盘、夸克网盘、百度网盘等。

## 本地测试
✅ **已完成**
- 项目依赖已安装
- Collections模块已构建
- 本地HTTP服务器已启动在 http://localhost:3000
- JavaScript错误已修复

## 部署到Vercel

### 前置要求
1. 拥有Vercel账户（可通过GitHub、Google等登录）
2. 已安装Vercel CLI（已完成）

### 部署步骤

#### 1. 登录Vercel
```bash
vercel login
```
按照提示选择登录方式（GitHub、Google等）

#### 2. 初始化项目
```bash
vercel
```
首次部署时会询问：
- Set up and deploy? → Y
- Which scope? → 选择你的账户
- Link to existing project? → N
- What's your project's name? → pansou-ui（或自定义名称）
- In which directory is your code located? → ./

#### 3. 配置环境变量（可选）
如果需要配置Vercel KV数据库或其他环境变量：
```bash
vercel env add
```

#### 4. 后续部署
```bash
vercel --prod
```

### 重要配置文件

#### vercel.json（已存在）
项目已包含Vercel配置文件，包含：
- 构建设置
- 路由重写规则
- API路由配置

#### package.json构建脚本
- `npm run build:collections` - 构建collections模块
- 部署前会自动执行构建

### 注意事项

1. **构建顺序**：collections模块必须先构建，因为主项目依赖其生成的静态文件

2. **缓存更新**：如果修改了内容，需要更新`sw.js`中的`CACHE_NAME`来强制用户更新

3. **API功能**：
   - 热搜功能需要Vercel KV数据库支持
   - 违规词检查功能需要配置相应的API
   - 资源失效标记功能需要数据库支持

4. **自定义域名**：部署成功后可在Vercel控制台配置自定义域名

### 故障排除

1. **登录失败**：确保网络连接正常，尝试不同的登录方式
2. **构建失败**：检查collections目录的依赖是否正确安装
3. **API错误**：确保Vercel KV数据库已配置（如需要）

### 项目结构
```
盘搜/
├── api/                 # Vercel API路由
├── collections/         # 资源集合模块
├── collections-static/  # 构建生成的静态文件
├── index.html          # 主页面
├── sw.js              # Service Worker
├── vercel.json        # Vercel配置
└── package.json       # 项目配置
```

## 当前状态
- ✅ 项目克隆完成
- ✅ 依赖安装完成
- ✅ Collections构建完成
- ✅ 本地测试服务器运行中
- ✅ JavaScript错误已修复
- ⏳ 等待部署到Vercel

## 下一步
1. 登录Vercel账户
2. 执行 `vercel` 命令进行首次部署
3. 配置必要的环境变量（如需要）
4. 测试线上功能