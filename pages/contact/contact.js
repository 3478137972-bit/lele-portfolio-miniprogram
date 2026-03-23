// pages/contact/contact.js
Page({
  data: {
    wechat: 'm347820705',
    email: '3478137972@qq.com',
    location: '江苏镇江',
    social: {
      wechatOfficial: '乐乐 AI 训练师',
      xiaohongshu: '乐乐 AI 训练师'
    }
  },

  onLoad() {
    console.log('联系页加载')
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
  },

  // 预览二维码
  previewQrcode() {
    wx.previewImage({
      current: '/static/images/qrcode/wechat.jpg',
      urls: ['/static/images/qrcode/wechat.jpg']
    })
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '乐乐 AI 训练师 - 用 AI 为设计赋能',
      path: '/pages/contact/contact',
      imageUrl: '/static/images/share-cover.jpg'
    }
  }
})
