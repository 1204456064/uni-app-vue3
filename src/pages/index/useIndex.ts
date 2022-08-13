import { ref } from 'vue'

interface subMneuItem {
  label: string
  value: string
  icon: string
  path: string
}

interface menuItem {
  label: string
  value: string
  subMenu: subMneuItem[]
}
export default function useIndex() {
  const menuList = ref<menuItem[]>([
    {
      label: '钢瓶入厂',
      value: '钢瓶入厂',
      subMenu: [
        {
          label: '新瓶入厂',
          value: 'phase_xprc',
          icon: 'x-mart-inflow',
          path: '/pages/in-storage/new-bottle/index',
        },
        {
          label: '年检入厂',
          value: 'phase_njrc',
          icon: 'x-mart-inflow',
          path: '/pages/in-storage/yearly-inspection/index',
        },
        {
          label: '维修入厂',
          value: 'phase_wxrc',
          icon: 'x-mart-inflow',
          path: '/pages/in-storage/repair/index',
        },
        {
          label: '回瓶入厂',
          value: 'phase_hprc',
          icon: 'x-mart-inflow',
          path: '/pages/in-storage/bottle-return/index',
        },
        {
          label: '退货入厂',
          value: 'phase_thrc',
          icon: 'x-mart-inflow',
          path: '/pages/in-storage/return-goods/index',
        },
      ],
    },
    {
      label: '生产管理',
      value: '生产管理',
      subMenu: [
        {
          label: '水分分析',
          value: 'phase_sffx',
          icon: 'x-mart-water',
          path: '/pages/product-manage/moisture-analysis/index',
        },
        {
          label: '余气分析',
          value: 'phase_yqfx',
          icon: 'x-mart-analysis',
          path: '/pages/product-manage/residual-gas-analysis/index',
        },
        {
          label: '钢瓶处理',
          value: 'phase_gpcl',
          icon: 'x-mart-playback',
          path: '/pages/product-manage/cylinder-handle/index',
        },
        {
          label: '车间氦检',
          value: 'phase_cjhj',
          icon: 'x-mart-playback',
          path: '/pages/product-manage/work-shop-he-check/index',
        },
        {
          label: '钢瓶再生',
          value: 'phase_gpzs',
          icon: 'x-mart-playback',
          path: '/pages/product-manage/cylinder-regeneration/index',
        },
        {
          label: '年检处理',
          value: 'phase_njcl',
          icon: 'x-mart-playback',
          path: '/pages/product-manage/yearly-check-handle/index',
        },
        {
          label: '充前登记',
          value: 'phase_cqdj',
          icon: 'x-mart-register',
          path: '/pages/product-manage/before-register/index',
        },
        {
          label: '充后登记',
          value: 'phase_chdj',
          icon: 'x-mart-register',
          path: '/pages/product-manage/after-register/index',
        },
        {
          label: '充后回放',
          value: 'playback',
          icon: 'x-mart-register',
          path: '/pages/product-manage/playback-after-charging/index',
        },
        {
          label: '充后复检',
          value: 'phase_chfj',
          icon: 'x-mart-recheck',
          path: '/pages/product-manage/after-recheck/index',
        },
      ],
    },
    {
      label: '库内管理',
      value: '库内管理',
      subMenu: [
        {
          label: '成品入库',
          value: 'phase_cprk',
          icon: 'x-mart-inflow',
          path: '/pages/storage-manage/finished-goods-warehousing/index',
        },
        {
          label: '成品包装',
          value: 'phase_cpbz',
          icon: 'x-mart-packing',
          path: '/pages/storage-manage/finished-product-packaging/index',
        },
      ],
    },
    {
      label: '钢瓶出厂',
      value: '钢瓶出厂',
      subMenu: [
        {
          label: '成品出库',
          value: 'phase_cpck',
          icon: 'x-mart-ex-factory',
          path: '/pages/out-storage/finished-product/index',
        },
        {
          label: '年检出厂',
          value: 'phase_njcc',
          icon: 'x-mart-ex-factory',
          path: '/pages/out-storage/yearly-inspection/index',
        },
        {
          label: '维修出厂',
          value: 'phase_wxcc',
          icon: 'x-mart-ex-factory',
          path: '/pages/out-storage/repair/index',
        },
      ],
    },
    {
      label: '订单管理',
      value: '订单管理',
      subMenu: [
        {
          label: '订单匹配',
          value: 'phase_ddpp',
          icon: 'x-mart-matching',
          path: '/pages/order-manage/order-center/index',
        },
      ],
    },
    {
      label: '不合格区',
      value: '不合格区',
      subMenu: [
        {
          label: '不合格区',
          value: 'phase_bhgq',
          icon: 'x-mart-circulate',
          path: '/pages/unqualified-area/index',
        },
      ],
    },
  ])

  return {
    menuList,
  }
}
