const menuList=[
  {
    title: '仪表盘',
    key: '/home',
    icon: 'home',
    children: [
      {
        title: '分析页',
        key: '/home',
        icon: '',
      },
      {
        title: '监控页',
        key: '/analysis1',
        icon: '',
      }
    ]
  },
  {
    title: '商品管理',
    key: '/goods',
    icon: 'shop',
    children: [
      {
        title: '商品列表',
        key: '/goods/list',
        icon: 'wallet',
      },
      {
        title: '模型管理',
        key: '/goods/model',
        icon: 'apartment',
      },
      {
        title: '规格管理',
        key: '/goods/spec',
        icon: 'cluster',
      },
      {
        title: '分类管理',
        key: '/goods/category',
        icon: 'pie-chart',
      }
    ]
  }
]

export default menuList
