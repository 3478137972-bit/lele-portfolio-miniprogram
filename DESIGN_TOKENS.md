# 🎨 乐乐小程序设计规范 (Design Tokens)

**版本：** 1.0  
**创建时间：** 2026-03-23  
**品牌色：** #F97316（橙色）

---

## 1. 色彩系统

### 1.1 主色调
```css
--color-primary: #F97316;        /* 品牌橙 */
--color-primary-light: #FB923C;  /* 浅橙色 - hover 状态 */
--color-primary-pale: #FED7AA;   /* 淡橙色 - 背景装饰 */
--color-primary-dark: #EA580C;   /* 深橙色 - 点击状态 */
```

### 1.2 辅助色
```css
/* 中性色 */
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;

/* 功能色 */
--color-success: #10B981;   /* 成功绿 */
--color-warning: #F59E0B;   /* 警告黄 */
--color-error: #EF4444;     /* 错误红 */
--color-info: #3B82F6;      /* 信息蓝 */
```

### 1.3 渐变色
```css
/* 主品牌渐变 */
--gradient-primary: linear-gradient(135deg, #F97316 0%, #FB923C 50%, #FBBF24 100%);

/* 科技感渐变 */
--gradient-tech: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);

/* 柔和背景渐变 */
--gradient-soft: linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%);

/* 深色渐变 */
--gradient-dark: linear-gradient(135deg, #1F2937 0%, #111827 100%);
```

---

## 2. 字体系统

### 2.1 字体栈
```css
font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", 
             "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif;
```

### 2.2 字号规范（基于 375px 设计稿）
```css
/* 字号 */
--text-xs: 10px;   /* 0.625rem - 角标、状态文字 */
--text-sm: 12px;   /* 0.75rem - 标签、时间、提示 */
--text-base: 14px; /* 0.875rem - 正文 */
--text-lg: 16px;   /* 1rem - 三级标题 */
--text-xl: 18px;   /* 1.125rem - 二级标题 */
--text-2xl: 20px;  /* 1.25rem - 价格强调 */
--text-3xl: 22px;  /* 1.375rem - 一级标题 */
--text-4xl: 24px;  /* 1.5rem - 数据数字 */
--text-5xl: 28px;  /* 1.75rem - 超大标题 */
```

### 2.3 字重
```css
--font-normal: 400;    /* 常规 */
--font-medium: 500;    /* 中等 */
--font-semibold: 600;  /* 半粗体 */
--font-bold: 700;      /* 粗体 */
```

### 2.4 行高
```css
--leading-tight: 1.25;   /* 紧凑 */
--leading-normal: 1.5;   /* 正常 */
--leading-relaxed: 1.75; /* 宽松 */
--leading-loose: 2.0;    /* 最宽松 */
```

---

## 3. 间距系统（8px 基准）

```css
--space-0: 0;
--space-1: 4px;    /* 0.25rem - 极小间距 */
--space-2: 8px;    /* 0.5rem - 小间距 */
--space-3: 12px;   /* 0.75rem - 中小间距 */
--space-4: 16px;   /* 1rem - 标准间距 */
--space-5: 20px;   /* 1.25rem - 中大间距 */
--space-6: 24px;   /* 1.5rem - 大间距 */
--space-8: 32px;   /* 2rem - 页面边距 */
--space-10: 40px;  /* 2.5rem - 区块间距 */
--space-12: 48px;  /* 3rem - 大区块间距 */
--space-16: 64px;  /* 4rem - 页面主要分隔 */
```

---

## 4. 圆角规范

```css
--radius-none: 0;
--radius-sm: 4px;    /* 小标签、按钮 */
--radius-md: 8px;    /* 输入框、小卡片 */
--radius-lg: 12px;   /* 标准卡片、图片 */
--radius-xl: 16px;   /* 大卡片、弹窗 */
--radius-2xl: 20px;  /* 特色卡片 */
--radius-3xl: 24px;  /* 超大卡片 */
--radius-full: 9999px; /* 圆形元素、头像 */
```

---

## 5. 阴影效果

```css
/* 轻微阴影 */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* 标准阴影 */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
             0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* 强调阴影 */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
             0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* 悬浮阴影 */
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
             0 10px 10px -5px rgba(0, 0, 0, 0.04);

/* 品牌色发光阴影 */
--shadow-brand: 0 4px 14px rgba(249, 115, 22, 0.35);

/* 成功色阴影 */
--shadow-success: 0 4px 14px rgba(16, 185, 129, 0.35);
```

---

## 6. 动画效果

### 6.1 过渡时间
```css
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
--duration-slower: 500ms;
```

### 6.2 缓动函数
```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### 6.3 动画关键帧
```css
/* 淡入 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 淡出 */
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

/* 上滑淡入 */
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 缩放 */
@keyframes scaleIn {
  from { transform: scale(0.95); }
  to { transform: scale(1); }
}

