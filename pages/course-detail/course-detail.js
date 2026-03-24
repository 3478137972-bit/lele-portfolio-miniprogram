// pages/course-detail/course-detail.js - 课程详情页（组件化数据）
Page({
  data: {
    loading: true,
    course: null,
    instructor: {
      name: '乐乐',
      title: '资深 AI 训练师 / 平面设计师',
      avatar: '/static/images/lele-profile.jpg',
      description: '1.5 年从业经验，500+ 学员，擅长将 AI 技术融入设计、产品、运营全流程'
    },
  },

  onLoad(options) {
    const courseId = parseInt(options.id);
    this.loadCourseDetail(courseId);
  },

  // 加载课程详情
  loadCourseDetail(courseId) {
    this.setData({ loading: true });

    // 模拟网络请求
    setTimeout(() => {
      const courses = this.getAllCourses();
      const course = courses.find(c => c.id === courseId);
      
      if (course) {
        this.setData({
          course: course,
          loading: false
        });
        wx.setNavigationBarTitle({
          title: course.title
        });
      } else {
        this.setData({ loading: false });
        wx.showToast({
          title: '课程不存在',
          icon: 'none'
        });
      }
    }, 500);
  },

  // 获取所有课程数据
  getAllCourses() {
    return [
      {
        id: 1,
        featured: true,
        icon: 'AI',
        color: '#F97316',
        title: 'AI 实战营 - 打造 AI 时代超级个体',
        description: '系统学习 AI 在设计、产品、运营中的实战应用',
        tags: ['全栈实战'],
        tagType: 'default',
        schedule: '一年内周日南京晚 7-21:30\n可与乐乐免费参与',
        courseObjectives: [
          '一套完整的 AI 工具武器库 (覆盖内容、电商、IP、效率、开发 5 大板块)',
          '每个板块都有现成的 SOP 流程 + 模板 + 案例',
          '40+ 个实战项目的作业成果，就是你的案例集和变现素材',
          '别人还在研究 AI 能干嘛，你已经用 AI 把钱赚了',
          '学完本课，你将不再焦虑"AI 到底怎么用"，而是直接带走一套《一人公司·AI 商业变现操作系统》'
        ],
        features: [
          { title: '听得懂', desc: '零基础友好，全程大白话秒懂教学，不讲理论不念术语，60 岁大叔也能跟上' },
          { title: '学得会', desc: '不讲虚的，每节课就是：打开工具跟着步骤做出成果。公式化、模板化、傻瓜化' },
          { title: '拿得定', desc: '每期课后打包带走：课件 PDF+ 操作 SOP+ 提示词模板 + 实操录屏回放' },
          { title: '用得上', desc: '周日晚上学完，周一早上就能用在你的生意、工作、副业里，立刻产出结果' }
        ],
        targetAudience: [
          '想靠 AI 搞副业但不知从何下手的上班族 - 给你 40+ 条变现路径，选一条干就行',
          '深陷内容焦虑的自媒体人/IP 创业者 - AI 帮你批量生产爆款内容，告别灵感枯竭',
          '个人扛所有事的小微创业者 - 用 AI 替代设计师 + 文案 + 客服 + 运营，省下一年几十万人力成本',
          '传统行业老板想转型但看不懂 AI 的 - 不用懂技术，只要会点鼠标，就能让 AI 帮你干活',
          '大学生想提前建立 AI 竞争力的 - 别人还在投简历，你已经能用 AI 接单赚钱',
          '电商卖家想降本增效的 - 主图、详情页、客服话术，AI 全搞定，成本砍掉 80%'
        ],
        syllabus: [
          { title: 'AI 基础与工具入门', description: '掌握主流 AI 工具的使用方法' },
          { title: 'AI 在设计中的应用', description: '学习 AI 辅助设计的实战技巧' },
          { title: 'AI 在产品策划中的运用', description: '用 AI 提升产品策划效率' },
          { title: 'AI 内容创作与运营', description: '掌握 AI 生成高质量内容的方法' },
          { title: '实战项目演练', description: '完整项目实战，从 0 到 1 落地' },
          { title: '商业化变现指导', description: '学习如何将 AI 技能变现' }
        ]
      },
      {
        id: 2,
        featured: false,
        icon: '乐乐个人线下分享',
        color: '#10B981',
        title: '大学线下分享 - AI 赋能职业发展',
        description: '每周一场，分享 AI 领域前沿落地玩法、AI 时代信息差，具体通知私信进群',
        tags: ['免费参与'],
        tagType: 'success',
        duration: '1.5-2h',
        schedule: '每周五晚',
        syllabus: [
          { title: 'AI 时代职业规划', description: '了解 AI 对职业发展的影响' },
          { title: '技能提升路径', description: '制定个人技能提升计划' },
          { title: '项目实战分享', description: '真实项目案例解析' },
          { title: '互动答疑', description: '现场解答学员问题' }
        ]
      },
      {
        id: 3,
        featured: false,
        icon: 'IP 运营',
        color: '#8B5CF6',
        title: '初级 IP 运营课程 - 从 0 到 1 打造个人品牌',
        description: '以副业为切入点，打造个人 IP + 自媒体运营全攻略',
        tags: ['IP 打造'],
        tagType: 'purple',
        duration: '8 次课程每次 45min',
        schedule: '一周两次，一个月内带走初级 IP 运营玩法',
        syllabus: [
          { title: '个人 IP 定位', description: '找到适合自己的 IP 方向' },
          { title: '内容创作方法', description: '学习持续输出优质内容' },
          { title: '平台运营策略', description: '掌握多平台运营技巧' },
          { title: '粉丝增长技巧', description: '快速积累精准粉丝' },
          { title: '商业化变现', description: '多种变现方式详解' },
          { title: '实战项目指导', description: '个人 IP 项目落地' }
        ]
      },
      {
        id: 4,
        featured: false,
        icon: 'AI 设计',
        color: '#F97316',
        title: 'AI 设计课程 - 90%+AI 完成度设计系统',
        description: '所有内容全部经过实战落地，掌握 AI 时代设计师与 AI 的协作关系',
        tags: ['落地实战'],
        tagType: 'default',
        duration: '8 次课程，每次 1.5h',
        syllabus: [
          { title: 'AI 设计工具入门', description: '掌握主流 AI 设计工具' },
          { title: 'Logo 设计实战', description: 'AI 辅助 Logo 设计全流程' },
          { title: '包装设计实战', description: '用 AI 完成包装设计项目' },
          { title: '海报设计实战', description: '快速生成高质量海报' },
          { title: '品牌视觉系统', description: '完整品牌 VI 设计方法' },
          { title: '商业项目接单', description: '学习如何接设计订单' }
        ]
      }
    ];
  },

  // 点击立即咨询
  onEnrollTap() {
    wx.vibrateShort({
      type: 'light'
    });
    
    wx.showModal({
      title: '课程咨询',
      content: '添加微信：lele_designer，备注"课程咨询"',
      confirmText: '复制微信号',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          wx.setClipboardData({
            data: 'lele_designer',
            success: () => {
              wx.showToast({
                title: '已复制微信号',
                icon: 'success'
              });
            }
          });
        }
      }
    });
  },

  // 分享
  onShareAppMessage() {
    const course = this.data.course;
    return {
      title: course ? course.title : '乐乐课程',
      path: `/pages/course-detail/course-detail?id=${course?.id || 1}`,
      imageUrl: '/static/images/lele-profile.jpg'
    };
  }
});
