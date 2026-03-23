// pages/index/index.js
Page({
  data: {
    // 个人信息
    name: '乐乐',
    title: '平面设计师 / AI 训练师',
    experience: '1.5 年从业经验',
    intro: '一个用 AI 为设计、产品、运营赋能的 AI 训练师',
    
    // 服务列表
    services: [
      { icon: '🎨', name: '品牌设计' },
      { icon: '🤖', name: 'AI 训练' },
      { icon: '📱', name: '视觉设计' },
      { icon: '💡', name: '创意策划' }
    ],
    
    // 联系方式
    email: '3478137972@qq.com',
    location: '江苏镇江',
    wechat: 'm347820705'
  },

  onLoad() {
    console.log('首页加载')
  },

  onShareAppMessage() {
    return {
      title: '乐乐 AI 训练师 - 用 AI 为设计赋能',
      path: '/pages/index/index',
      imageUrl: '/static/images/share-cover.jpg'
    }
  },
  
  // 头像点击事件
  onAvatarTap() {
    wx.vibrateLong({
      success: () => {
        console.log('头像点击反馈');
      }
    });
  }
})
