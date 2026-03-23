// pages/course/course.js - 课程列表页
Page({
  data: {
    courses: {
      'ai-bootcamp': {
        name: 'AI 实战营',
        tag: '共创项目',
        tagType: 'orange',
        icon: '🚀',
        desc: '系统学习 AI 在设计、产品、运营中的实战应用',
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
      'university-share': {
        name: '大学线下分享',
        tag: '免费参与',
        tagType: 'green',
        icon: '🎓',
        desc: '走进高校，分享 AI 时代超级个体全链路打法',
        location: '江苏大学',
        time: '2025.10.31 - 12.19 每周五晚 19 点',
        scale: '10 人小班制',
        content: [
          '定位实战心法',
          'AI 结合业务的打法',
          '分享 AI 共创圈的新思路',
          'AIP 打造思路',
          '乐乐 AI 设计课程'
        ],
        highlight: 'AI 时代超级个体全链路打法分享'
      },
      'ip-operation': {
        name: '初级 IP 运营课程',
        tag: '交押金·全勤全退',
        tagType: 'purple',
        icon: '📱',
        desc: '以副业为切入点，打造个人 IP+ 自媒体运营全攻略',
        entryPoint: '副业',
        modules: [
          {
            title: '打造 AIP',
            content: [
              '何为 AIP',
              '为什么要做 AIP',
              '小白怎么快速上手',
              '未来用 AI 辅助达到什么程度'
            ]
          },
          {
            title: '自媒体运营教学',
            content: [
              '找到你的核心优势',
              '快速做起你的自媒体账号',
              '（如果现阶段没有交付能力，则边学边教边分享，快速动起来）'
            ]
          }
        ]
      },
      'ai-design': {
        name: 'AI 设计课程',
        tag: '交押金·全勤全退',
        tagType: 'purple',
        icon: '🎨',
        desc: '全部内容经过落地检验，AI 完成度 90-99%',
        features: [
          '全部内容经过落地检验，不做飞机稿',
          'AI 完成度至高 99%，普遍在 90%'
        ],
        content: [
          'AI+LOGO 设计',
          'AI+IP 打造（商业落地性）',
          'AI 插画制作',
          'AI 产品图拍摄制作',
          'AI 电商详情页、主图制作',
          'AI 产品包装制作',
          'AI 宣传物料制作'
        ],
        goal: '让你建立 AI 时代设计师与 AI 的协作关系'
      }
    }
  },

  onLoad() {
    console.log('课程列表页加载')
  },

  // 跳转到课程详情页
  goToCourseDetail(e) {
    const courseKey = e.currentTarget.dataset.course
    wx.navigateTo({
      url: `/pages/course-detail/course-detail?course=${courseKey}`
    })
  },
  
  // 课程统计信息展示
  getCourseStats(key) {
    const statsMap = {
      'ai-bootcamp': [
        { icon: '👥', text: '10人小班' },
        { icon: '💰', text: '¥999' },
        { icon: '📅', text: '6周课程' }
      ],
      'university-share': [
        { icon: '📍', text: '江苏高校' },
        { icon: '👥', text: '200+人次' },
        { icon: '⏰', text: '每周五晚' }
      ],
      'ip-operation': [
        { icon: '👥', text: '15人小班' },
        { icon: '💰', text: '¥1999' },
        { icon: '📅', text: '8周课程' }
      ],
      'ai-design': [
        { icon: '👥', text: '10人小班' },
        { icon: '💰', text: '¥2999' },
        { icon: '📅', text: '10周课程' }
      ]
    }
    return statsMap[key] || []
  }
})
