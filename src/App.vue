<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { getStorage } from '@/utils/uni-storage'

onLaunch(() => {
  console.log('App Launch')

  const token = getStorage('token')

  // 存在token，至首页
  if (token) {
    uni.switchTab({ url: '/pages/index/index' })
  } else {
    // 不存在token至登录页
    uni.navigateTo({ url: '/pages/login/index' })
  }
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style>
@import './assets/iconfont.css';
</style>
<style lang="scss">
@import './styles/index.scss';
</style>
