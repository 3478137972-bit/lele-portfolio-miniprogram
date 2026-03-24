// pages/index/index.js - 首页（组件化数据）
Page({
  data: {
    // 服务列表 - 精选最耀眼、最稀缺的核心服务
    services: [
      {
        id: 1,
        icon: '🤖',
        name: 'AI 训练师',
        description: '1.5 年实战 · AI 赋能设计',
        color: '#F97316'
      },
      {
        id: 2,
        icon: '🎨',
        name: '品牌全案',
        description: '4 大品牌案例 · 从 0 到 1',
        color: '#8B5CF6'
      },
      {
        id: 3,
        icon: '👥',
        name: '小班教学',
        description: '10 人制 · 6 期线下分享',
        color: '#10B981'
      },
      {
        id: 4,
        icon: '💡',
        name: 'AI 获客',
        description: '超级个体 · 商业化变现',
        color: '#3B82F6'
      }
    ],
    
    // 案例预览
    previewCases: [
      {
        id: 1,
        title: '品牌设计',
        image: '/static/images/cases/brand/1.jpg'
      },
      {
        id: 2,
        title: '包装设计',
        image: '/static/images/cases/package/1.jpg'
      },
      {
        id: 3,
        title: 'UI 设计',
        image: '/static/images/cases/ui/1.jpg'
      },
      {
        id: 4,
        title: '海报设计',
        image: '/static/images/cases/poster/1.jpg'
      }
    ]
  },

  onLoad() {
    this.checkImagePaths();
  },

  // 检查图片路径（容错处理）
  checkImagePaths() {
    // 如果案例图片路径不存在，使用占位图
    const previewCases = this.data.previewCases.map(item => {
      return {
        ...item,
        image: '/static/images/lele-profile.jpg' // 使用头像作为占位
      };
    });
    
    this.setData({ previewCases });
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
