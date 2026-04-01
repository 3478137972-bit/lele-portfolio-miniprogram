# 📸 图片 CDN 配置指南

## 🎯 目标

将大图片资源（works、operations、cases）迁移到 CDN，解决主包体积超限问题。

---

## 📊 需要迁移的图片

| 目录 | 大小 | 用途 |
|------|------|------|
| `static/images/works` | 141M | 品牌全案、AI 设计作品 |
| `static/images/operations` | 18M | 运营案例截图 |
| `static/images/cases` | 3.0M | 案例展示 |
| **总计** | **162M** | |

---

## 🚀 推荐方案：七牛云对象存储

### 步骤 1：注册七牛云（5 分钟）

1. **访问**：https://www.qiniu.com/
2. **注册账号**：手机号注册
3. **实名认证**：需要身份证（个人即可）

### 步骤 2：创建对象存储（10 分钟）

1. **进入控制台**：https://portal.qiniu.com/kodo
2. **创建空间**：
   - 空间名称：`lele-portfolio`（全局唯一）
   - 存储区域：华东（离用户近）
   - 访问控制：**公开读**（重要！）
3. **获取域名**：
   - 免费测试域名：`lele-portfolio.xxx.qiniucdn.com`
   - 有效期 30 天（临时用）
   - 或绑定自己的域名（需备案）

### 步骤 3：上传图片（20 分钟）

#### 方法 A：网页上传（适合少量）

1. 进入空间管理
2. 点击「上传文件」
3. 选择文件夹上传（支持整个目录）

#### 方法 B：命令行工具（推荐）

```bash
# 1. 下载 qshell
# https://developer.qiniu.com/kodo/tools/130/qshell

# 2. 解压并进入目录
cd qshell

# 3. 登录（AK/SK 在控制台获取）
./qshell login YOUR_AK YOUR_SK

# 4. 上传 works 目录
./qshell rput lele-portfolio /root/.openclaw/workspace_manager/lele-portfolio-miniprogram/static/images/works works

# 5. 上传 operations 目录
./qshell rput lele-portfolio /root/.openclaw/workspace_manager/lele-portfolio-miniprogram/static/images/operations operations

# 6. 上传 cases 目录
./qshell rput lele-portfolio /root/.openclaw/workspace_manager/lele-portfolio-miniprogram/static/images/cases cases
```

### 步骤 4：获取图片 URL

上传完成后，在七牛云控制台可以看到所有文件的 URL：

```
https://lele-portfolio.xxx.qiniucdn.com/works/brand-a/1.jpg
https://lele-portfolio.xxx.qiniucdn.com/works/brand-a/2.jpg
https://lele-portfolio.xxx.qiniucdn.com/operations/self-media/01_0904-0910.jpg
```

---

## 💻 修改小程序代码

### 1. 定义 CDN 基础 URL

在 `pages/portfolio/portfolio.js` 最上方添加：

```javascript
// CDN 基础 URL（替换为你的实际域名）
const CDN_BASE = 'https://lele-portfolio.xxx.qiniucdn.com';

Page({
  data: {
    // ...
  }
})
```

### 2. 批量替换图片路径

**修改前**：
```javascript
aiPackagingWorks: [
  '/static/images/works/ai-packaging/1.jpg',
  '/static/images/works/ai-packaging/2.jpg',
  '/static/images/works/ai-packaging/3.jpg',
]
```

**修改后**：
```javascript
aiPackagingWorks: [
  `${CDN_BASE}/works/ai-packaging/1.jpg`,
  `${CDN_BASE}/works/ai-packaging/2.jpg`,
  `${CDN_BASE}/works/ai-packaging/3.jpg`,
]
```

### 3. 完整替换示例