/* 骨架屏闪烁 */
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## 7. 组件样式规范

### 7.1 按钮
```css
/* 主按钮 */
.btn-primary {
  background: var(--gradient-primary);
  color: #FFFFFF;
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-brand);
  transition: all var(--duration-fast) var(--ease-out);
}

.btn-primary:active {
  transform: scale(0.96);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.4);
}

/* 次按钮 */
.btn-secondary {
  background: #FFFFFF;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
}
```

### 7.2 卡片
```css
.card {
  background: #FFFFFF;
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-normal) var(--ease-out);
}

.card:active {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

### 7.3 标签
```css
.tag {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  background: var(--color-primary-pale);
  color: var(--color-primary);
}

.tag-success {
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
}

.tag-free {
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
}

.tag-deposit {
  background: rgba(139, 92, 246, 0.1);
  color: #8B5CF6;
}
```

### 7.4 图片
```css
.image-rounded {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.image-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 头像 */
.avatar {
  width: 120px;
  height: 120px;
  border-radius: var(--radius-full);
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: var(--shadow-lg);
}
```

---

## 8. 页面布局规范

### 8.1 页面容器
```css
.page-container {
  min-height: 100vh;
  background: var(--color-gray-50);
  padding: var(--space-8);
  padding-bottom: calc(var(--space-8) + env(safe-area-inset-bottom));
}
```

### 8.2 区块标题
```css
.section-header {
  text-align: center;
  margin-bottom: var(--space-8);
}

.section-title {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--color-gray-800);
  margin-bottom: var(--space-2);
}

.section-subtitle {
  font-size: var(--text-sm);
  color: var(--color-gray-500);
}
```

### 8.3 网格布局
```css
/* 2 列网格 */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

/* 3 列网格 */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}

/* 4 列网格 */
.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
}
```

---

## 9. 交互动效规范

### 9.1 点击反馈
| 元素 | 反馈效果 | 参数 |
|------|---------|------|
| 主按钮 | 缩放 + 阴影变化 | scale(0.96) + shadow-brand |
| 卡片 | 上浮 + 阴影加深 | translateY(-2px) + shadow-lg |
| 列表项 | 背景色变化 | background: #F9FAFB |
| 图标按钮 | 圆形背景出现 | background: rgba(249,115,22,0.1) |

### 9.2 页面过渡
```css
.page-enter {
  animation: fadeSlideUp var(--duration-slow) var(--ease-out);
}
```

### 9.3 列表项依次出现
```css
.list-item {
  animation: fadeIn var(--duration-normal) var(--ease-out);
  animation-fill-mode: both;
}

.list-item:nth-child(1) { animation-delay: 0.05s; }
.list-item:nth-child(2) { animation-delay: 0.1s; }
.list-item:nth-child(3) { animation-delay: 0.15s; }
```

---

## 10. 骨架屏规范

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-gray-100) 0%,
    var(--color-gray-200) 50%,
    var(--color-gray-100) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}

/* 骨架屏高度 */
.skeleton-text { height: 16px; }
.skeleton-title { height: 24px; }
.skeleton-avatar { 
  width: 120px; 
  height: 120px; 
  border-radius: var(--radius-full);
}
.skeleton-image { 
  height: 200px; 
  border-radius: var(--radius-lg);
}
```

---

## 11. 适配规范

### 11.1 安全区域
```css
/* 顶部安全区域 */
.safe-top {
  padding-top: env(safe-area-inset-top);
}

/* 底部安全区域 */
.safe-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}
```

### 11.2 响应式断点（小程序适配）
```css
/* 小屏手机 (< 375px) */
@media (max-width: 374px) {
  :root {
    --text-base: 13px;
    --space-6: 20px;
  }
}

/* 标准手机 (375px - 414px) */
@media (min-width: 375px) and (max-width: 414px) {
  /* 使用默认值 */
}

/* 大屏手机/平板 (> 414px) */
@media (min-width: 415px) {
  :root {
    --space-8: 40px;
    --space-12: 56px;
  }
}
```

---

## 12. 使用示例

### 全局样式引入
```css
/* app.wxss */
@import './styles/tokens.wxss';

page {
  background: var(--color-gray-50);
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC";
  font-size: var(--text-base);
  color: var(--color-gray-800);
}
```

### 页面使用示例
```css
/* pages/index/index.wxss */
.hero-section {
  background: var(--gradient-primary);
  padding: var(--space-12) var(--space-8);
  border-radius: 0 0 var(--radius-3xl) var(--radius-3xl);
}

.service-card {
  background: #FFFFFF;
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
}

.service-card:active {
  transform: scale(0.98);
  box-shadow: var(--shadow-lg);
}
```

---

*设计规范版本：1.0*  
*最后更新：2026-03-23*
