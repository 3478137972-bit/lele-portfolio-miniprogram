// pages/course/course.js - 课程列表页（组件化数据）
Page({
  data: {
    loading: false,
    courses: [
      {
        id: 1,
        featured: true,
        iconText: 'AI 实战营',
        color: '#F97316',
        title: 'AI 实战营 - 打造 AI 时代超级个体',
        description: '系统学习 AI 在设计、产品、运营中的实战应用，10 人小班制，6 周完整陪跑',
        tags: ['全栈实战', '10 人小班'],
        tagType: 'default',
        students: '10 人小班',
        duration: '6 周课程',
        schedule: '每周 3 次课'
      },
      {
        id: 2,
        featured: false,
        iconText: '大学分享',
        color: '#10B981',
        title: '大学线下分享 - AI 赋能职业发展',
        description: '走进高校，分享 AI 时代超级个体全链路打法，覆盖职业规划、技能提升、项目实战',
        tags: ['免费参与'],
        tagType: 'success',
        students: '200+ 人次',
        duration: '2 小时/场',
        schedule: '每周五晚'
      },
      {
        id: 3,
        featured: false,
        iconText: 'IP 运营',
        color: '#8B5CF6',
        title: '初级 IP 运营课程 - 从 0 到 1 打造个人品牌',
        description: '以副业为切入点，打造个人 IP + 自媒体运营全攻略，从账号定位到商业化变现',
        tags: ['全案输出', '15 人小班'],
        tagType: 'purple',
        students: '15 人小班',
        duration: '8 周课程',
        schedule: '每周 2 次课'
      },
      {
        id: 4,
        featured: false,
        iconText: 'AI 设计',
        color: '#F97316',
        title: 'AI 设计课程 - 90%+AI 完成度设计系统',
        description: '全部内容经过落地检验，AI 完成度 90-99%，涵盖 logo 设计、包装设计、海报设计等',
        tags: ['落地实战', '10 人小班'],
        tagType: 'default',
        students: '10 人小班',
        duration: '10 周课程',
        schedule: '每周 2 次课'
      }
    ]
  },

  onLoad() {
    this.loadCourses();
  },

  // 加载课程数据
  loadCourses() {
    this.setData({ loading: true });
    
    // 模拟加载动画
    setTimeout(() => {
      this.setData({ loading: false });
    }, 800);
  },

  // 点击课程卡片
  onCourseTap(e) {
    const course = e.currentTarget.dataset.course;
    
    // 添加点击反馈
    wx.vibrateShort({
      type: 'light',
      success: () => {
        console.log('点击反馈：', course.title);
      }
    });
    
    // 跳转到课程详情页
    wx.navigateTo({
      url: `/pages/course-detail/course-detail?id=${course.id}&title=${encodeURIComponent(course.title)}`
    });
  },

  // 下拉刷新
  onPullDownRefresh() {
    this.loadCourses();
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 1000);
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '乐乐课程 - 找到适合你的成长路径',
      path: '/pages/course/course',
      imageUrl: '/static/images/lele-profile.jpg'
    };
  }
});
