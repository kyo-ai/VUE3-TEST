<template>
  <div>
    <h2 style="margin: 16px 0">View - Design</h2>
    <Space direction="vertical">
      <Space wrap>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
      </Space>
    </Space>
    <div>
      <Input v-model="value" placeholder="Enter something..." style="width: 100%" />
    </div>

    <div class="demo-login">
      <Login @on-submit="handleSubmit" >
        <UserName name="username" @on-change="handleChange" />
        <Password name="password" />
        <div class="demo-auto-login">
          <Checkbox v-model="autoLogin" size="large">自动登录</Checkbox>
          <a>忘记密码</a>
        </div>
        <Submit />
      </Login>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue"
import  { Message ,Modal} from 'view-ui-plus'  //引入需要使用的组件
export default defineComponent({
  setup() {
    const value = ref('123');
    const autoLogin = ref(true);
    const handleSubmit = (valid, { username, password })=> {
      if (valid) {
        console.log(valid,"SSSSSSSS")
        Message.info({
          title: '输入的内容如下：',
          content: 'username: ' + username + ' | password: ' + password
        });
      }
    }
    function handleChange (a){
      console.log(a)
    }
    watch(value, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })
    return {
      value,
      autoLogin,
      handleSubmit,
      handleChange
    }
  }
})
</script>

<style scoped></style>
