<template>
  <div>
    <h1>这是父组件</h1>
    <router-link to="/router-children-test/one">显示one</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/router-children-test/two">显示two</router-link>
    <router-view></router-view>
    <div>父组件底部</div>
  </div>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  setup(){}
})
</script>

<style scoped>

</style>
