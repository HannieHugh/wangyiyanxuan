<template>
  <div id="app">
    <router-view/>
    <router-link to="/enter" class="msite-link" v-if="$route.path==='/' "></router-link>
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
  body
    //background rgba(0,0,0,.02)
</style>


