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
    </table>
    <button @click="submit">登录</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

const form = reactive({
  login: '',
  psd: ''
})

const submit = () => {
  console.log(form);

}

onMounted(() => {
  console.log("login mounted");
})

onUnmounted(() => {
  console.log("login unMounted");
})

onActivated(() => {
  console.log("Login onActivated");
})

onDeactivated(() => {
  console.log("Login onDeactivated");
  
})
</script>

<style lang="scss" scoped>
</style>
