<template>
  <div id="app">

    <router-view>

    </router-view>
    <router-link to="/msite" class="msite-link" v-if="$route.path==='/'">继续使用触屏版浏览</router-link>
    <FooterGuide/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'

export default {
  components: {
    //HelloWorld
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
   // background: #e3e3e2;
/*#app {
  background: #e3e3e2;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/
</style>
