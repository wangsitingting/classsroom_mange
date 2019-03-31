<template>
    <div id='header'>
        <p class='themeColor' v-html='`${this.a}`'></p>
    </div>
</template>
<script>
export default {
    name: 'header',
    data() {
        return {
            a: ''
        }
     },
     created() {
      let name = location.pathname.slice(1)
      switch (name){
        case '':
          this.a = '欢迎来到教室预约系统';
          break;
        case 'login':
          this.a = '登录';
          break;
        case 'register':
          this.a = '注册';
          break;
      }
    },
}
</script>
<style lang="scss">
#header{
    .themeColor{
        height:60px;
        font-size: 18px;
        line-height: 60px;
        color: #ffffff;
        margin-bottom: 30px;
    }
}
</style>


