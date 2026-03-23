// pages/portfolio/portfolio.js
Page({
  data: {
    works: {
      jiekeda: [],
      dikategong: [],
      yiwannmian: [],
      hebenqingtian: []
    }
  },

  onLoad() {
    // 初始化作品图片路径
    this.initWorks()
  },

  initWorks() {
    // 每个品牌 6 张图
    const brands = ['jiekeda', 'dikategong', 'yiwannmian', 'hebenqingtian']
    const works = {}
    
    brands.forEach(brand => {
      works[brand] = []
      for (let i = 1; i <= 6; i++) {
        works[brand].push(`/static/images/works/${brand}/${i}.jpg`)
      }
    })
    
    this.setData({ works })
  },

  // 预览图片
  previewImage(e) {
    const { brand, index } = e.currentTarget.dataset
    const currentWorks = this.data.works[brand]
    
    wx.previewImage({
      current: currentWorks[index],
      urls: currentWorks,
      success: () => {
        console.log('图片预览成功')
      }
    })
  }
})
