<!--
 * @Author: Const
 * @Date: 2020-04-18 18:44:06
 * @LastEditors: Const
 * @LastEditTime: 2020-04-18 21:16:04
 * @Description: 
 * @FilePath: \i-hammer\src\renderer\App.vue
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'i-hammer'
  }
</script>

<style>
  /* CSS */
  html,body{
    margin:0;
    height:100%;
    width:100%;
  }
  #app {
    height:100%;
    width:100%;
  }
</style>
