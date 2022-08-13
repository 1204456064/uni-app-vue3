module.exports = {
  easycom: {
    autoscan: true,
    custom: {
      '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
    },
  },
  pages: [
    // 登录
    ...require('./page_config/router/login.js'),
    // 首页 && 设置
    ...require('./page_config/index.js'),
  ],
  // tabBar
  tabBar: require('./page_config/tabbar.js'),
  // 全局样式
  globalStyle: require('./page_config/global-style.js'),
}
