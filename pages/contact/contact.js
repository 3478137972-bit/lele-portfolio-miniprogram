// pages/contact/contact.js - 联系页（组件化数据）
Page({
  data: {
    wechat: 'm347820705',
    email: '3478137972@qq.com',
    location: '江苏镇江'
  },

  // 复制微信
  copyWechat() {
    wx.vibrateShort({ type: 'light' });
    
    wx.setClipboardData({
      data: this.data.wechat,
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
    wx.vibrateShort({ type: 'light' });
    
    wx.setClipboardData({
      data: this.data.email,
      success: () => {
        wx.showToast({
          title: '已复制邮箱',
          icon: 'success'
        });
      }
    });
  },

  // 预览二维码
  previewQrcode() {
    wx.vibrateShort({ type: 'light' });
    
    wx.previewImage({
      current: 'https://lelexue.site/images/qrcode/wechat.jpg',
      urls: ['https://lelexue.site/images/qrcode/wechat.jpg']
    });
  },

  // 分享按钮
  onShareTap() {
    wx.vibrateShort({ type: 'light' });
    
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
      title: '联系我 - 乐乐 AI 训练师',
      path: '/pages/contact/contact',
      imageUrl: 'https://lelexue.site/images/lele-profile.jpg'
    };
  },

  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: '乐乐 AI 训练师',
      query: '',
      imageUrl: 'https://lelexue.site/images/lele-profile.jpg'
    };
  }
});
