<template>
  <div>
    <div><button @click="changeName">改变名字</button> ： {{ obj.name }} -- {{ obj.hobby }}</div>
    
  </div>
  <div><button @click="changeNumber">改变数字</button> ： {{ msg }}</div>
  <div v-for="(item, index) in newArr" :key="index">
    <span>{{ item.name }}</span> : <span>{{ item.age }}</span>
  </div>
  <div><button @click="changeHobby">改变爱好</button> hobby: {{ hobby }}</div>
</template>

<script>
import { defineComponent, ref, toRef, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, nextTick } from "vue"

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      console.log("mounted前")
    })
    onMounted(() => {
      console.log("mounted后")
    })
    onBeforeUpdate(() => {
      console.log("更新前")
    })
    onUpdated(() => {
      console.log("更新后")
    })

    nextTick(() => {
      console.log("nextTick函数");
      msg.value = 1000;
      newArr.value = [
        { age: 18, name: "麦克" },
        { age: 23, name: "约翰" },
        { age: 66, name: "玛丽" },
      ]
    })
    const obj = reactive({
      name: "小红",
      hobby: '升龙拳'
    })
    let hobby = toRef(obj,'hobby');
    const msg = ref(10);
    const newArr = ref([]);
    function changeNumber() {
      msg.value++
    }
    function changeName() {
      obj.name = "丁丁";
    }
    function changeHobby(){
      hobby.value = '钢化斩'
    }
    return {
      obj,
      msg,
      newArr,
      changeName,
      changeNumber,
      changeHobby,
      hobby
    }
  },

})
</script>

<style scoped>
  div{
    margin: 16px 0;
  }
</style>
