<template>
  <footer class="footer_guide border-1px" v-show="$route.meta.footerShow">
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/msite'}" @click="goto('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/goods'}" @click="goto('/goods')">
      <span class="item_icon">
        <i class="iconfont icon-order"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/categorys'}" @click="goto('/categorys')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/order'}" @click="goto('/order')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/profile'}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>

</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height (98/$rem)
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin (5/$rem)
      color #999999
      &.on
        color #02a774
      span
        font-size (24/$rem)
        margin-top (2/$rem)
        margin-bottom (2/$rem)
        .iconfont
          font-size (39.98/$rem)
</style>


