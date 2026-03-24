// pages/feedback/feedback.js - 学员反馈页（图片展示）
Page({
  data: {
    courseTitle: '',
    feedbackImages: [],
    previewIndex: 0,
    showPreview: false
  },

  onLoad(options) {
    const courseTitle = decodeURIComponent(options.courseTitle || '');
    const courseId = parseInt(options.courseId || '1');
    
    this.setData({
      courseTitle: courseTitle
    });
    
    this.loadFeedbackImages(courseId);
  },

  // 加载学员反馈图片
  loadFeedbackImages(courseId) {
    // 根据不同课程 ID 加载不同的反馈图片
    const imageMap = {
      1: [
        '/static/images/feedback/course1/1.jpg',
        '/static/images/feedback/course1/2.jpg',
        '/static/images/feedback/course1/3.jpg',
        '/static/images/feedback/course1/4.jpg',
        '/static/images/feedback/course1/5.jpg',
        '/static/images/feedback/course1/6.jpg'
      ],
      2: [
        '/static/images/feedback/course2/1.jpg',
        '/static/images/feedback/course2/2.jpg',
        '/static/images/feedback/course2/3.jpg',
        '/static/images/feedback/course2/4.jpg'
      ],
      3: [
        '/static/images/feedback/course3/1.jpg',
        '/static/images/feedback/course3/2.jpg',
        '/static/images/feedback/course3/3.jpg',
        '/static/images/feedback/course3/4.jpg',
        '/static/images/feedback/course3/5.jpg'
      ],
      4: [
        '/static/images/feedback/course4/1.jpg',
        '/static/images/feedback/course4/2.jpg',
        '/static/images/feedback/course4/3.jpg',
        '/static/images/feedback/course4/4.jpg',
        '/static/images/feedback/course4/5.jpg',
        '/static/images/feedback/course4/6.jpg',
        '/static/images/feedback/course4/7.jpg'
      ]
    };

    const images = imageMap[courseId] || [];
    this.setData({
      feedbackImages: images
    });
  },

  // 点击图片预览
  onImageTap(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      previewIndex: index,
      showPreview: true
    });
  },

  // 关闭预览
  closePreview() {
    this.setData({
      showPreview: false
    });
  },

  // 预览切换
  onPreviewChange(e) {
    this.setData({
      previewIndex: e.detail.current
    });
  },

  // 保存图片
  onSaveImage() {
    const image = this.data.feedbackImages[this.data.previewIndex];
    wx.saveImageToPhotosAlbum({
      filePath: image,
      success: () => {
        wx.showToast({
          title: '已保存到相册',
          icon: 'success'
        });
      },
      fail: () => {
        wx.showToast({
          title: '保存失败',
          icon: 'none'
        });
      }
    });
  },

  // 分享
  onShareAppMessage() {
    return {
      title: `${this.data.courseTitle} - 学员反馈`,
      path: `/pages/feedback/feedback?courseTitle=${encodeURIComponent(this.data.courseTitle)}`,
      imageUrl: this.data.feedbackImages[0] || '/static/images/lele-profile.jpg'
    };
  }
});
