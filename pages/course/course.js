// pages/course/course.js
Page({
  data: {
    wechat: 'm347820705',
    email: '3478137972@qq.com',
    modules: [
      {
        number: '01',
        icon: '🎯',
        title: 'AI 获客系统',
        points: [
          '精准定位目标客户',
          'AI 生成获客内容',
          '自动化营销流程',
          '数据分析与优化'
        ]
      },
      {
        number: '02',
        icon: '📝',
        title: 'AI 内容系统',
        points: [
          '爆款文案自动生成',
          '多平台内容适配',
          '图文视频一键生成',
          '内容日历规划'
        ]
      },
      {
        number: '03',
        icon: '💰',
        title: 'AI 成交系统',
        points: [
          '销售话术优化',
          '客户画像分析',
          '转化漏斗设计',
          '成交技巧训练'
        ]
      },
      {
        number: '04',
        icon: '🚀',
        title: 'AI 交付系统',
        points: [
          '服务流程标准化',
          '自动化交付工具',
          '客户满意度管理',
          '复购转介绍策略'
        ]
      }
    ]
  },

  onLoad() {
    console.log('课程页加载')
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
      title: 'AI 实战营 - 用 AI 赋能业务增长',
      path: '/pages/course/course',
      imageUrl: '/static/images/course-share.jpg'
    }
  }
})
