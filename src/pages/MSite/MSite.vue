<template>
  <div class="msite">
    <div class="msite_header">
      <div class="topHeader">
        <a class="logo" href="javascrip:;"></a>
        <div class="msite_search">
          <i class="search-icon"></i>
          <span>搜索商品，共16740件好物</span>
        </div>
      </div>
      <div class="scroll">
        <ul class="navUl">
          <div>推荐</div>
          <div>推荐</div>
          <div>推荐</div>
          <div>推荐</div>
          <div>推荐</div>
          <div>推荐</div>
          <div>推荐</div>
          <div>推荐</div>
        </ul>
      </div>

    </div>
    <div class="content">
      <div class="msite_nav">
        <div class="swiper-container">
          <ul class="msite_pics swiper-wrapper">
            <li class="msite_pic swiper-slide" v-if="msiteMsg.focusList.length>0" v-for="(focus,index) in msiteMsg.focusList" :key="index">
              <img :src="focus.picUrl" alt="">
            </li>
          </ul>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>

        <ul class="after_sales">
          <li class="after_sales_item" v-for="(policy,index) in msiteMsg.policyDescList" :key="index">
            <i class="icon—right"></i>
            <span>{{policy.desc}}</span>
          </li>
        </ul>
      </div>
      <div class="businessGoods clearFix">
        <div class="business">
          <span class="theme">品牌制造商直供</span>
          <i class="toRight"></i>
        </div>
        <ul class="goodsListOne">
          <li class="goodOne">
            <span>ck制造商</span>
            <span>25元起</span>
            <i class="shangxin-icon"></i>
          </li>
          <li class="goodOne">
            <span>ck制造商</span>
            <span>25元起</span>
            <i class="shangxin-icon"></i>
          </li>
          <li class="goodOne">
            <span>ck制造商</span>
            <span>25元起</span>
            <i class="shangxin-icon"></i>
          </li>
          <li class="goodOne">
            <span>ck制造商</span>
            <span>25元起</span>
            <i class="shangxin-icon"></i>
          </li>
        </ul>
      </div>
      <div class="newGoods">
        <div class="newGoodsTitle">
        <span class="parent">
           <span class="newTitle">新品首发</span>
           <span class="lookAllBtn">查看全部
           <i class="arrow-right"></i>
        </span>
        </span>
        </div>
        <div class="swiper-container2">
          <ul class="goodsHm">
            <li class="goodsHmItem" v-for="(newItem,index) in msiteMsg.newItemList" :key="index">
              <img  class="itemImg" :src="newItem.listPicUrl" alt="">
              <span class="itemText1 ellipsis">{{newItem.name}}</span>
              <span class="itemText2">{{newItem.simpleDesc}}</span>
              <span class="itemPrice">￥{{newItem.retailPrice}}</span>
            </li>
          </ul>
          <div class="swiper-pagination2"></div>
        </div>
      </div>
      <div class="newGoods two">
        <div class="newGoodsTitle">
        <span class="parent">
           <span class="newTitle">人气推荐，好物精选</span>
           <span class="lookAllBtn">查看全部
           <i class="arrow-right"></i>
        </span>
        </span>
        </div>
        <div class="swiper-container2" >
          <ul class="goodsHm swiper-wrapper">
            <li class="goodsHmItem swiper-slide">
              <img  class="itemImg" src="http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span class="itemText1 ellipsis">网易制造低压海盐制造低压海盐</span>
              <span class="itemText2">古法散热古法snare</span>
              <span class="itemPrice">￥199</span>
            </li>
            <li class="goodsHmItem swiper-slide">
              <img  class="itemImg" src="http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span class="itemText1 ellipsis">网易制造低压海盐制造低压海盐</span>
              <span class="itemText2">古法散热古法snare</span>
              <span class="itemPrice">￥199</span>
            </li>
            <li class="goodsHmItem swiper-slide">
              <img  class="itemImg" src="http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span class="itemText1 ellipsis">网易制造低压海盐制造低压海盐</span>
              <span class="itemText2">古法散热古法snare</span>
              <span class="itemPrice">￥199</span>
            </li>
          </ul>
          <div class="swiper-pagination2"></div>
        </div>
      </div>
      <div class="setTimeSell">
        <div class="TimeSellContent">
          <div class="contentLeft">
            <span class="shopTime">严选限时购</span>
            <div class="time">
              <div>00</div>:
              <div>00</div>:
              <div>00</div>
            </div>
            <span class="nextTime">下一场4.30开始</span>
          </div>
          <div class="contentRight">
            <img src="http://yanxuan.nosdn.127.net/537a8e94f55864b5b71397f90ae8f49e.png?imageView&quality=85&thumbnail=330x330" alt="">
            <div class="yellowSell">
              <span class="nowP">￥266</span>
              <span class="oldP">￥288</span>
            </div>
          </div>
        </div>
        <img  class="fulishe" src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
      </div>
      <div class="selectedTheme businessGoods">
        <div class="business">
          <span class="theme">专题精选</span>
          <i class="toRight"></i>
        </div>
        <div class="wrapper1">
          <div class="themeImages" >
            <img class="themeImage" :src="topic.itemPicUrl" v-for="(topic,index) in msiteMsg.topicList" :key="index" alt="">
          </div>
        </div>

      </div>
      <div class="homeGoods">
        <ul class="haowuType" v-for="(cate,index) in msiteMsg.cateList" :key="index"  >
          <li class="homeGoodsTitle">
            <span>{{cate.name}}好物</span>
          </li>
          <ul class="homeGoodsList">
            <li class="homeGoodsItem" v-for="(item,index) in cate.itemList" :key="index">
              <img :src="item.listPicUrl" alt="">
              <div class="desc1">{{item.simpleDesc}}</div>
              <div class="desc2">{{item.name}}</div>
              <div class="homeGoodP">￥{{item.retailPrice}}</div>
            </li>
          </ul>
        </ul>


      </div>
    </div>

  </div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from'vuex'

  //import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  export default {
    computed:{
      ...mapState(['msiteMsg'])
    },
    mounted(){
      this.$store.dispatch('getMsite');
      new Swiper('.swiper-container',{
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
      let scroll = new BScroll('.wrapper1',{
        scrollX: true,
        click: true
      })
      new BScroll('.swiper-container2',{
        scrollX: true,
        click: true
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
    height:  100%
    /*.bottomdiv
      position: absolute
      bottom (-3850/$rem)
      left 0*/
    .msite_header
      //position fixed
      width (750/$rem)
      padding (16/$rem) (30/$rem) 0
      //display flex
      align-items center
      .topHeader
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

      .scroll
        width 100%
        //display flex
        margin-top (20/$rem)
        .navUl
          display flex
          //top-border-1px(#e4e4e4)
          margin-left (-66/$rem)
          >div
            line-height (60/$rem)
            font-size $fontSize
            text-align center
            height (60/$rem)
            width (19/750)%
    .msite_nav
      width (1591.47/$rem)
      height:(60/$rem)
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
        flex 1
        padding-left (55/$rem)
        .after_sales_item
          box-sizing border-box
          margin-right (70/$rem)
          padding-bottom (20/$rem)
          .icon—right
            background-image url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)
            background-size (32/$rem) (32/$rem)
          span
            font-size: (26/$rem)
            color #333
    .businessGoods
      width 100%
      position absolute
      top (600/$rem)
      right 0
      .business
        width (750/$rem)
        height (110/$rem)
        text-align center
        .theme
          font-size .42667rem
          color #333
          line-height (110/$rem)
        .toRight
          width (30/$rem)
          height (30/$rem)
          background-size (30/$rem) (30/$rem)
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png)

      .goodsListOne
        width: (750/$rem)
        height (476/$rem)
        padding (0/$rem) (16/$rem)
        //display flex
        .goodOne
          width (355/$rem)
          float left
          height (236/$rem)
          background rgba(0,0,0,.05)
          background-image url(http://yanxuan.nosdn.127.net/5aecffba9202b1fa956758dfbcd65b85.png?imageView&thumbnail=355x0&quality=65)
          background-size (355/$rem) (236/$rem)
          flex-direction column
          box-sizing border-box
          margin (3/$rem)
          padding (16/$rem) (10/$rem)
          span
            font-size .37333rem
            margin-bottom (20/$rem)
          .shangxin-icon
            width (64/$rem)
            height (32/$rem)
            background-size (64/$rem) (32/$rem)
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/new-5e42f2db1f.png)

    .newGoods
      position: absolute
      left: 0
      top (1210/$rem)
      text-align center
      &.two
        position: absolute
        left: 0
        top (1940/$rem)
      .newGoodsTitle
        width (750/$rem)
        height (260/$rem)
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png)
        background-size (750/$rem) (260/$rem)
        display flex
        justify-content center
        align-items center
        .parent
          display: flex
          flex-direction column
          align-items: center;
          .newTitle
            font-size (40/$rem)
            margin-bottom (30/$rem)
            color #8BA0B6;
          .lookAllBtn
            font-size (30/$rem)
            color #8BA0B6;
            background #D8E5F1;
            width (240/$rem)
            height:(56/$rem)
            display flex
            justify-content center
            align-items center
            .arrow-right
              width (9.98/$rem)
              height (21.98/$rem)
              background-size (9.98/$rem) (21.98/$rem)
              margin-left (10/$rem)
              background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexNewArrow-f3b56d449b.png)
      .swiper-container2
        width (750/$rem)
        height (480/$rem)
        display flex
        .goodsHm
          margin-top (30/$rem)
          display flex
          .goodsHmItem
            width (280/$rem)
            height (414/$rem)
            margin-left (30/$rem)
            text-align left
            .itemImg
              width (279.98/$rem)
              height (280/$rem)
              background rgba(0,0,0,.05)
            .itemText1
              display block
              font-size (30/$rem)
            .itemText2
              font-size (28/$rem)
              color #7f7f7f;
            .itemPrice
              font-size (30/$rem)
              color #b4282d


    .setTimeSell
      width (750/$rem)
      height (380/$rem)
      position: absolute
      top (2700/$rem)
      left 0
      .TimeSellContent
        width (645/$rem)
        height (320/$rem)
        display: flex
        justify-content center
        padding (30/$rem) (40/$rem) (30/$rem) (56/$rem)
        .contentLeft
          width (334/$rem)
          height (320/$rem)
          .shopTime
            font-size (36/$rem)
          .time
            margin-top (33/$rem)
            font-size (33/$rem)
            color #fff
            clearFix()
            >div
              border-radius (10/$rem)
              float left
              margin-right (20/$rem)
              text-align center
              line-height (56/$rem)
              width (62/$rem)
              height (56/$rem)
              background #444
          .nextTime
            font-size:(25/$rem)
        .contentRight
          width (320/$rem)
          height (320/$rem)
          position: relative
          >img
            width (320/$rem)
            height (320/$rem)
          .yellowSell
            width (96/$rem)
            height (96/$rem)
            border-radius (160/$rem)
            background orangered
            color: #fff
            position absolute
            bottom (50/$rem)
            right (26/$rem)
            .nowP
              font-size (30/$rem)
            .oldP
              font-size (30/$rem)

    .selectedTheme
      width (750/$rem)
      margin-bottom (20/$rem)
      height (563/$rem)
      position: absolute
      top:(3400/$rem)
      left 0
      .wrapper1
        width (670/$rem)
        height (417/$rem)
        padding-left (30/$rem)
        display flex
        .themeImages
          display: flex
          .themeImage
            width (575/$rem)
            height (322/$rem)
            border-radius (10/$rem)
            margin-right (20/$rem)
            padding 0 (15/$rem) (30/$rem) 0
    .homeGoods
      position: absolute
      top:(3840/$rem)
      left 0
      .homeGoodsTitle
        width 100%
        height (120/$rem)
        text-align center
        >span
          font-size:(30/$rem)
      .homeGoodsList
        width (750/$rem)
        .homeGoodsItem
          width (345/$rem)
          height (504/$rem)
          float left
          padding 0 (10/$rem) (33/$rem) (20/$rem)
          >img
            background-color rgba(0,0,0,.05)
            display: block
            width (345/$rem)
            height (345/$rem)
          .desc1
            color #9F8A60
            font-size (25/$rem)
            width (325/$rem)
            height (29/$rem)
            padding (20/$rem) (10/$rem)
            background #F1ECE2;
            display flex
            justify-content center
            align-items center
          .desc2
            font-size (30/$rem)
            padding (15/$rem) 0
          .homeGoodP
            font-size (35/$rem)
            color red
</style>

