// pages/portfolio/portfolio.js - 案例集（三级分类重构版）
Page({
  data: {
    // 一级分类
    categories: [
      { id: 'brand', name: '品牌全案', icon: '🎨' },
      { id: 'ai_design', name: 'AI 设计作品', icon: '🤖' },
      { id: 'ai_web', name: 'AI WEB 产品', icon: '📱' },
      { id: 'student', name: '学员学习案例', icon: '👥' }
    ],
    
    // 当前选中的分类
    currentCategory: 'brand',
    
    // 二级品牌数据（品牌全案下的子分类）
    brands: {
      brand: [
        { id: 'jiekeda', name: '捷客达' },
        { id: 'hebenqingtian', name: '禾本轻甜' },
        { id: 'yiwannmian', name: '一豌面' },
        { id: 'dikatetegong', name: '低卡特工' }
      ],
      ai_design: [],
      ai_web: [],
      student: []
    },
    
    // 二级子分类数据（AI 设计作品下的子分类）
    subcategories: {
      brand: [],
      ai_design: [
        { id: 'ai_packaging', name: 'AI 包装' },
        { id: 'ai_detail_page', name: 'AI 详情页' },
        { id: 'ai_material', name: 'AI 物料' },
        { id: 'ai_illustration', name: 'AI 插画' },
        { id: 'ai_label', name: 'AI 标签' },
        { id: 'ai_promo_poster', name: 'AI 宣传海报' },
        { id: 'ai_sticker', name: 'AI 表情包' }
      ],
      ai_web: [],
      student: []
    },
    
    // 当前选中的品牌
    currentBrand: '',
    
    // 当前选中的子分类
    currentSubcategory: '',
    
    // 作品数据（动态加载）
    works: [],
    
    // AI 包装设计作品数据
    aiPackagingWorks: [
      { title: 'AI 包装设计作品 1', image: 'https://124.220.74.191/images/ai-packaging/AI_BaoZhuang/32f0f9958601835517678a4ef1975f57.png', description: '精美 AI 生成包装设计' },
      { title: 'AI 包装设计作品 2', image: 'https://124.220.74.191/images/ai-packaging/AI_BaoZhuang/b21ea9cf626c04710256d384f8cce03a.png', description: '现代风格包装展示' },
      { title: 'AI 包装设计作品 3', image: 'https://124.220.74.191/images/ai-packaging/AI_BaoZhuang/d5f6a84ccc2bda3604fc366e7f7dc030.jpg', description: '创意产品包装设计' },
      { title: 'AI 包装设计作品 4', image: 'https://124.220.74.191/images/ai-packaging/AI_BaoZhuang/e3a2d74b690817456adb7dd74a09c27d.png', description: '高端品牌包装方案' },
      { title: 'AI 包装设计作品 5', image: 'https://124.220.74.191/images/ai-packaging/AI_BaoZhuang/微信图片_20260325192511_3403_17.png', description: '简约风包装设计' },
      { title: 'AI 包装设计作品 6', image: 'https://124.220.74.191/images/ai-packaging/AI_BaoZhuang/微信图片_20260325192511_3404_17.png', description: '国潮风包装展示' },
      { title: 'AI 包装设计作品 7', image: 'https://124.220.74.191/images/ai-packaging/AI_BaoZhuang/微信图片_20260325192511_3405_17.png', description: '科技感包装设计' }
    ],
    
    // 图片预览
    previewVisible: false,
    previewIndex: 0
  },

  onLoad() {
    // 初始化：选中第一个分类的第一个品牌/子分类
    const firstCategory = this.data.categories[0].id;
    const firstBrand = this.data.brands[firstCategory][0]?.id;
    const firstSubcategory = this.data.subcategories[firstCategory][0]?.id;
    
    this.setData({
      currentCategory: firstCategory,
      currentBrand: firstBrand,
      currentSubcategory: firstSubcategory
    });
    
    this.loadWorks();
  },

  // 加载作品
  loadWorks() {
    const category = this.data.currentCategory;
    const brand = this.data.currentBrand;
    const subcategory = this.data.currentSubcategory;
    let works = [];
    
    if (category === 'brand' && brand) {
      // 品牌全案：每个品牌 5 张图片
      for (let i = 1; i <= 5; i++) {
        works.push(`/static/images/works/${brand}/${i}.jpg`);
      }
    } else if (category === 'ai_design' && subcategory) {
      // AI 设计作品：根据子分类加载
      if (subcategory === 'ai_packaging') {
        // AI 包装：使用实际作品数据
        works = this.data.aiPackagingWorks;
      } else {
        works.push(`/static/images/placeholder/ai-design-${subcategory}.jpg`);
      }
    } else if (category === 'ai_web') {
      // AI WEB 产品（待添加）
      works.push('/static/images/placeholder/ai-web.jpg');
    } else if (category === 'student') {
      // 学员学习案例（待添加）
      works.push('/static/images/placeholder/student.jpg');
    }
    
    this.setData({ works });
    
    // 调试日志
    console.log('加载作品：', category, brand, subcategory, works);
  },

  // 获取当前分类信息
  get currentCategoryInfo() {
    return this.data.categories.find(c => c.id === this.data.currentCategory) || this.data.categories[0];
  },

  // 获取当前品牌信息
  get currentBrandInfo() {
    const brands = this.data.brands[this.data.currentCategory] || [];
    return brands.find(b => b.id === this.data.currentBrand) || brands[0];
  },

  // 获取当前子分类信息
  get currentSubcategoryInfo() {
    const subcategories = this.data.subcategories[this.data.currentCategory] || [];
    return subcategories.find(s => s.id === this.data.currentSubcategory) || subcategories[0];
  },

  // 切换分类
  onCategoryTap(e) {
    const category = e.currentTarget.dataset.category;
    
    if (category !== this.data.currentCategory) {
      wx.vibrateShort({ type: 'light' });
      
      // 获取新分类的第一个品牌
      const brands = this.data.brands[category] || [];
      const firstBrand = brands[0]?.id || '';
      
      // 获取新分类的第一个子分类
      const subcategories = this.data.subcategories[category] || [];
      const firstSubcategory = subcategories[0]?.id || '';
      
      this.setData({
        currentCategory: category,
        currentBrand: firstBrand,
        currentSubcategory: firstSubcategory,
        previewVisible: false
      });
      
      this.loadWorks();
      
      // 滚动到顶部
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    }
  },

  // 切换品牌
  onBrandTap(e) {
    const brand = e.currentTarget.dataset.brand;
    
    if (brand !== this.data.currentBrand) {
      wx.vibrateShort({ type: 'light' });
      this.setData({ 
        currentBrand: brand,
        previewVisible: false
      });
      
      this.loadWorks();
      
      // 滚动到顶部
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    }
  },

  // 切换子分类
  onSubcategoryTap(e) {
    const subcategory = e.currentTarget.dataset.subcategory;
    
    if (subcategory !== this.data.currentSubcategory) {
      wx.vibrateShort({ type: 'light' });
      this.setData({ 
        currentSubcategory: subcategory,
        previewVisible: false
      });
      
      this.loadWorks();
      
      // 滚动到顶部
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    }
  },

  // 点击作品卡片
  onWorkTap(e) {
    const index = e.currentTarget.dataset.index;
    
    wx.vibrateShort({ type: 'light' });
    
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

  // 预览切换
  onPreviewChange(e) {
    this.setData({
      previewIndex: e.detail.current
    });
  },

  // 阻止事件冒泡
  stopPropagation() {
    // 空函数，用于阻止事件冒泡
  },

  // 保存图片
  onSaveImage() {
    const imageUrl = this.data.works[this.data.previewIndex];
    
    wx.saveImageToPhotosAlbum({
      filePath: imageUrl,
      success: () => {
        wx.showToast({
          title: '保存成功',
          icon: 'success'
        });
      },
      fail: (err) => {
        if (err.errMsg.includes('auth deny')) {
          wx.showModal({
            title: '提示',
            content: '需要授权保存到相册，是否前往设置？',
            success: (res) => {
              if (res.confirm) {
                wx.openSetting();
              }
            }
          });
        } else {
          wx.showToast({
            title: '保存失败',
            icon: 'none'
          });
        }
      }
    });
  },

  // 分享
  onShareAppMessage() {
    const category = this.currentCategoryInfo;
    const brand = this.currentBrandInfo;
    return {
      title: `${category.name} - ${brand ? brand.name + ' - ' : ''}乐乐案例集`,
      path: `/pages/portfolio/portfolio?category=${category.id}&brand=${brand ? brand.id : ''}`,
      imageUrl: '/static/images/lele-profile.jpg'
    };
  },

  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: '乐乐案例集',
      query: '',
      imageUrl: '/static/images/lele-profile.jpg'
    };
  }
});
