// pages/portfolio/portfolio.js - 案例集（三级分类重构版）
Page({
  data: {
    // 一级分类
    categories: [
      { id: 'brand', name: '品牌全案', icon: '🎨' },
      { id: 'ai_design', name: 'AI 设计作品', icon: '🤖' },
      { id: 'ai_product', name: 'AI 产品', icon: '📱' },
      { id: 'operations', name: '运营相关案例', icon: '📊' }
    ],
    
    // 当前选中的分类
    currentCategory: 'brand',
    
    // 自媒体运营增长曲线数据
    chartData: [
      { date: '2025-09-04', followers: 0, label: '开始运营', completionRate: '0.0' },
      { date: '2025-09-10', followers: 50, label: '首周增长', completionRate: '2.5' },
      { date: '2025-09-20', followers: 150, label: '主页上线', completionRate: '7.5' },
      { date: '2025-09-30', followers: 300, label: '9 月收官', completionRate: '15.0' },
      { date: '2025-10-10', followers: 600, label: '流量爆发', completionRate: '30.0' },
      { date: '2025-10-20', followers: 1000, label: '突破千粉', completionRate: '50.0' },
      { date: '2025-10-31', followers: 1400, label: '10 月收官', completionRate: '70.0' },
      { date: '2025-11-15', followers: 1700, label: '稳定增长', completionRate: '85.0' },
      { date: '2025-11-30', followers: 1850, label: '11 月收官', completionRate: '92.5' },
      { date: '2025-12-15', followers: 1950, label: '接近目标', completionRate: '97.5' },
      { date: '2025-12-31', followers: 2000, label: '达成目标', completionRate: '100.0' }
    ],
    
    // 当前选中的图表数据点
    selectedIndex: null,
    
    // 图表坐标点（SVG 用）
    chartPoints: '',
    
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
      operations: []
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
      ai_product: [
        { id: 'ai_miniprogram', name: 'AI 小程序' },
        { id: 'ai_web', name: 'AI Web' }
      ],
      operations: [
        { id: 'community', name: '社群运营' },
        { id: 'self_media', name: '自媒体运营' },
        { id: 'course', name: '课程学习' }
      ]
    },
    
    // 当前选中的品牌
    currentBrand: '',
    
    // 当前选中的子分类
    currentSubcategory: '',
    
    // 作品数据（动态加载）
    works: [],
    
    // AI 包装设计作品数据（使用 HTTPS 域名图片）
    aiPackagingWorks: [
      { title: 'AI 包装设计作品 1', image: 'https://lelexue.site/images/ai-packaging/AI_BaoZhuang/32f0f9958601835517678a4ef1975f57.png', description: '精美 AI 生成包装设计' },
      { title: 'AI 包装设计作品 2', image: 'https://lelexue.site/images/ai-packaging/AI_BaoZhuang/b21ea9cf626c04710256d384f8cce03a.png', description: '现代风格包装展示' },
      { title: 'AI 包装设计作品 3', image: 'https://lelexue.site/images/ai-packaging/AI_BaoZhuang/d5f6a84ccc2bda3604fc366e7f7dc030.jpg', description: '创意产品包装设计' },
      { title: 'AI 包装设计作品 4', image: 'https://lelexue.site/images/ai-packaging/AI_BaoZhuang/e3a2d74b690817456adb7dd74a09c27d.png', description: '高端品牌包装方案' },
      { title: 'AI 包装设计作品 5', image: 'https://lelexue.site/images/ai-packaging/AI_BaoZhuang/微信图片_20260325192511_3403_17.png', description: '简约风包装设计' },
      { title: 'AI 包装设计作品 6', image: 'https://lelexue.site/images/ai-packaging/AI_BaoZhuang/微信图片_20260325192511_3404_17.png', description: '国潮风包装展示' },
      { title: 'AI 包装设计作品 7', image: 'https://lelexue.site/images/ai-packaging/AI_BaoZhuang/微信图片_20260325192511_3405_17.png', description: '科技感包装设计' }
    ],
    
    // AI 详情页作品数据（使用小程序服务器路径）
    aiDetailPageWorks: [
      { title: 'AI 详情页设计 1', image: '/static/images/works/ai-detail-page/8d9c1eddfd1290668779813f6a9904ce_1766291372.png', description: '精美 AI 生成详情页' },
      { title: 'AI 详情页设计 2', image: '/static/images/works/ai-detail-page/a0a4a9ad-9358-438f-9186-a2cceae701f2_0.png', description: '现代风格详情页展示' },
      { title: 'AI 详情页设计 3', image: '/static/images/works/ai-detail-page/bcb148c1ea1c9575b3b29ef1868a1c4e_1766291056583.png', description: '创意产品详情页' },
      { title: 'AI 详情页设计 4', image: '/static/images/works/ai-detail-page/eb585db4f8e2d38b446c6b892ca8e080_1766293779.png', description: '高端详情页方案' },
      { title: 'AI 详情页设计 5', image: '/static/images/works/ai-detail-page/f6fe87dd8bbdd45e94bd8c10fcfa477c_1766295153.png', description: '简约风详情页设计' }
    ],
    
    // AI 物料作品数据（使用小程序服务器路径）
    aiMaterialWorks: [
      { title: 'AI 物料设计 1', image: '/static/images/works/ai-material/蚂蚁枭雄.png', description: 'AI 生成物料设计' },
      { title: 'AI 物料设计 2', image: '/static/images/works/ai-material/微信图片_20260105173957_2711_17.jpg', description: 'AI 物料作品' },
      { title: 'AI 物料设计 3', image: '/static/images/works/ai-material/微信图片_20260105173957_2712_17.jpg', description: 'AI 物料设计' },
      { title: 'AI 物料设计 4', image: '/static/images/works/ai-material/微信图片_20260105173958_2713_17.jpg', description: 'AI 物料作品' },
      { title: 'AI 物料设计 5', image: '/static/images/works/ai-material/蚂蚁枭雄 2-03.png', description: '创意物料展示' }
    ],
    
    // AI 插画作品数据（使用小程序服务器路径）
    aiIllustrationWorks: [
      { title: 'AI 插画设计 1', image: '/static/images/works/ai-illustration/1765969699535-ggd7c0zxb3k.png', description: '精美 AI 生成插画' },
      { title: 'AI 插画设计 2', image: '/static/images/works/ai-illustration/1766217800491-3qbrdswyytg.png', description: '创意插画展示' },
      { title: 'AI 插画设计 3', image: '/static/images/works/ai-illustration/2Q2cgWnxIYCM1aeeeeb359d1ce6ad4c196260b41bbdd.png', description: 'AI 插画作品' },
      { title: 'AI 插画设计 4', image: '/static/images/works/ai-illustration/4a2950024c73b692fdd56c57c47cf79e_1765615241_cgpf2er2.png', description: 'AI 插画设计' },
      { title: 'AI 插画设计 5', image: '/static/images/works/ai-illustration/image.png', description: 'AI 插画作品' },
      { title: 'AI 插画设计 6', image: '/static/images/works/ai-illustration/棕色椰子 IP 包装物料插画.png', description: 'IP 包装插画' }
    ],
    
    // AI 标签作品数据（使用小程序服务器路径）
    aiLabelWorks: [
      { title: 'AI 标签设计 1', image: '/static/images/works/ai-label/1768450119184-j53wcw10yp.png', description: '精美 AI 生成标签' },
      { title: 'AI 标签设计 2', image: '/static/images/works/ai-label/4e6537b0fd195a982346e1951e37cee1_1767493181_enz75269.png', description: '创意标签展示' },
      { title: 'AI 标签设计 3', image: '/static/images/works/ai-label/8402233d-234c-459e-9638-8dc8b13e1792.png', description: 'AI 标签作品' },
      { title: 'AI 标签设计 4', image: '/static/images/works/ai-label/9c04931c8ba55319b65d671f7510c213_1767410296.png', description: 'AI 标签设计' },
      { title: 'AI 标签设计 5', image: '/static/images/works/ai-label/bd65c46dd0ce7b17346c3b21389e914c_1767493222_n04kdlfb.png', description: 'AI 标签作品' },
      { title: 'AI 标签设计 6', image: '/static/images/works/ai-label/e85523db-914e-4021-9964-41b3a0ea284f.png', description: 'AI 标签设计' },
      { title: 'AI 标签设计 7', image: '/static/images/works/ai-label/捷客达便利店标签.png', description: '便利店标签' }
    ],
    
    // AI 宣传海报作品数据（使用小程序服务器路径）
    aiPromoPosterWorks: [
      { title: 'AI 宣传海报 1', image: '/static/images/works/ai-promo-poster/1768450696790-9btue1hjp3.png', description: '精美 AI 生成海报' },
      { title: 'AI 宣传海报 2', image: '/static/images/works/ai-promo-poster/1769323398060-2jczfkadrvr.png', description: '创意海报展示' },
      { title: 'AI 宣传海报 3', image: '/static/images/works/ai-promo-poster/屏幕截图 2026-01-29 134628.png', description: 'AI 海报作品' },
      { title: 'AI 宣传海报 4', image: '/static/images/works/ai-promo-poster/知识付费活动海报.png', description: '知识付费海报' }
    ],
    
    // AI 表情包作品数据（使用小程序服务器路径）
    aiStickerWorks: [
      { title: 'AI 表情包 1', image: '/static/images/works/ai-sticker/微信图片_20260331185027_3445_17.png', description: 'AI 生成表情包' },
      { title: 'AI 表情包 2', image: '/static/images/works/ai-sticker/微信图片_20260331185042_3446_17.png', description: '创意表情包' },
      { title: 'AI 表情包 3', image: '/static/images/works/ai-sticker/微信图片_20260331185100_3447_17.png', description: 'AI 表情作品' },
      { title: 'AI 表情包 4', image: '/static/images/works/ai-sticker/微信图片_20260331185117_3448_17.png', description: 'AI 表情设计' },
      { title: 'AI 表情包 5', image: '/static/images/works/ai-sticker/微信图片_20260331185132_3449_17.png', description: 'AI 表情作品' },
      { title: 'AI 表情包 6', image: '/static/images/works/ai-sticker/微信图片_20260331185326_3450_17.png', description: 'AI 表情设计' },
      { title: 'AI 表情包 7', image: '/static/images/works/ai-sticker/微信图片_20260331185326_3451_17.png', description: 'AI 表情作品' }
    ],
    
    // AI 小程序作品数据
    aiMiniprogramWorks: [
      { title: 'AI 小程序 - 首页功能', image: '/static/images/ai-miniprogram/1.jpg', description: '首页功能卡片展示' },
      { title: 'AI 小程序 - 超级员工', image: '/static/images/ai-miniprogram/2.jpg', description: '秒懂 AI 超级员工主页' }
    ],
    
    // AI Web 产品作品数据
    aiWebWorks: [
      { title: 'AI Web - 靠山盟登录页', image: '/static/images/ai-web/1.png', description: '用户登录控制台界面' },
      { title: 'AI Web - AI Image 图像生成', image: '/static/images/ai-web/2.jpg', description: 'AI 图像生成工具界面' },
      { title: 'AI Web - 角色换装功能', image: '/static/images/ai-web/3.jpg', description: 'AI 角色换装演示' },
      { title: 'AI Web - 智能文档编辑', image: '/static/images/ai-web/4.png', description: 'AI 文档编辑和知识管理' }
    ],
    
    // 社群运营作品数据（等待用户上传）
    communityWorks: [],
    
    // 自媒体运营作品数据（时间线视图 - 按时间倒序排列：11 月→9 月）
    selfMediaWorks: [
      { title: '11 月 12 日数据统计', image: '/static/images/operations/self-media/57_1112.jpg', description: '公众号运营数据', date: '2025-11-12', tags: ['公众号', '数据统计'] },
      { title: '11 月 11 日数据统计', image: '/static/images/operations/self-media/56_1111.jpg', description: '公众号运营数据', date: '2025-11-11', tags: ['公众号', '数据统计'] },
      { title: '11 月 10 日数据统计', image: '/static/images/operations/self-media/55_1110.jpg', description: '公众号运营数据', date: '2025-11-10', tags: ['公众号', '数据统计'] },
      { title: '11 月 9 日数据统计', image: '/static/images/operations/self-media/54_1109.jpg', description: '公众号运营数据', date: '2025-11-09', tags: ['公众号', '数据统计'] },
      { title: '11 月 8 日数据统计', image: '/static/images/operations/self-media/53_1108.jpg', description: '公众号运营数据', date: '2025-11-08', tags: ['公众号', '数据统计'] },
      { title: '11 月 7 日数据统计', image: '/static/images/operations/self-media/52_1107.jpg', description: '公众号运营数据', date: '2025-11-07', tags: ['公众号', '数据统计'] },
      { title: '11 月 6 日数据统计', image: '/static/images/operations/self-media/51_1106.jpg', description: '公众号运营数据', date: '2025-11-06', tags: ['公众号', '数据统计'] },
      { title: '11 月 5 日数据统计', image: '/static/images/operations/self-media/50_1105.jpg', description: '公众号运营数据', date: '2025-11-05', tags: ['公众号', '数据统计'] },
      { title: '11 月 4 日数据统计', image: '/static/images/operations/self-media/49_1104.jpg', description: '公众号运营数据', date: '2025-11-04', tags: ['公众号', '数据统计'] },
      { title: '11 月 3 日数据统计', image: '/static/images/operations/self-media/48_1103.jpg', description: '公众号运营数据', date: '2025-11-03', tags: ['公众号', '数据统计'] },
      { title: '11 月 2 日流量趋势', image: '/static/images/operations/self-media/47_1102.jpg', description: '7 天流量趋势分析', date: '2025-11-02', tags: ['公众号', '流量分析'] },
      { title: '11 月 1 日流量趋势', image: '/static/images/operations/self-media/46_1101.jpg', description: '7 天流量趋势分析', date: '2025-11-01', tags: ['公众号', '流量分析'] },
      { title: '10 月 31 日流量趋势', image: '/static/images/operations/self-media/45_1031.jpg', description: '7 天流量趋势分析', date: '2025-10-31', tags: ['公众号', '流量分析'] },
      { title: '10 月 30 日流量趋势', image: '/static/images/operations/self-media/44_1030.jpg', description: '7 天流量趋势分析', date: '2025-10-30', tags: ['公众号', '流量分析'] },
      { title: '10 月 29 日流量趋势', image: '/static/images/operations/self-media/43_1029.jpg', description: '7 天流量趋势分析', date: '2025-10-29', tags: ['公众号', '流量分析'] },
      { title: '10 月 28 日流量趋势', image: '/static/images/operations/self-media/42_1028.jpg', description: '7 天流量趋势分析', date: '2025-10-28', tags: ['公众号', '流量分析'] },
      { title: '10 月 27 日流量趋势', image: '/static/images/operations/self-media/41_1027.jpg', description: '7 天流量趋势分析', date: '2025-10-27', tags: ['公众号', '流量分析'] },
      { title: '10 月 26 日流量趋势', image: '/static/images/operations/self-media/40_1026.jpg', description: '7 天流量趋势分析', date: '2025-10-26', tags: ['公众号', '流量分析'] },
      { title: '10 月 25 日流量趋势', image: '/static/images/operations/self-media/39_1025.jpg', description: '7 天流量趋势分析', date: '2025-10-25', tags: ['公众号', '流量分析'] },
      { title: '10 月 24 日数据统计', image: '/static/images/operations/self-media/38_1024.jpg', description: '昨日阅读 2113，分享 330，收入 7.38 元', date: '2025-10-24', tags: ['公众号', '数据统计'] },
      { title: '10 月 23 日数据统计', image: '/static/images/operations/self-media/37_1023.jpg', description: '昨日阅读 639，分享 85，关注 1143 人', date: '2025-10-23', tags: ['公众号', '数据统计'] },
      { title: '10 月 22 日流量趋势', image: '/static/images/operations/self-media/36_1022.jpg', description: '7 天流量趋势分析', date: '2025-10-22', tags: ['公众号', '流量分析'] },
      { title: '10 月 21 日数据统计', image: '/static/images/operations/self-media/35_1021.jpg', description: '昨日阅读 1785，分享 261，收入 2.06 元', date: '2025-10-21', tags: ['公众号', '数据统计'] },
      { title: '10 月 20 日数据统计', image: '/static/images/operations/self-media/34_1020.jpg', description: '昨日阅读 2014，分享 260，关注 1060 人', date: '2025-10-20', tags: ['公众号', '数据统计'] },
      { title: '10 月 19 日流量趋势', image: '/static/images/operations/self-media/33_1019.jpg', description: '7 天流量趋势分析', date: '2025-10-19', tags: ['公众号', '流量分析'] },
      { title: '10 月 18 日流量趋势', image: '/static/images/operations/self-media/32_1018.jpg', description: '7 天流量趋势分析', date: '2025-10-18', tags: ['公众号', '流量分析'] },
      { title: '10 月 17 日数据统计', image: '/static/images/operations/self-media/31_1017.jpg', description: '昨日阅读 2660，分享 389，收入 3.49 元', date: '2025-10-17', tags: ['公众号', '数据统计'] },
      { title: '10 月 16 日数据统计', image: '/static/images/operations/self-media/30_1016.jpg', description: '昨日阅读 3605，分享 531，收入 3.83 元', date: '2025-10-16', tags: ['公众号', '数据统计'] },
      { title: '10 月 15 日数据统计', image: '/static/images/operations/self-media/29_1015.jpg', description: '昨日阅读 3126，分享 475，收入 0.96 元', date: '2025-10-15', tags: ['公众号', '数据统计'] },
      { title: '10 月 14 日数据统计', image: '/static/images/operations/self-media/28_1014.jpg', description: '昨日阅读 2722，分享 433，关注 622 人', date: '2025-10-14', tags: ['公众号', '数据统计'] },
      { title: '10 月 13 日数据统计', image: '/static/images/operations/self-media/27_1013.jpg', description: '昨日阅读 344，分享 56，关注 502 人', date: '2025-10-13', tags: ['公众号', '数据统计'] },
      { title: '10 月 12 日流量趋势', image: '/static/images/operations/self-media/26_1012.jpg', description: '7 天流量趋势分析', date: '2025-10-12', tags: ['公众号', '流量分析'] },
      { title: '10 月 11 日流量趋势', image: '/static/images/operations/self-media/25_1011.jpg', description: '7 天流量趋势分析', date: '2025-10-11', tags: ['公众号', '流量分析'] },
      { title: '10 月 10 日流量趋势', image: '/static/images/operations/self-media/24_1010.jpg', description: '7 天流量趋势分析', date: '2025-10-10', tags: ['公众号', '流量分析'] },
      { title: '10 月 9 日数据统计', image: '/static/images/operations/self-media/23_1009.jpg', description: '昨日阅读 1056，分享 223，流量 4045 次', date: '2025-10-09', tags: ['公众号', '数据统计'] },
      { title: '10 月 8 日流量趋势', image: '/static/images/operations/self-media/22_1008.jpg', description: '7 天流量趋势分析', date: '2025-10-08', tags: ['公众号', '流量分析'] },
      { title: '10 月 7 日流量趋势', image: '/static/images/operations/self-media/21_1007.jpg', description: '7 天流量趋势分析', date: '2025-10-07', tags: ['公众号', '流量分析'] },
      { title: '10 月 6 日数据统计', image: '/static/images/operations/self-media/20_1006.jpg', description: '昨日阅读 319，分享 88，总用户 301', date: '2025-10-06', tags: ['公众号', '数据统计'] },
      { title: '10 月 5 日流量趋势', image: '/static/images/operations/self-media/19_1005.jpg', description: '7 天流量趋势分析', date: '2025-10-05', tags: ['公众号', '流量分析'] },
      { title: '10 月 4 日流量趋势', image: '/static/images/operations/self-media/18_1004.jpg', description: '7 天流量趋势分析', date: '2025-10-04', tags: ['公众号', '流量分析'] },
      { title: '10 月 3 日流量趋势', image: '/static/images/operations/self-media/17_1003.jpg', description: '7 天流量趋势分析', date: '2025-10-03', tags: ['公众号', '流量分析'] },
      { title: '10 月 2 日流量趋势', image: '/static/images/operations/self-media/16_1002.jpg', description: '7 天流量趋势分析', date: '2025-10-02', tags: ['公众号', '流量分析'] },
      { title: '10 月 1 日流量趋势', image: '/static/images/operations/self-media/15_1001.jpg', description: '7 天流量趋势分析', date: '2025-10-01', tags: ['公众号', '流量分析'] },
      { title: '9 月 30 日流量趋势', image: '/static/images/operations/self-media/14_0930.jpg', description: '7 天流量趋势分析', date: '2025-09-30', tags: ['公众号', '流量分析'] },
      { title: '9 月 29 日流量趋势', image: '/static/images/operations/self-media/13_0929.jpg', description: '7 天流量趋势分析', date: '2025-09-29', tags: ['公众号', '流量分析'] },
      { title: '9 月 28 日流量趋势', image: '/static/images/operations/self-media/12_0928.jpg', description: '7 天流量趋势分析', date: '2025-09-28', tags: ['公众号', '流量分析'] },
      { title: '9 月 27 日数据统计', image: '/static/images/operations/self-media/11_0927.jpg', description: '昨日阅读 441，分享 92，关注 200 人', date: '2025-09-27', tags: ['公众号', '数据统计'] },
      { title: '9 月 24 日数据统计', image: '/static/images/operations/self-media/10_0924.jpg', description: '昨日阅读 228，分享 26，总用户 144', date: '2025-09-24', tags: ['公众号', '数据统计'] },
      { title: '9 月 23 日数据统计', image: '/static/images/operations/self-media/09_0923.jpg', description: '昨日阅读 108，分享 27，关注 129 人', date: '2025-09-23', tags: ['公众号', '数据统计'] },
      { title: '9 月 20 日主页数据', image: '/static/images/operations/self-media/08_0920.jpg', description: '公众号主页数据概览', date: '2025-09-20', tags: ['公众号', '主页'] },
      { title: '9 月 19-25 日流量趋势', image: '/static/images/operations/self-media/07_0919-0925.jpg', description: '周流量趋势分析', date: '2025-09-25', tags: ['公众号', '流量分析'] },
      { title: '9 月 17-23 日流量趋势', image: '/static/images/operations/self-media/06_0917-0923.jpg', description: '周流量趋势分析', date: '2025-09-23', tags: ['公众号', '流量分析'] },
      { title: '9 月 11-17 日流量趋势', image: '/static/images/operations/self-media/05_0911-0917.jpg', description: '周流量趋势分析', date: '2025-09-17', tags: ['公众号', '流量分析'] },
      { title: '9 月 10-16 日流量趋势', image: '/static/images/operations/self-media/04_0910-0916.jpg', description: '周流量趋势分析', date: '2025-09-16', tags: ['公众号', '流量分析'] },
      { title: '9 月 9-15 日流量趋势', image: '/static/images/operations/self-media/03_0909-0915.jpg', description: '周流量趋势分析', date: '2025-09-15', tags: ['公众号', '流量分析'] },
      { title: '9 月 8-14 日流量趋势', image: '/static/images/operations/self-media/02_0908-0914.jpg', description: '周流量趋势分析', date: '2025-09-14', tags: ['公众号', '流量分析'] },
      { title: '9 月 4-10 日流量趋势', image: '/static/images/operations/self-media/01_0904-0910.jpg', description: '周流量趋势分析', date: '2025-09-10', tags: ['公众号', '流量分析'] }
    ],
    
    // 课程学习作品数据（等待用户上传）
    courseWorks: [],
    
    // 视图模式：timeline(时间线) / grid(分类网格)
    viewMode: 'timeline',
    
    // 筛选标签（用于多选筛选）
    filterTags: [],
    
    // 搜索关键词
    searchKeyword: '',
    
    // 所有可用标签（用于筛选器）
    availableTags: ['活动策划', '社群增长', '用户运营', '互动', '商业转化', '数据分析', '小红书', '爆款内容', '公众号', '内容创作', '抖音', '短视频', 'B 站', '视频创作', 'AI 设计', '课程作业', '品牌设计', '练习', 'UI/UX', '项目实战'],
    
    // 图片预览
    previewVisible: false,
    previewIndex: 0,
    
    // 画廊布局数据（品牌全案专用）
    galleryRows: [],
    
    // 轮播图当前索引
    currentImageIndex: 0
  },

  onLoad() {
    // 初始化：选中第一个分类的第一个品牌/子分类
    const firstCategory = this.data.categories[0].id;
    const firstBrand = this.data.brands[firstCategory][0]?.id;
    const firstSubcategory = this.data.subcategories[firstCategory][0]?.id;
    
    this.setData({
      currentCategory: firstCategory,
      currentBrand: firstBrand || '',
      currentSubcategory: firstSubcategory || ''
    });
    
    this.loadWorks();
    this.calculateChartPoints();
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
      // 生成画廊布局数据
      this.generateGalleryRows(works);
    } else if (category === 'ai_design' && subcategory) {
      // AI 设计作品：根据子分类加载
      if (subcategory === 'ai_packaging') {
        works = this.data.aiPackagingWorks;
      } else if (subcategory === 'ai_detail_page') {
        works = this.data.aiDetailPageWorks;
      } else if (subcategory === 'ai_material') {
        works = this.data.aiMaterialWorks;
      } else if (subcategory === 'ai_illustration') {
        works = this.data.aiIllustrationWorks;
      } else if (subcategory === 'ai_label') {
        works = this.data.aiLabelWorks;
      } else if (subcategory === 'ai_promo_poster') {
        works = this.data.aiPromoPosterWorks;
      } else if (subcategory === 'ai_sticker') {
        works = this.data.aiStickerWorks;
      } else {
        works = [];
      }
      this.setData({ works });
    } else if (category === 'ai_product' && subcategory) {
      // AI 产品：根据子分类加载
      if (subcategory === 'ai_miniprogram') {
        works = this.data.aiMiniprogramWorks;
      } else if (subcategory === 'ai_web') {
        works = this.data.aiWebWorks;
      } else {
        works = [];
      }
      this.setData({ works });
    } else if (category === 'operations' && subcategory) {
      // 运营相关案例：根据子分类加载
      if (subcategory === 'community') {
        works = this.data.communityWorks;
      } else if (subcategory === 'self_media') {
        works = this.data.selfMediaWorks;
      } else if (subcategory === 'course') {
        works = this.data.courseWorks;
      } else {
        works = [];
      }
      
      // 应用筛选和排序
      works = this.applyFilters(works);
      
      // 按视图模式处理数据
      if (this.data.viewMode === 'timeline') {
        works = this.groupByTimeline(works);
      }
      
      this.setData({ works });
    }
    
    // 重置轮播索引
    this.setData({
      currentImageIndex: 0
    });
    
    // 调试日志
    console.log('加载作品：', category, brand, subcategory, works);
  },
  
  // 应用筛选条件（标签筛选 + 搜索）
  applyFilters(works) {
    let filtered = [...works];
    
    // 标签筛选
    if (this.data.filterTags.length > 0) {
      filtered = filtered.filter(work => {
        if (!work.tags || work.tags.length === 0) return false;
        return this.data.filterTags.some(tag => work.tags.includes(tag));
      });
    }
    
    // 搜索筛选
    if (this.data.searchKeyword) {
      const keyword = this.data.searchKeyword.toLowerCase();
      filtered = filtered.filter(work => {
        return (work.title && work.title.toLowerCase().includes(keyword)) ||
               (work.description && work.description.toLowerCase().includes(keyword)) ||
               (work.tags && work.tags.some(tag => tag.toLowerCase().includes(keyword)));
      });
    }
    
    return filtered;
  },
  
  // 按时间线分组（最新在上）
  groupByTimeline(works) {
    // 按日期排序（最新在上）
    const sorted = [...works].sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date) - new Date(a.date);
    });
    
    // 按日期分组
    const grouped = {};
    sorted.forEach(work => {
      const date = work.date || '未分类';
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(work);
    });
    
    // 转换为数组格式
    const result = [];
    Object.keys(grouped).sort((a, b) => {
      if (a === '未分类') return 1;
      if (b === '未分类') return -1;
      return new Date(b) - new Date(a);
    }).forEach(date => {
      result.push({
        type: 'date-group',
        date: date,
        works: grouped[date]
      });
    });
    
    return result;
  },
  
  // 计算图表坐标点
  calculateChartPoints() {
    const { chartData } = this.data;
    const padding = 40;
    const width = 300;
    const height = 340;
    const maxFollowers = 2000;
    
    const minDate = new Date(chartData[0].date);
    const maxDate = new Date(chartData[chartData.length - 1].date);
    const dateRange = maxDate - minDate;
    
    // 计算每个点的坐标
    const points = chartData.map(item => {
      const x = padding + ((new Date(item.date) - minDate) / dateRange) * (width - padding * 2);
      const y = height - ((item.followers / maxFollowers) * height);
      return {
        ...item,
        x: x.toFixed(1),
        y: y.toFixed(1)
      };
    });
    
    // 生成 SVG points 字符串
    const pointsStr = points.map(p => `${p.x},${p.y}`).join(' ');
    
    this.setData({
      chartData: points,
      chartPoints: pointsStr
    });
  },
  
  // 点击图表数据点
  onChartPointTap(e) {
    const index = e.currentTarget.dataset.index;
    wx.vibrateShort({ type: 'light' });
    this.setData({
      selectedIndex: index
    });
  },
  
  // 更新图表数据点
  updateChartPoints() {
    this.calculateChartPoints();
  },
  
  // 切换视图模式
  onViewModeTap(e) {
    const mode = e.currentTarget.dataset.mode;
    if (mode !== this.data.viewMode) {
      wx.vibrateShort({ type: 'light' });
      this.setData({ viewMode: mode });
      this.loadWorks();
    }
  },
  
  // 切换标签筛选
  onTagFilterTap(e) {
    const tag = e.currentTarget.dataset.tag;
    const currentIndex = this.data.filterTags.indexOf(tag);
    
    wx.vibrateShort({ type: 'light' });
    
    if (currentIndex > -1) {
      // 已选中，取消选中
      this.data.filterTags.splice(currentIndex, 1);
    } else {
      // 未选中，添加
      this.data.filterTags.push(tag);
    }
    
    this.setData({ filterTags: [...this.data.filterTags] });
    this.loadWorks();
  },
  
  // 清除所有筛选
  clearFilters() {
    wx.vibrateShort({ type: 'light' });
    this.setData({
      filterTags: [],
      searchKeyword: ''
    });
    this.loadWorks();
  },
  
  // 搜索输入
  onSearchInput(e) {
    this.setData({
      searchKeyword: e.detail.value
    });
  },
  
  // 搜索确认（防抖）
  onSearchConfirm() {
    wx.vibrateShort({ type: 'light' });
    this.loadWorks();
  },

  // 轮播图切换
  onCarouselChange(e) {
    this.setData({
      currentImageIndex: e.detail.current
    });
  },

  // 点击小图
  onThumbTap(e) {
    const index = e.currentTarget.dataset.index;
    wx.vibrateShort({ type: 'light' });
    this.setData({
      currentImageIndex: index
    });
  },

  // 生成画廊布局数据（品牌全案专用）
  generateGalleryRows(works) {
    // 画廊布局： alternating rows with large + small images
    // Row 1: 1 张大图 + 2 张小图
    // Row 2: 2 张小图 + 1 张大图
    const rows = [];
    let workIndex = 0;
    
    while (workIndex < works.length) {
      const rowItems = [];
      const isLargeFirst = (rows.length % 2 === 0); // 偶数行：大 -小 -小，奇数行：小-小 - 大
      
      if (isLargeFirst) {
        // 大图
        if (workIndex < works.length) {
          rowItems.push({
            image: works[workIndex],
            isLarge: true,
            originalIndex: workIndex
          });
          workIndex++;
        }
        // 小图 × 2
        for (let i = 0; i < 2 && workIndex < works.length; i++) {
          rowItems.push({
            image: works[workIndex],
            isLarge: false,
            originalIndex: workIndex
          });
          workIndex++;
        }
      } else {
        // 小图 × 2
        for (let i = 0; i < 2 && workIndex < works.length; i++) {
          rowItems.push({
            image: works[workIndex],
            isLarge: false,
            originalIndex: workIndex
          });
          workIndex++;
        }
        // 大图
        if (workIndex < works.length) {
          rowItems.push({
            image: works[workIndex],
            isLarge: true,
            originalIndex: workIndex
          });
          workIndex++;
        }
      }
      
      if (rowItems.length > 0) {
        rows.push({
          rowIndex: rows.length,
          items: rowItems
        });
      }
    }
    
    this.setData({
      works,
      galleryRows: rows
    });
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
