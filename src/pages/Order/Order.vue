<template>
    <div class="order">
      <div class="header">
        <div class="carr">
          <span class="car">购物车</span>
        </div>
        <div class="ticket">领券</div>
      </div>
      <div class="line1"></div>
      <div class="carContent">
        <!--//无忧退货-->
        <ul class="shUl">
          <span>30天无忧退货</span>
          <span>30天无忧退货</span>
          <span>30天无忧退货</span>
        </ul>
        <!--//购物车图片-->
        <div class="middleCar">
          <div class="carImg"></div>
          <span class="addGoods">去添加点什么吧</span>
          <div class="phoneBtn">
            登录
          </div>
        </div>
        <!--登录-->

      </div>
      <FooterGuide/>
    </div>

</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .order
    width 100%
    height 100%
    .header
      width (690/$rem)
      height:(88/$rem)
      padding:0 (30/$rem)
      position: relative
      .carr
        width 100%
        height 100%
        display flex
        justify-content center
        align-items: center
        .car
          font-size .48rem
      .ticket
        font-size .48rem
        position absolute
        top (24/$rem)
        right:(60/$rem)
        color: red


    .carContent
      width 100%
      height 100%
      background rgba(0,0,0,.05)
      .shUl
        width 100%
        heigth (50/$rem)
        padding (10/$rem) (30/$rem)
        display flex
        justify-content space-around
        >span
          font-size .32rem
          margin-right (50/$rem)
          height (50/$rem)
          line-height (50/$rem)


      .middleCar
        width: 100%
        height (300/$rem)
        margin (398/$rem) auto (498/$rem)
        text-align center
        .carImg
          width (248/$rem)
          height (248/$rem)
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)
          background-repeat no-repeat
          margin 0 auto
        .addGoods
          font-size (27/$rem)
          color gray
        .phoneBtn
          width:(480/$rem)
          height:(92/$rem)
          background crimson
          font-size (32/$rem)
          margin (30/$rem) auto
          display flex
          align-items center
          justify-content center
          color: #fff

</style>

