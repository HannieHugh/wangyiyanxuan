<template>
  <div class="msite">
    <div class="msite_header">
      <a class="logo" href="javascrip:;"></a>
      <div class="msite_search">
        <i class="search-icon"></i>
        <span>搜索商品，共16740件好物</span>
      </div>
    </div>
    <div class="msite_nav">
      <ul class="navUl">
          <span border-1px>
            推荐
          </span>
        <span>
            推荐
          </span>
        <span>
            推荐
          </span>
        <span>
            推荐
          </span>
        <span>
            推荐
          </span>
      </ul>
      <div class="swiper-container">
        <ul class="msite_pics swiper-wrapper">
          <li class="msite_pic swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/f8dcd65c11106261e0030638914c9b64.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </li>
          <li class="msite_pic swiper-slide">
            slide2
          </li>
          <li class="msite_pic swiper-slide">
            slide3
          </li>
        </ul>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>

      <ul class="after_sales">
        <li class="after_sales_item">
          <i></i>
          <span>网易自营品牌</span>
        </li>
        <li class="after_sales_item">
          <i></i>
          <span>网易自营品牌</span>
        </li>
        <li class="after_sales_item">
          <i></i>
          <span>网易自营品牌</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  //import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  export default {
    mounted(){
      new Swiper('.swiper-container',{
        loop: false, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    components:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .msite
    width: 100%
    height: 100%
    .msite_header
      width (750/$rem)
      padding (16/$rem) (30/$rem)
      display flex
      align-items center
      .logo
        width: (138/$rem)
        height: (39.98/$rem)
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
        background-size cover
        //background-position 0 (40/$rem)
        display inline-block
        background-position center
        margin-right:(20/$rem);
      .msite_search
        margin-right (20/$rem)
        border-radius (10/$rem)
        background-color #ededed
        width (532/$rem)
        height (56/$rem)
        line-height (87.97/$rem)
        text-align: center
        display: flex
        align-items center
        justify-content center
        .search-icon
          width (27.98/$rem)
          height (27.98/$rem)
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
          margin-right (20/$rem)
        span
          font-size $fontSize
          color #666
          line-height: (56/$rem)
    .msite_nav
      width (1591.47/$rem)
      height:(60/$rem)
      .navUl
        width 100%
        height 100%
        display flex
        span
          padding (16/$rem)
          display block
          font-size $fontSize
          flex 0.1
          text-align center
          height (60/$rem)
          //line-height (60/$rem)
      .msite_pics
        width:(750*3/$rem)
        height:(400/$rem)
        .msite_pic
          width (750/$rem)
          height 100%
          img
            display block
            width:(750/$rem)
            height:(400/$rem)
      .after_sales
        display flex
        .after_sales_item
          span
            font-size: (24/$rem)


</style>

