<template>
  <div id="app">
    <!--一级组件来渲染一级路由-->
    <div class="test">{{test}}</div>
    <i class="icon-qrcode"></i>
    <v-test></v-test>
    <router-view></router-view>
  </div>
</template>

<script>
  import test from "components/test.vue"
  import {mapState} from "vuex";
  export default {
    name: 'App',
    computed:{
        ...mapState(["test"])
    },
    components:{
        "v-test":test
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    overflow hidden
    background pink
    .test
      color red
      font-size 40px
</style>
