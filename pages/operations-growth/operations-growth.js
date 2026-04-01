// pages/operations-growth/operations-growth.js
// 自媒体运营增长曲线页面 - 动态交互式图表

Page({
  data: {
    // 粉丝增长数据（2025 年 9 月 -12 月）
    followerData: [
      { date: '2025-09-04', followers: 0, label: '开始运营' },
      { date: '2025-09-10', followers: 50, label: '首周增长' },
      { date: '2025-09-20', followers: 150, label: '主页上线' },
      { date: '2025-09-30', followers: 300, label: '9 月收官' },
      { date: '2025-10-10', followers: 600, label: '流量爆发' },
      { date: '2025-10-20', followers: 1000, label: '突破千粉' },
      { date: '2025-10-31', followers: 1400, label: '10 月收官' },
      { date: '2025-11-15', followers: 1700, label: '稳定增长' },
      { date: '2025-11-30', followers: 1850, label: '11 月收官' },
      { date: '2025-12-15', followers: 1950, label: '接近目标' },
      { date: '2025-12-31', followers: 2000, label: '达成目标' }
    ],
    
    // 当前选中的数据点
    selectedPoint: null,
    
    // 图表配置
    chartConfig: {
      width: 350,
      height: 400,
      padding: 40,
      pointRadius: 6,
      lineColor: '#1890ff',
      pointColor: '#1890ff',
      textColor: '#666'
    },
    
    // 阶段目标
    currentStage: 1,
    targetFollowers: 2000,
    
    // 显示详情面板
    showDetail: false
  },
  
  onLoad() {
    this.calculateChartPoints();
  },
  
  // 计算图表坐标点
  calculateChartPoints() {
    const { followerData, chartConfig } = this.data;
    const { width, height, padding } = chartConfig;
    
    // 找到最大值和最小值
    const maxFollowers = Math.max(...followerData.map(d => d.followers));
    const minDate = new Date(followerData[0].date);
    const maxDate = new Date(followerData[followerData.length - 1].date);
    const dateRange = maxDate - minDate;
    
    // 计算每个点的坐标
    const points = followerData.map(item => {
      const x = padding + ((new Date(item.date) - minDate) / dateRange) * (width - padding * 2);
      const y = height - padding - (item.followers / maxFollowers) * (height - padding * 2);
      return {
        ...item,
        x,
        y
      };
    });
    
    // 生成路径
    const path = points.map((point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }
      return `L ${point.x} ${point.y}`;
    }).join(' ');
    
    this.setData({
      chartPoints: points,
      chartPath: path,
      maxX: width - padding,
      maxY: height - padding
    });
  },
  
  // 点击数据点
  onPointTap(e) {
    const index = e.currentTarget.dataset.index;
    const point = this.data.chartPoints[index];
    
    this.setData({
      selectedPoint: point,
      showDetail: true
    });
  },
  
  // 关闭详情面板
  closeDetail() {
    this.setData({
      showDetail: false,
      selectedPoint: null
    });
  },
  
  // 分享
  onShareAppMessage() {
    return {
      title: '我的自媒体运营增长曲线',
      path: '/pages/operations-growth/operations-growth'
    };
  }
});
