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
        tags: ['全栈实战'],
        tagType: 'default',
        schedule: '一年内周日南京晚 7-21:30\n可与乐乐免费参与'
      },
      {
        id: 2,
        featured: false,
        iconText: '乐乐个人线下分享',
        color: '#10B981',
        title: '大学线下分享 - AI 赋能职业发展',
        description: '每周一场，分享 AI 领域前沿落地玩法、AI 时代信息差，具体通知私信进群',
        tags: ['免费参与'],
        tagType: 'success',
        duration: '1.5-2h',
        schedule: '每周五晚'
      },
      {
        id: 3,
        featured: false,
        iconText: 'IP 运营',
        color: '#8B5CF6',
        title: '初级 IP 运营课程 - 从 0 到 1 打造个人品牌',
        description: '以副业为切入点，打造个人 IP + 自媒体运营全攻略，从账号定位到商业化变现',
        tags: ['IP 打造'],
        tagType: 'purple',
        duration: '8 次课程每次 45min',
        schedule: '一周两次，一个月内带走初级 IP 运营玩法'
      },
      {
        id: 4,
        featured: false,
        iconText: 'AI 设计',
        color: '#F97316',
        title: 'AI 设计课程 - 90%+AI 完成度设计系统',
        description: '所有内容全部经过实战落地，掌握 AI 时代设计师与 AI 的协作关系',
        tags: ['落地实战'],
        tagType: 'default',
        duration: '8 次课程，每次 1.5h'
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
