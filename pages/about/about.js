// pages/about/about.js - 关于页（组件化数据）
Page({
  data: {
    // 技能列表
    skills: [
      '品牌设计',
      '视觉设计',
      'AI 训练',
      '创意设计',
      '产品设计',
      '运营设计',
      'AI 获客',
      'AI 内容'
    ],
    
    // 活动图片
    activityImages: [
      'https://lelexue.site/images/activities/ai-club-banner.jpg',
      'https://lelexue.site/images/activities/ai-club-group.jpg',
      'https://lelexue.site/images/activities/personal-sharing.jpg',
      'https://lelexue.site/images/activities/nanjing-meetup.jpg'
    ]
  },

  onLoad() {
    // 检查图片路径
    this.checkImagePaths();
  },

  // 检查图片路径（容错处理）
  checkImagePaths() {
    // 如果活动图片不存在，使用占位图
    const activityImages = this.data.activityImages.map(() => {
      return 'https://lelexue.site/images/lele-profile.jpg';
    });
    
    this.setData({ activityImages });
  },

  // 预览图片
  previewImage(e) {
    const index = e.currentTarget.dataset.index;
    
    wx.previewImage({
      current: this.data.activityImages[index],
      urls: this.data.activityImages
    });
  },

  // 复制微信
  copyWechat() {
    wx.setClipboardData({
      data: 'm347820705',
      success: () => {
        wx.showToast({
          title: '已复制微信号',
          icon: 'success'
        });
      }
    });
  },

  // 复制邮箱
  copyEmail() {
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

  // 分享
  onShareAppMessage() {
    return {
      title: '关于乐乐 - AI 训练师',
      path: '/pages/about/about',
      imageUrl: 'https://lelexue.site/images/lele-profile.jpg'
    };
  }
});
