<template>
  <div>
    <h2>我是one组件</h2>
  </div>
</template>

<script >
import {defineComponent, onMounted} from "vue"

export default defineComponent({
  setup(){
    onMounted(()=>{
      console.log("XXXXXXXXX")
    })
  }
})
</script>

<style scoped>

</style>