```javascript
// pages/portfolio/portfolio.js

const CDN_BASE = 'https://lele-portfolio.xxx.qiniucdn.com';

Page({
  data: {
    // AI 包装设计作品
    aiPackagingWorks: [
      `${CDN_BASE}/works/ai-packaging/1.jpg`,
      `${CDN_BASE}/works/ai-packaging/2.jpg`,
      `${CDN_BASE}/works/ai-packaging/3.jpg`,
      `${CDN_BASE}/works/ai-packaging/4.jpg`,
      `${CDN_BASE}/works/ai-packaging/5.jpg`,
    ],
    
    // AI 详情页作品
    aiDetailPageWorks: [
      `${CDN_BASE}/works/ai-detail-page/1.jpg`,
      `${CDN_BASE}/works/ai-detail-page/2.jpg`,
      `${CDN_BASE}/works/ai-detail-page/3.jpg`,
    ],
    
    // AI 物料作品
    aiMaterialWorks: [
      `${CDN_BASE}/works/ai-material/1.jpg`,
      `${CDN_BASE}/works/ai-material/2.jpg`,
      `${CDN_BASE}/works/ai-material/3.jpg`,
    ],
    
    // AI 插画作品
    aiIllustrationWorks: [
      `${CDN_BASE}/works/ai-illustration/1.jpg`,
      `${CDN_BASE}/works/ai-illustration/2.jpg`,
      `${CDN_BASE}/works/ai-illustration/3.jpg`,
    ],
    
    // AI 标签作品
    aiLabelWorks: [
      `${CDN_BASE}/works/ai-label/1.jpg`,
      `${CDN_BASE}/works/ai-label/2.jpg`,
      `${CDN_BASE}/works/ai-label/3.jpg`,
    ],
    
    // AI 宣传海报作品（9:16）
    aiPromoPosterWorks: [
      `${CDN_BASE}/works/ai-promo-poster/1.jpg`,
      `${CDN_BASE}/works/ai-promo-poster/2.jpg`,
      `${CDN_BASE}/works/ai-promo-poster/3.jpg`,
    ],
    
    // AI 贴纸作品（1:1）
    aiStickerWorks: [
      `${CDN_BASE}/works/ai-sticker/1.jpg`,
      `${CDN_BASE}/works/ai-sticker/2.jpg`,
      `${CDN_BASE}/works/ai-sticker/3.jpg`,
    ],
    
    // 品牌全案作品
    brandAWorks: [
      `${CDN_BASE}/works/brand-a/1.jpg`,
      `${CDN_BASE}/works/brand-a/2.jpg`,
      `${CDN_BASE}/works/brand-a/3.jpg`,
      `${CDN_BASE}/works/brand-a/4.jpg`,
      `${CDN_BASE}/works/brand-a/5.jpg`,
    ],
    
    // 品牌 B 作品
    brandBWorks: [
      `${CDN_BASE}/works/brand-b/1.jpg`,
      `${CDN_BASE}/works/brand-b/2.jpg`,
      `${CDN_BASE}/works/brand-b/3.jpg`,
      `${CDN_BASE}/works/brand-b/4.jpg`,
      `${CDN_BASE}/works/brand-b/5.jpg`,
    ],
    
    // 品牌 C 作品
    brandCWorks: [
      `${CDN_BASE}/works/brand-c/1.jpg`,
      `${CDN_BASE}/works/brand-c/2.jpg`,
      `${CDN_BASE}/works/brand-c/3.jpg`,
      `${CDN_BASE}/works/brand-c/4.jpg`,
      `${CDN_BASE}/works/brand-c/5.jpg`,
    ],
    
    // 自媒体运营截图
    selfMediaWorks: [
      `${CDN_BASE}/operations/self-media/01_0904-0910.jpg`,
      `${CDN_BASE}/operations/self-media/02_0908-0914.jpg`,
      // ... 共 57 张
    ],
  }
})
```

---

## 🧪 测试验证

### 1. 清除缓存并编译

```
微信开发者工具 → 工具 → 清除缓存 → 清除全部缓存
点击「编译」
```

### 2. 检查图片加载

- 打开案例集页面
- 切换不同分类
- 确认所有图片正常显示

### 3. 查看网络请求

```
开发者工具 → 调试器 → Network
确认图片从 CDN 加载（域名：lele-portfolio.xxx.qiniucdn.com）
```

### 4. 重新上传代码

```
点击「上传」→ 填写版本号 → 上传
查看代码质量报告
```

**预期结果**：
- ✅ 主包大小 < 1.5M
- ✅ 图片资源警告消失

---

## 📋 完整文件替换列表

需要修改的文件：

| 文件 | 替换内容 |
|------|---------|
| `pages/portfolio/portfolio.js` | 所有作品图片路径 |
| `pages/cases/cases.js` | 案例图片路径 |
| `pages/operations-growth/operations-growth.js` | 里程碑图片（如有） |

---

## 🎯 快速脚本（可选）

创建 `scripts/replace-cdn.js`：

```javascript
const fs = require('fs');
const path = require('path');

const CDN_BASE = 'https://lele-portfolio.xxx.qiniucdn.com';
const projectRoot = '/root/.openclaw/workspace_manager/lele-portfolio-miniprogram';

// 需要修改的文件
const files = [
  'pages/portfolio/portfolio.js',
  'pages/cases/cases.js'
];

files.forEach(file => {
  const filePath = path.join(projectRoot, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 替换所有 /static/images/works 为 CDN URL
  content = content.replace(
    /['"]\/static\/images\/works([^'"]+)['"]/g,
    `'${CDN_BASE}/works$1'`
  );
  
  // 替换 /static/images/operations
  content = content.replace(
    /['"]\/static\/images\/operations([^'"]+)['"]/g,
    `'${CDN_BASE}/operations$1'`
  );
  
  // 替换 /static/images/cases
  content = content.replace(
    /['"]\/static\/images\/cases([^'"]+)['"]/g,
    `'${CDN_BASE}/cases$1'`
  );
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ 已修改：${file}`);
});

console.log('\n🎉 全部完成！');
```

运行：
```bash
cd /root/.openclaw/workspace_manager/lele-portfolio-miniprogram
node scripts/replace-cdn.js
```

---

## 💰 七牛云费用说明

### 免费额度（个人认证）

| 资源 | 免费额度 | 超出价格 |
|------|---------|---------|
| 存储容量 | 10GB | 0.12 元/GB/月 |
| 下载流量 | 10GB/月 | 0.24 元/GB |
| 请求次数 | 10 万次/月 | 0.01 元/千次 |

### 预估费用

**乐乐作品集小程序**：
- 存储：162M ≈ 0.16GB（在免费额度内）
- 流量：假设每月 1000 次浏览 × 2M/次 = 2GB（超出 1GB）
- **月费用**：约 0.24 元（几乎免费）

---

## ⚠️ 注意事项

1. **公开读权限**：确保空间访问控制是「公开读」
2. **HTTPS 支持**：七牛云默认支持 HTTPS
3. **图片格式**：建议使用 JPG（体积小）
4. **图片压缩**：可用 TinyPNG 先压缩再上传
5. **域名备案**：如用自定义域名，需要 ICP 备案

---

## 📞 需要我帮你执行哪一步？

**回复数字选择**：
1. 我已经上传到七牛云，帮我修改代码
2. 我需要详细的七牛云注册教程
3. 我想用其他 CDN（阿里云/腾讯云）
4. 我想先用本地图片上线，后续再迁移
