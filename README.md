# 乐乐 AI 训练师 - 微信小程序

乐乐个人作品集小程序原生开发项目

## 📁 项目结构

```
lele-portfolio-miniprogram/
├── pages/                    # 页面目录
│   ├── index/               # 首页
│   ├── about/               # 关于页
│   ├── portfolio/           # 作品集
│   ├── course/              # 课程页
│   └── contact/             # 联系页
├── static/                   # 静态资源
│   ├── images/              # 图片资源
│   └── icons/               # 图标资源
├── utils/                    # 工具函数
├── app.js                    # 小程序入口
├── app.json                  # 小程序配置
├── app.wxss                  # 全局样式
├── project.config.json       # 项目配置
└── sitemap.json             # 搜索配置
```

## 🚀 快速开始

### 1. 注册小程序账号

访问：https://mp.weixin.qq.com
- 选择"小程序"
- 个人主体
- 填写信息完成注册

### 2. 获取 AppID

登录小程序后台 → 开发管理 → 开发设置
- 复制 AppID (小程序 ID)

### 3. 配置项目

编辑 `project.config.json`，替换 AppID：
```json
{
  "appid": "你的小程序 AppID"
}
```

### 4. 导入项目

打开微信开发者工具：
- 扫码登录
- 点击"导入项目"
- 选择项目目录：`lele-portfolio-miniprogram`
- 填入 AppID

### 5. 准备图片资源

需要从 Web 版复制的图片：
```
static/images/
├── lele-profile.jpg      # 乐乐个人形象照（必需）
└── share-cover.jpg       # 分享封面图（可选）

static/icons/
├── home.png              # 首页图标
├── home-active.png
├── portfolio.png         # 作品集图标
├── portfolio-active.png
├── course.png            # 课程图标
├── course-active.png
├── contact.png           # 联系图标
└── contact-active.png
```

**图标尺寸要求：** 81px × 81px

**图片来源：**
- 从 Web 版 `public/images/` 复制
- 或使用图标库：https://www.iconfont.cn

### 6. 复制作品图片

从 Web 版复制 24 张作品图到 `static/images/works/`

---

## 📋 开发进度

### ✅ 已完成
- [x] 项目框架创建
- [x] app.json 配置
- [x] 首页（index）开发
- [x] 全局样式设计

### 🔄 进行中
- [ ] 关于页（about）
- [ ] 作品集页（portfolio）
- [ ] 课程页（course）
- [ ] 联系页（contact）

### ⏳ 待完成
- [ ] 图标资源准备
- [ ] 作品图片上传
- [ ] 真机测试
- [ ] 提交审核

---

## 🎨 设计规范

### 品牌色
- 主色：`#F97316` (橙色)
- 渐变：`linear-gradient(135deg, #F97316 0%, #fb923c 100%)`

### 字体
- 标题：40rpx, bold
- 正文：28rpx
- 辅助文字：24rpx

### 间距
- 页面边距：30rpx
- 卡片内边距：30rpx
- 元素间距：24rpx

---

## 📱 页面说明

### 1. 首页（index）
- 个人形象展示
- 一句话介绍
- 核心服务
- 快速入口
- 联系方式预览

### 2. 关于页（about）
- 详细介绍
- 技能标签
- 从业经历

### 3. 作品集（portfolio）
- 4 个品牌案例
- 每个案例 6 张图
- 图片预览功能

### 4. 课程页（course）
- AI 实战营介绍
- 4 大模块
- 报名二维码

### 5. 联系页（contact）
- 微信号（一键复制）
- 邮箱
- 所在地
- 公众号/小红书

---

## 🔧 常用命令

### 预览
在开发者工具中点击"预览"

### 上传
在开发者工具中点击"上传"

### 真机测试
- 开发者工具 → 预览
- 微信扫码打开

---

## 📤 提交审核

### 准备工作
- [ ] 所有页面开发完成
- [ ] 图片资源上传完毕
- [ ] 真机测试通过
- [ ] 功能完整可测试

### 提交材料
- 小程序功能说明
- 隐私政策（可用模板）
- 服务类目：工具 - 效率

### 审核时间
1-3 个工作日

---

## 💡 特色功能

### 1. 微信一键复制
```javascript
wx.setClipboardData({
  data: 'm347820705',
  success: () => {
    wx.showToast({ title: '已复制' })
  }
})
```

### 2. 图片预览
```javascript
wx.previewImage({
  current: currentUrl,
  urls: imageUrls
})
```

### 3. 保存到相册
```javascript
wx.saveImageToPhotosAlbum({
  filePath: imagePath,
  success: () => {
    wx.showToast({ title: '保存成功' })
  }
})
```

### 4. 分享给朋友
```javascript
onShareAppMessage() {
  return {
    title: '乐乐 AI 训练师',
    path: '/pages/index/index'
  }
}
```

---

## 📞 联系方式

- 微信：m347820705
- 邮箱：3478137972@qq.com
- 所在地：江苏镇江

---

## 📝 开发日志

### 2026-03-23
- ✅ 项目框架创建
- ✅ 首页开发完成
- 🔄 继续开发其他页面

---

*最后更新：2026-03-23*
