<template>
  <div>
    <table>
      <tr>
        <td>账号</td>
        <td><input type="text" v-model="form.login"></td>
      </tr>
      <tr>
        <td>密码</td>
        <td><input type="password" v-model="form.psd"></td>
      </tr>
      <tr>
        <td>验证码</td>
        <td><input type="text" v-model="form.code"></td>
      </tr>
    </table>
    <button @click="submit">注册</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, onActivated, onDeactivated } from 'vue'

const form = reactive({
  login: '',
  psd: '',
  code: ''
})

const submit = () => {
  console.log(form);
}

onActivated(() => {
  form.code = ''
})
</script>

<style lang="scss" scoped>
</style>
