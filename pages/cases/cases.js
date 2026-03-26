// pages/cases/cases.js
Page({
  data: {
    currentFilter: 'all',
    previewVisible: false,
    previewIndex: 0,
    cases: [
      // 李同学案例
      { id: 1, category: 'li', categoryName: '李同学', title: '李同学 - 学习成果', desc: '线下学习成果展示', image: '/static/images/placeholder/ai-web.jpg', rotate: -2, date: '2026.03.15' },
      { id: 2, category: 'li', categoryName: '李同学', title: '李同学 - 作品展示', desc: '线下学习成果展示', image: '/static/images/placeholder/ai-web.jpg', rotate: 1.5, date: '2026.03.18' },
      
      // 郝同学案例
      { id: 3, category: 'hao', categoryName: '郝同学', title: '郝同学 - 学习成果', desc: '线下学习成果展示', image: '/static/images/placeholder/ai-web.jpg', rotate: 1, date: '2026.03.20' },
      { id: 4, category: 'hao', categoryName: '郝同学', title: '郝同学 - 作品展示', desc: '线下学习成果展示', image: '/static/images/placeholder/ai-web.jpg', rotate: -1.5, date: '2026.03.22' },
      
      // 王同学案例
      { id: 5, category: 'wang', categoryName: '王同学', title: '王同学 - 学习成果', desc: '线下学习成果展示', image: '/static/images/placeholder/ai-web.jpg', rotate: 2, date: '2026.03.24' },
      { id: 6, category: 'wang', categoryName: '王同学', title: '王同学 - 作品展示', desc: '线下学习成果展示', image: '/static/images/placeholder/ai-web.jpg', rotate: -1, date: '2026.03.25' }
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
