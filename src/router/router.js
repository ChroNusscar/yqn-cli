import Main from '@/components/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
    //   hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
        //   hideInMenu: true,
          title: '商家首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/goods',
    name: 'goods',
    meta: {
      icon: 'logo-buffer',
      title: '订单管理'
    },
    component: Main,
    children: [
      {
        path: 'all',
        name: 'all',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '订单汇总'
        },
        component: () => import('@/views/goods/all/index.vue')
      },
      {
        path: 'error',
        name: 'error',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '异常订单'
        },
        component: () => import('@/views/goods/error/index.vue')
      },
      {
        path: 'refund',
        name: 'refund',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '售后订单'
        },
        component: () => import('@/views/goods/refund/index.vue')
      }
    ]
  },
  {
    path: '/product',
    name: 'product',
    meta: {
      icon: 'logo-buffer',
      title: '商品管理'
    },
    component: Main,
    children: [
      {
        path: 'normal',
        name: 'normal',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '常规商品'
        },
        component: () => import('@/views/product/normal/index.vue')
      },
      {
        path: 'global',
        name: 'global',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '跨境商品'
        },
        component: () => import('@/views/product/global/index.vue')
      },
      {
        path: 'apply',
        name: 'apply',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '申报新品'
        },
        component: () => import('@/views/product/apply/index.vue')
      },
      {
        path: 'ship',
        name: 'ship',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '运费模板'
        },
        component: () => import('@/views/product/ship/index.vue')
      }
    ]
  },
  {
    path: '/prom',
    name: 'prom',
    meta: {
      icon: 'logo-buffer',
      title: '营销活动'
    },
    component: Main,
    children: [
      {
        path: 'fall',
        name: 'fall',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '促销直降'
        },
        component: () => import('@/views/prom/fall/index.vue')
      }
    ]
  },
  {
    path: '/data',
    name: 'data',
    meta: {
      icon: 'logo-buffer',
      title: '数据中心'
    },
    component: Main,
    children: [
      {
        path: 'stockout',
        name: 'stockout',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '缺货商品'
        },
        component: () => import('@/views/data/stockout/index.vue')
      },
      {
        path: 'onsale',
        name: 'onsale',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '热销商品'
        },
        component: () => import('@/views/data/onsale/index.vue')
      }
    ]
  },
  {
    path: '/cash',
    name: 'cash',
    meta: {
      icon: 'logo-buffer',
      title: '财务管理'
    },
    component: Main,
    children: [
      {
        path: 'withdraw',
        name: 'withdraw',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '账户提现'
        },
        component: () => import('@/views/cash/withdraw/index.vue')
      },
      {
        path: 'log',
        name: 'log',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '提款记录'
        },
        component: () => import('@/views/cash/log/index.vue')
      },
      {
        path: 'record',
        name: 'record',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '交易流水'
        },
        component: () => import('@/views/cash/record/index.vue')
      },
      {
        path: 'deal',
        name: 'deal',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '违规处理'
        },
        component: () => import('@/views/cash/deal/index.vue')
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      icon: 'logo-buffer',
      title: '账户设置'
    },
    component: Main,
    children: [
      {
        path: 'baseinfo',
        name: 'baseinfo',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '基本信息'
        },
        component: () => import('@/views/setting/baseinfo/index.vue')
      },
      {
        path: 'security',
        name: 'security',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '安全中心'
        },
        component: () => import('@/views/setting/security/index.vue')
      },
      {
        path: 'loginlog',
        name: 'loginlog',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '登录日志'
        },
        component: () => import('@/views/setting/log/index.vue')
      },
      {
        path: 'address',
        name: 'address',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '寄回地址'
        },
        component: () => import('@/views/setting/address/index.vue')
      },
      {
        path: 'sendconfig',
        name: 'sendconfig',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '发货设置'
        },
        component: () => import('@/views/setting/sendconfig/index.vue')
      }
    ]
  }
]
