/**
 * 主题配置文件
 * 
 * 设计系统配置，包含颜色、间距、圆角、阴影、动画等设计 token
 * 可根据需要动态切换主题
 */

// 品牌色配置
const COLORS = {
  // 主色
  primary: '#F97316',
  primaryDark: '#EA580C',
  primaryLight: '#FB923C',
  
  // 渐变
  primaryGradient: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
  
  // 背景色
  background: '#F9FAFB',
  pageBg: '#F5F5F5',
  
  // 文字色
  textPrimary: '#1A1A1A',
  textSecondary: '#333333',
  textTertiary: '#666666',
  textDisabled: '#999999',
  
  // 边框色
  border: '#E5E5E5',
  divider: '#F0F0F0',
}

// 间距配置（单位：rpx）
const SPACING = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 30,
  xl: 40,
  xxl: 60,
}

// 圆角配置（单位：rpx）
const RADIUS = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  full: 50,
}

// 阴影配置
const SHADOWS = {
  sm: '0 2rpx 8rpx rgba(0, 0, 0, 0.06)',
  md: '0 4rpx 16rpx rgba(0, 0, 0, 0.08)',
  lg: '0 8rpx 24rpx rgba(0, 0, 0, 0.1)',
  primary: '0 8rpx 24rpx rgba(249, 115, 22, 0.25)',
}

// 动画配置（单位：秒）
const TRANSITION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
}

// 字体配置
const TYPOGRAPHY = {
  family: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif',
  size: {
    xs: 24,
    sm: 26,
    md: 28,
    lg: 32,
    xl: 36,
    xxl: 40,
    xxxl: 44,
  },
}

// 深色主题配置（备用）
const DARK_MODE = {
  enabled: false,
  colors: {
    background: '#1A1A1A',
    textPrimary: '#FFFFFF',
    textSecondary: '#CCCCCC',
    textTertiary: '#888888',
  },
}

// 主题配置对象
const THEME = {
  COLORS,
  SPACING,
  RADIUS,
  SHADOWS,
  TRANSITION,
  TYPOGRAPHY,
  DARK_MODE,
  
  // 获取 CSS 变量字符串
  getCSSVariables() {
    return `
:root {
  --primary-color: ${COLORS.primary};
  --primary-dark: ${COLORS.primaryDark};
  --primary-light: ${COLORS.primaryLight};
  --primary-gradient: ${COLORS.primaryGradient};
  --background-color: ${COLORS.background};
  --page-bg: ${COLORS.pageBg};
  --text-primary: ${COLORS.textPrimary};
  --text-secondary: ${COLORS.textSecondary};
  --text-tertiary: ${COLORS.textTertiary};
  --text-disabled: ${COLORS.textDisabled};
  --border-color: ${COLORS.border};
  --divider-color: ${COLORS.divider};
  --spacing-xs: ${SPACING.xs}rpx;
  --spacing-sm: ${SPACING.sm}rpx;
  --spacing-md: ${SPACING.md}rpx;
  --spacing-lg: ${SPACING.lg}rpx;
  --spacing-xl: ${SPACING.xl}rpx;
  --spacing-xxl: ${SPACING.xxl}rpx;
  --radius-xs: ${RADIUS.xs}rpx;
  --radius-sm: ${RADIUS.sm}rpx;
  --radius-md: ${RADIUS.md}rpx;
  --radius-lg: ${RADIUS.lg}rpx;
  --radius-full: ${RADIUS.full}rpx;
  --shadow-sm: ${SHADOWS.sm};
  --shadow-md: ${SHADOWS.md};
  --shadow-lg: ${SHADOWS.lg};
  --shadow-primary: ${SHADOWS.primary};
  --transition-fast: ${TRANSITION.fast}s;
  --transition-normal: ${TRANSITION.normal}s;
  --transition-slow: ${TRANSITION.slow}s;
  --font-size-xs: ${TYPOGRAPHY.size.xs}rpx;
  --font-size-sm: ${TYPOGRAPHY.size.sm}rpx;
  --font-size-md: ${TYPOGRAPHY.size.md}rpx;
  --font-size-lg: ${TYPOGRAPHY.size.lg}rpx;
  --font-size-xl: ${TYPOGRAPHY.size.xl}rpx;
  --font-size-xxl: ${TYPOGRAPHY.size.xxl}rpx;
  --font-size-xxxl: ${TYPOGRAPHY.size.xxxl}rpx;
}
`
  },
  
  // 切换深色模式
  toggleDarkMode(enabled) {
    THEME.DARK_MODE.enabled = enabled
    if (enabled) {
      console.log('切换到深色模式')
    } else {
      console.log('切换到浅色模式')
    }
  },
  
  // 应用主题到页面
  applyTheme() {
    const style = document.createElement('style')
    style.textContent = this.getCSSVariables()
    document.head.appendChild(style)
  },
}

// 导出主题配置
module.exports = {
  THEME,
  COLORS,
  SPACING,
  RADIUS,
  SHADOWS,
  TRANSITION,
  TYPOGRAPHY,
}
