<template>
  <div class="header">
    <i class="iconfont icon-shouye i_left" @click="$router.replace('msite')"></i>
    <span>网易严选</span>
    <i class="iconfont icon-sousuo i_middle"></i>
    <i class="iconfont icon-gouwuche i_right"></i>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    background #fff
    width 100%
    height (44*2/$rem)
    padding-top (15/$rem)
    position: relative
    >span
      display block
      font-size (34/$rem)
      width 100%
      text-align center
      margin (30/$rem) 0 0 0
    >i
      position: absolute
      top (30/$rem)
      font-size:(54/$rem)
      &.i_right
        right (15/$rem)
      &.i_middle
        right (90/$rem)
      &.i_left
        left (15/$rem)

</style>

