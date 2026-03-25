// pages/cases/cases.js
Page({
  data: {
    currentFilter: 'all',
    previewVisible: false,
    previewIndex: 0,
    cases: [
      // 网页开发案例 (6 张)
      { id: 1, category: 'web', categoryName: '网页开发', title: '网页开发案例 #1', desc: '乐乐个人网页开发作品', image: '/static/images/cases/web_development/web_01.jpg' },
      { id: 2, category: 'web', categoryName: '网页开发', title: '网页开发案例 #2', desc: '乐乐个人网页开发作品', image: '/static/images/cases/web_development/web_02.jpg' },
      { id: 3, category: 'web', categoryName: '网页开发', title: '网页开发案例 #3', desc: '乐乐个人网页开发作品', image: '/static/images/cases/web_development/web_03.jpg' },
      { id: 4, category: 'web', categoryName: '网页开发', title: '网页开发案例 #4', desc: '乐乐个人网页开发作品', image: '/static/images/cases/web_development/web_04.jpg' },
      { id: 5, category: 'web', categoryName: '网页开发', title: '网页开发案例 #5', desc: '乐乐个人网页开发作品', image: '/static/images/cases/web_development/web_05.jpg' },
      { id: 6, category: 'web', categoryName: '网页开发', title: '网页开发案例 #6', desc: '乐乐个人网页开发作品', image: '/static/images/cases/web_development/web_06.jpg' },
      
      // 付费凭证 (2 张)
      { id: 7, category: 'payment', categoryName: '付费凭证', title: '付费凭证 #1', desc: '学员付费记录 - 信任的起点', image: '/static/images/cases/payment/pay_01.jpg' },
      { id: 8, category: 'payment', categoryName: '付费凭证', title: '付费凭证 #2', desc: '学员付费记录 - 信任的起点', image: '/static/images/cases/payment/pay_02.jpg' }
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
