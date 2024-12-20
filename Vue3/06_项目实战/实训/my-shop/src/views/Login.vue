<template>
  <van-form @submit="onSubmit" @failed="onFailed" :model="form">
    <van-cell-group inset>
      <van-field
        v-model="form.username"
        name="username"
        label="账号:"
        placeholder="请输入账号"
        clearable
        :rules="usernameRules" />
      <van-field
        v-model="form.password"
        name="password"
        label="密码:"
        placeholder="请输入密码"
        clearable
        type="password"
        :rules="passwordRules" />
    </van-cell-group>
    <van-cell-group>
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </van-cell-group>
  </van-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { login } from '@/api'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const { updateUser } = useUserStore()
const form = reactive({
  username: '',
  password: ''
})
// 定义验证规则
const usernameRules = ref([
  { required: true, message: '用户名不能为空' },
  { pattern: /^\w{3,16}$/, message: '用户名长度为 3-16 个字符' }
])
const passwordRules = ref([
  { required: true, message: '密码不能为空' },
  { pattern: /^\w{6,24}$/, message: '密码必须为 6-24 位英文字母或数字' }
])
// 表单提交函数
const onSubmit = async values => {
  console.log(values)
  const data = await login(values)
  if (data) {
    updateUser({
      isLogin: true,
      username: form.username,
      password: form.password
    })
    router.push({name: 'user'})
  }
}

const onFailed = errorInfo => {
  console.log('failed', errorInfo)
}
</script>

<style lang="less" scoped>
button {
  position: fixed;
  top: 200px;
}
</style>
