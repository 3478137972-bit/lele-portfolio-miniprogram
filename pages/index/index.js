// pages/index/index.js - 首页（组件化数据）
Page({
  data: {
    // 服务列表 - 核心服务
    services: [
      {
        id: 1,
        icon: '🤖',
        name: 'AI 训练师',
        description: '从 24 年至今 · AI 赋能设计',
        color: '#F97316'
      },
      {
        id: 2,
        icon: '🎨',
        name: 'AI 设计',
        description: '落地项目 AI 完成度达 90%',
        color: '#8B5CF6'
      },
      {
        id: 3,
        icon: '📱',
        name: 'AI 产品打造',
        description: '7 天急速部署 MVP 产品',
        color: '#10B981'
      },
      {
        id: 4,
        icon: '👥',
        name: '大学生 AI 陪跑',
        description: '5 人学员 · 10 人小班',
        color: '#3B82F6'
      }
    ],
    
    // 案例预览 - 学员作品
    previewCases: [
      {
        id: 1,
        title: '瞻青·字体设计',
        image: '/static/images/home/preview-1.png'
      },
      {
        id: 2,
        title: '椰椰脆脆糖·包装设计',
        image: '/static/images/home/preview-2.jpg'
      }
    ]
  },

  onLoad() {
    // 调试日志
    console.log('首页加载，案例预览数据:', this.data.previewCases);
  },

  // 点击头像
  onAvatarTap() {
    wx.vibrateShort({
      type: 'light'
    });
    
    wx.showModal({
      title: '关于我',
      content: '乐乐 - 平面设计师 / AI 训练师\n\n1.5 年从业经验\n500+ 学员\n98% 满意度\n\n用 AI 为设计、产品、运营赋能',
      showCancel: false,
      confirmText: '好的'
    });
  },

  // 点击服务
  onServiceTap(e) {
    const service = e.currentTarget.dataset.service;
    
    wx.vibrateShort({
      type: 'light'
    });
    
    wx.showToast({
      title: service.name,
      icon: 'none',
      duration: 1500
    });
  },

  // 复制邮箱
  onCopyEmail() {
    wx.setClipboardData({
      data: '3478137972@qq.com',
      success: () => {
        wx.showToast({
          title: '已复制邮箱',
          icon: 'success'
        });
      }
    });
  },

  // 复制电话
  onCopyPhone() {
    wx.setClipboardData({
      data: '13800138000',
      success: () => {
        wx.showToast({
          title: '已复制电话',
          icon: 'success'
        });
      }
    });
  },

  // 分享按钮
  onShareTap() {
    wx.vibrateShort({
      type: 'light'
    });
    
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
    
    wx.showToast({
      title: '点击右上角分享',
      icon: 'none'
    });
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '乐乐 AI 训练师 - 用 AI 为设计赋能',
      path: '/pages/index/index',
      imageUrl: '/static/images/lele-profile.jpg'
    };
  },

  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: '乐乐 AI 训练师',
      query: '',
      imageUrl: '/static/images/lele-profile.jpg'
    };
  }
});
