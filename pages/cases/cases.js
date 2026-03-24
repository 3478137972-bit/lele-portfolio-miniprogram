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
      { id: 8, category: 'payment', categoryName: '付费凭证', title: '付费凭证 #2', desc: '学员付费记录 - 信任的起点', image: '/static/images/cases/payment/pay_02.jpg' },
      
      // 学员成果 (6 张)
      { id: 9, category: 'portfolio', categoryName: '学员成果', title: 'AI 设计作品 #1', desc: '学员完成的 AI 设计作品', image: '/static/images/cases/portfolio/work_01.jpg' },
      { id: 10, category: 'portfolio', categoryName: '学员成果', title: 'AI 设计作品 #2', desc: '学员完成的 AI 设计作品', image: '/static/images/cases/portfolio/work_02.jpg' },
      { id: 11, category: 'portfolio', categoryName: '学员成果', title: 'AI 设计作品 #3', desc: '学员完成的 AI 设计作品', image: '/static/images/cases/portfolio/work_03.jpg' },
      { id: 12, category: 'portfolio', categoryName: '学员成果', title: 'AI 设计作品 #4', desc: '学员完成的 AI 设计作品', image: '/static/images/cases/portfolio/work_04.jpg' },
      { id: 13, category: 'portfolio', categoryName: '学员成果', title: 'AI 设计作品 #5', desc: '学员完成的 AI 设计作品', image: '/static/images/cases/portfolio/work_05.jpg' },
      { id: 14, category: 'portfolio', categoryName: '学员成果', title: 'AI 设计作品 #6', desc: '学员完成的 AI 设计作品', image: '/static/images/cases/portfolio/work_06.jpg' },
      
      // 学员评价 (4 张)
      { id: 15, category: 'feedback', categoryName: '学员评价', title: '学员评价 #1', desc: '学员学习反馈与心得', image: '/static/images/cases/feedback/review_01.jpg' },
      { id: 16, category: 'feedback', categoryName: '学员评价', title: '学员评价 #2', desc: '学员学习反馈与心得', image: '/static/images/cases/feedback/review_02.jpg' },
      { id: 17, category: 'feedback', categoryName: '学员评价', title: '学员评价 #3', desc: '学员学习反馈与心得', image: '/static/images/cases/feedback/review_03.jpg' },
      { id: 18, category: 'feedback', categoryName: '学员评价', title: '学员评价 #4', desc: '学员学习反馈与心得', image: '/static/images/cases/feedback/review_04.jpg' },
      
      // 学员互动 (8 张)
      { id: 19, category: 'interaction', categoryName: '学员互动', title: '学员互动 #1', desc: '学员学习与答疑记录', image: '/static/images/cases/interaction/chat_01.jpg' },
      { id: 20, category: 'interaction', categoryName: '学员互动', title: '学员互动 #2', desc: '学员学习与答疑记录', image: '/static/images/cases/interaction/chat_02.jpg' },
      { id: 21, category: 'interaction', categoryName: '学员互动', title: '学员互动 #3', desc: '学员学习与答疑记录', image: '/static/images/cases/interaction/chat_03.jpg' },
      { id: 22, category: 'interaction', categoryName: '学员互动', title: '学员互动 #4', desc: '学员学习与答疑记录', image: '/static/images/cases/interaction/chat_04.jpg' },
      { id: 23, category: 'interaction', categoryName: '学员互动', title: '学员互动 #5', desc: '学员学习与答疑记录', image: '/static/images/cases/interaction/chat_05.jpg' },
      { id: 24, category: 'interaction', categoryName: '学员互动', title: '学员互动 #6', desc: '学员学习与答疑记录', image: '/static/images/cases/interaction/chat_06.jpg' },
      { id: 25, category: 'interaction', categoryName: '学员互动', title: '学员互动 #7', desc: '学员学习与答疑记录', image: '/static/images/cases/interaction/chat_07.jpg' },
      { id: 26, category: 'interaction', categoryName: '学员互动', title: '学员互动 #8', desc: '学员学习与答疑记录', image: '/static/images/cases/interaction/chat_08.jpg' }
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
      title: '乐乐学员案例展示',
      path: '/pages/cases/cases',
      imageUrl: '/static/images/cases/web_development/web_01.jpg'
    };
  }
});
