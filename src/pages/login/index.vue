<template>
  <view class="view-wrap login">
    <uni-row>
      <uni-col :span="24">
        <image style="width: 200rpx; height: 120rpx" :src="imageList.cloud"></image>
      </uni-col>
    </uni-row>

    <view class="login-box">
      <view class="login__title">
        <text>昊华气体</text>
      </view>
      <uni-forms ref="formRef" :model-value="form" :rules="rules">
        <uni-forms-item label="用户名" required name="account"
          ><uni-easyinput v-model="form.account" type="text" placeholder="请输入用户名"
        /></uni-forms-item>
        <uni-forms-item label="密码" required name="password"
          ><uni-easyinput v-model="form.password" type="password" placeholder="请输入密码"
        /></uni-forms-item>
      </uni-forms>
      <button plain type="primary" @click="login">登录</button>
    </view>

    <uni-row>
      <uni-col :span="8">
        <image style="width: 100%; height: 200rpx" :src="imageList.order"></image>
      </uni-col>
      <uni-col :span="8">
        <image style="width: 100%; height: 200rpx" :src="imageList.sale"></image>
      </uni-col>
      <uni-col :span="8">
        <image style="width: 100%; height: 200rpx" :src="imageList.analysis"></image>
      </uni-col>
    </uni-row>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Login from '@/api/login/login'
import useLogin from '@/pages/login/useLogin'
const { formRef, form, rules, imageList } = useLogin()

const login = async () => {
  const validForm = ref<boolean>(false)
  await formRef.value.validate((valid: boolean) => {
    if (!valid) {
      validForm.value = true
    } else {
      validForm.value = false
    }
  })

  if (!validForm.value) {
    return false
  }

  const res = await Login.login(form.value)
  if (!res) {
    return false
  }
  uni.switchTab({ url: '/pages/index/index' })
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background-color: #ecf5ff;

  &__title {
    text-align: center;
    color: #3c9cff;
    font-size: 32rpx;
    height: 100rpx;
    line-height: 100rpx;
    margin-bottom: 30rpx;
  }
}

.login-box {
  margin: 30rpx;
  padding: 30rpx;
  padding-top: 0;
  background-color: #fff;
}
</style>
