<template>
  <div>
    132 
    <a href="#">打发顺丰</a>
  </div>
</template>
 
<script>
import {defineComponent, onMounted} from "vue"

export default defineComponent({
  setup(){
    onMounted(()=>{
      console.log(import.meta.env,"KKKKK",import.meta.env.VITE_APP_TITLE)
    })
  }
})
</script>

<style scoped>

</style>
