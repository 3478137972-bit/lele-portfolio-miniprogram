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
    reviews: [
      {
        id: 1,
        author: '张同学',
        content: '课程内容非常实战，学完就能用在工作中，老师讲解也很清晰！',
        rating: 5
      },
      {
        id: 2,
        author: '李同学',
        content: '小班教学效果很好，老师能照顾到每个学员，答疑很及时',
        rating: 5
      },
      {
        id: 3,
        author: '王同学',
        content: '从 0 基础到现在能独立完成项目，收获非常大，推荐！',
        rating: 5
      }
    ]
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
        tags: ['全栈实战', '10 人小班'],
        tagType: 'default',
        students: '10 人小班',
        duration: '6 周课程',
        schedule: '每周 3 次课',
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
        icon: '🎓',
        color: '#10B981',
        title: '大学线下分享 - AI 赋能职业发展',
        description: '走进高校，分享 AI 时代超级个体全链路打法',
        tags: ['免费参与'],
        tagType: 'success',
        students: '200+ 人次',
        duration: '2 小时/场',
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
        icon: 'IP',
        color: '#8B5CF6',
        title: '初级 IP 运营课程 - 从 0 到 1 打造个人品牌',
        description: '以副业为切入点，打造个人 IP + 自媒体运营全攻略',
        tags: ['全案输出', '15 人小班'],
        tagType: 'purple',
        students: '15 人小班',
        duration: '8 周课程',
        schedule: '每周 2 次课',
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
        icon: '🎨',
        color: '#F97316',
        title: 'AI 设计课程 - 90%+AI 完成度设计系统',
        description: '全部内容经过落地检验，AI 完成度 90-99%',
        tags: ['落地实战', '10 人小班'],
        tagType: 'default',
        students: '10 人小班',
        duration: '10 周课程',
        schedule: '每周 2 次课',
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
