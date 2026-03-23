// pages/about/about.js
Page({
  data: {
    name: '乐乐',
    title: '平面设计师 / AI 训练师',
    location: '江苏镇江',
    intro: '一个用 AI 为设计、产品、运营赋能的 AI 训练师',
    experience: '1.5 年设计经验',
    wechat: 'm347820705',
    email: '3478137972@qq.com',
    skills: [
      '品牌设计',
      '视觉设计',
      'AI 训练',
      '创意设计',
      '产品设计',
      '运营设计',
      'AI 获客',
      'AI 内容'
    ]
  },

  onLoad() {
    console.log('关于页加载')
  },

  // 复制微信号
  copyWechat() {
    wx.setClipboardData({
      data: this.data.wechat,
      success: () => {
        wx.showToast({
          title: '微信号已复制',
          icon: 'success'
        })
      }
    })
  },

  // 复制邮箱
  copyEmail() {
    wx.setClipboardData({
      data: this.data.email,
      success: () => {
        wx.showToast({
          title: '邮箱已复制',
          icon: 'success'
        })
      }
    })
  }
})
