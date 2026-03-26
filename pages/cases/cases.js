// pages/cases/cases.js
Page({
  data: {
    currentFilter: 'all',
    previewVisible: false,
    previewIndex: 0,
    cases: [
      // 李同学案例 - 5 黑桑葚紫米饼
      { id: 1, category: 'li', categoryName: '李同学', title: '5 黑桑葚紫米饼', desc: '电商主图设计', image: '/static/images/cases/li/1.png', rotate: -2, date: '2026.03.26' },
      // 李同学案例 - 沛县冷面
      { id: 2, category: 'li', categoryName: '李同学', title: '沛县冷面', desc: '电商包装设计', image: '/static/images/cases/li/2.png', rotate: 1.5, date: '2026.03.26' },
      // 李同学案例 - 番茄火锅底料
      { id: 3, category: 'li', categoryName: '李同学', title: '番茄火锅底料', desc: '电商主图设计', image: '/static/images/cases/li/3.png', rotate: -1, date: '2026.03.26' },
      
      // 郝同学案例 - IP 形象设计
      { id: 4, category: 'hao', categoryName: '郝同学', title: 'IP 形象设计', desc: '角色设计', image: '/static/images/cases/hao/1.png', rotate: 1.5, date: '2026.03.26' },
      // 郝同学案例 - 品牌视觉
      { id: 5, category: 'hao', categoryName: '郝同学', title: '品牌视觉设计', desc: '品牌视觉', image: '/static/images/cases/hao/2.png', rotate: -1, date: '2026.03.26' },
      // 郝同学案例 - 字体设计
      { id: 6, category: 'hao', categoryName: '郝同学', title: '字体设计', desc: '字体设计', image: '/static/images/cases/hao/3.png', rotate: 2, date: '2026.03.26' },
      
      // 王同学案例
      { id: 7, category: 'wang', categoryName: '王同学', title: '王同学 - 学习成果', desc: '线下学习成果展示', image: '/static/images/placeholder/ai-web.jpg', rotate: 2, date: '2026.03.24' },
      { id: 8, category: 'wang', categoryName: '王同学', title: '王同学 - 作品展示', desc: '线下学习成果展示', image: '/static/images/placeholder/ai-web.jpg', rotate: -1, date: '2026.03.25' }
    ]
  },

  onLoad() {
    this.filterCases('all');
  },

  // 筛选案例
  filterCases(filter) {
    const cases = this.data.cases;
    const filtered = filter === 'all' 
      ? cases 
      : cases.filter(c => c.category === filter);
    
    this.setData({
      filteredCases: filtered
    });
  },

  // 筛选点击
  onFilterTap(e) {
    const filter = e.currentTarget.dataset.filter;
    this.setData({
      currentFilter: filter
    });
    this.filterCases(filter);
  },

  // 案例点击
  onCaseTap(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      previewVisible: true,
      previewIndex: index
    });
  },

  // 关闭预览
  closePreview() {
    this.setData({
      previewVisible: false
    });
  },

  // 阻止冒泡
  stopPropagation() {
    // 阻止点击内容区域关闭
  },

  // Swiper 切换
  onSwiperChange(e) {
    this.setData({
      previewIndex: e.detail.current
    });
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '乐乐案例展示',
      path: '/pages/cases/cases',
      imageUrl: '/static/images/cases/web_development/web_01.jpg'
    };
  }
});
