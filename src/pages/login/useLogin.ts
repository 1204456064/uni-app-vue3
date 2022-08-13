import { ref } from 'vue'

import cloud from '../../assets/images/login_cloud.png'
import order from '../../assets/images/login_order.png'
import sale from '../../assets/images/login_sale.png'
import analysis from '../../assets/images/login_analysis.png'

interface loginForm {
  account: string
  password: string
}

export default function useLogin() {
  const formRef = ref()

  const form = ref<loginForm>({
    account: '',
    password: '',
  })

  const imageList = ref({
    cloud: cloud,
    order: order,
    sale: sale,
    analysis: analysis,
  })

  const rules = ref({
    account: {
      rules: [
        {
          required: true,
          errorMessage: '请输入用户名',
        },
      ],
    },
    password: {
      rules: [
        {
          required: true,
          errorMessage: '请输入密码',
        },
      ],
    },
  })
  return {
    form,
    formRef,
    rules,
    imageList,
  }
}
