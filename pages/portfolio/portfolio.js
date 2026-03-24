// pages/portfolio/portfolio.js - 作品集（组件化重构版）
Page({
  data: {
    // 品牌数据
    brands: [
      { id: 'jiekeda', name: '捷客达' },
      { id: 'dikategong', name: '低卡特攻' },
      { id: 'yiwannmian', name: '一豌面' },
      { id: 'hebenqingtian', name: '禾本轻甜' }
    ],
    
    // 当前选中的品牌
    currentBrand: 'jiekeda',
    
    // 作品数据（动态加载）
    works: {
      jiekeda: [],
      dikategong: [],
      yiwannmian: [],
      hebenqingtian: []
    },
    
    // 图片预览
    previewVisible: false,
    previewIndex: 0
  },

  onLoad() {
    this.loadAllWorks();
  },

  // 加载所有作品
  loadAllWorks() {
    const works = {};
    
    this.data.brands.forEach(brand => {
      works[brand.id] = [];
      // 每个品牌 5 张图片（使用绝对路径从项目根目录）
      for (let i = 1; i <= 5; i++) {
        works[brand.id].push(`/static/images/works/${brand.id}/${i}.jpg`);
      }
    });
    
    this.setData({ works });
    
    // 调试日志
    console.log('作品数据加载完成：', works);
  },

  // 获取当前品牌信息
  get currentBrandInfo() {
    return this.data.brands.find(b => b.id === this.data.currentBrand) || this.data.brands[0];
  },

  // 获取过滤后的作品
  get filteredWorks() {
    return this.data.works[this.data.currentBrand] || [];
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
    const works = this.filteredWorks;
    const imageUrl = works[this.data.previewIndex];
    
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
    const brand = this.currentBrandInfo;
    return {
      title: `${brand.name} - 乐乐作品集`,
      path: `/pages/portfolio/portfolio?brand=${brand.id}`,
      imageUrl: '/static/images/lele-profile.jpg'
    };
  },

  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: '乐乐作品集',
      query: '',
      imageUrl: '/static/images/lele-profile.jpg'
    };
  }
});
