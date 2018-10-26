<template>
  <div class="goods">
    <div class="header">
      <i class="iconfont icon-shouye i_left"></i>
      <span>网易严选</span>
      <i class="iconfont icon-sousuo i_middle"></i>
      <i class="iconfont icon-gouwuche i_right"></i>
    </div>
    <div class="goodsContent">
      <!--严选断货补单王-->
      <div class="selloutGoods">
        <div class="picsContainer swiper-container" >
          <ul class="picsUl swiper-wrapper">
            <li  v-if="foods.banner" class="eve swiper-slide" v-for="(eve,index) in foods.banner" :key="index">
              <img v-if="foods.banner" :src="eve.picUrl" alt="">
            </li>
          </ul>
        </div>
        <!--小图滚动-->
        <div class="smallImgContainer">
          <ul class="smallImgUl">
            <li v-if="foods.column" class="smallImg" v-for="(eve,index) in foods.column" :key="index">
              <img v-if="foods.column" :src="eve.picUrl" alt="">
              <span>{{eve.articleCount}}</span>
              <div class="text ellipsis">{{eve.title}}</div>
            </li>
          </ul>

        </div>
      </div>

      <div class="goodsContainer">
        <!--为你推荐-->
        <div class="goodsPick">
          <div class="picTitle">为你推荐</div>
          <div class="goodPic">
            <div class="mainGood">
              <img v-if="foods.column" :src="foods.recommendOne.picUrl" alt="">
              <div class="textYx" v-if="foods.column">{{foods.recommendOne.typeName}}</div>
            </div>
            <span v-if="foods.column">{{foods.recommendOne.title}}</span>
            <span class="two" v-if="foods.column">{{foods.recommendOne.priceInfo}}元起</span>
            <div class="desc" v-if="foods.column">{{foods.recommendOne.subTitle}}</div>
          </div>
        </div>
        <!--挑款师推荐-->
        <div class="twoPick">
          <div class="first">
            <div class="left">
              <div class="top">
                <img v-if="foods.column" :src="foods.recommendTwo.avatar" alt="">
                <span class="around" v-if="foods.column">{{foods.recommendTwo.nickname}}</span>
              </div>
              <div class="middle ellipsis" v-if="foods.column">{{foods.recommendTwo.title}}</div>
              <div class="bottom ellipsis" v-if="foods.column">{{foods.recommendTwo.subTitle}}</div>

            </div>
            <div class="right">
              <img :src="foods.recommendTwo.picUrl" v-if="foods.column" alt="">
              <div class="textYx" v-if="foods.column">{{foods.recommendTwo.typeName}}</div>
            </div>
          </div>
          <div class="first">
            <div class="left">
              <div class="top">
                <img :src="foods.recommendThree.avatar" v-if="foods.column" alt="">
                <span class="around" v-if="foods.column">{{foods.recommendThree.nickname}}</span>
              </div>
              <div class="middle ellipsis" v-if="foods.column">{{foods.recommendThree.title}}</div>
              <div class="bottom ellipsis" v-if="foods.column">{{foods.recommendThree.subTitle}}</div>

            </div>
            <div class="right">
              <img :src="foods.recommendThree.picUrl" v-if="foods.column" alt="">
              <span class="textYx" v-if="foods.column">{{foods.recommendThree.typeName}}</span>
            </div>
          </div>

        </div>
        <!--十点一刻-->
        <div class="tenPoint">
          <div class="tenContent">
            <div class="tenText">十点一刻</div>
            <div class="tenContainer">
              <ul class="tenUl">
                <li class="tenItem" v-for="(ten,index) in foods.tenfifteen" :key="index">
                  <div class="todayTalk">
                    <div class="yi"></div>
                    <span>今日话题</span>
                    <div class="yi"></div>
                  </div>
                  <span class="homeExp">{{ten.title}}</span>
                  <span class="homeTool">{{ten.desc}}</span>
                  <!--话题参与-->
                  <div class="topic">
                    <div class="chatJoin">
                      <div class="avatar" v-if="ten.participantAvatar" v-for="(avatar,index) in ten.participantAvatar" :key="index">
                        <img :src="avatar?avatar:'https://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48'" alt="">
                      </div>
                      <div class="avatar roll">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                      </div>
                      <span v-if="foods.tenfifteen" class="join">
                      {{ten.participantNum}}人参与话题
                    </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--严选珍品-->
        <div class="goodsPick" v-if="foods.zhenOne">
          <div class="picTitle" >{{foods.zhenOne.nickname}}</div>
          <div class="goodPic">
            <div class="mainGood zhenpin">
              <div class="textYx">{{foods.zhenOne.typename}}</div>
            </div>
            <span>{{foods.zhenOne.title}}</span>
            <span class="two">{{foods.zhenOne.priceInfo}}元起</span>
            <div class="desc">{{foods.zhenOne.subTitle}}</div>
          </div>
        </div>
        <!--严选推荐-->
        <div class="twoPick">
          <div class="first">
            <div class="left">
              <div class="top">
                <img v-if="foods.zhenTwo" :src="foods.zhenTwo.avatar" alt="">
                <span v-if="foods.zhenTwo" class="around">周边组：mochale</span>
              </div>
              <div v-if="foods.zhenTwo" class="middle">{{foods.zhenTwo.title}}</div>
              <div v-if="foods.zhenTwo" class="bottom">{{foods.zhenTwo.subTitle}}</div>

            </div>
            <div class="right">
              <img v-if="foods.zhenTwo" :src="foods.zhenTwo.picUrl" alt="">
              <div class="textYx" v-if="foods.zhenTwo">{{foods.zhenTwo.typeName}}</div>
            </div>
          </div>
          <div class="first">
            <div class="left">
              <div class="top">
                <img v-if="foods.zhenTwo" :src="foods.zhenThree.avatar" alt="">
                <span v-if="foods.zhenTwo" class="around">周边组：mochale</span>
              </div>
              <div v-if="foods.zhenTwo" class="middle">{{foods.zhenThree.title}}</div>
              <div v-if="foods.zhenTwo" class="bottom">{{foods.zhenThree.subTitle}}</div>

            </div>
            <div class="right">
              <img v-if="foods.zhenTwo" :src="foods.zhenTwo.picUrl" alt="">
              <div class="textYx" v-if="foods.zhenThree">{{foods.zhenThree.typeName}}</div>
            </div>
          </div>
        </div>
        <!--严选look-->
        <div class="yanxuanLook" v-if="foods.yxLook">
          <div class="picTitle">严选LOOK</div>
          <img  :src="foods.yxLook.picUrl" alt="">
          <div class="rating">
            <div class="ratingTop">
              <img :src="foods.yxLook.avatar" alt="">
              <span>q*******r</span>
            </div>
            <div class="ratingBtm">{{foods.yxLook.content}}</div>
          </div>
        </div>
        <!--更多精彩-->
        <div class="moreGreat"  v-if="foods.findMore">
          <div class="todayTalk">
            <div class="yi"></div>
            <span>更多精彩</span>
            <div class="yi"></div>
          </div>
          <div class="bkContainer" v-for="(findOne,index) in foods.findMore" :key="index">
            <div class="baokuan">
              <img :src="findOne.itemPicUrl" alt="">
              <span>{{findOne.title}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'

  export default {
    data(){
      return{

      }
    },
    computed:{
      ...mapState(['foods'])
    },
    mounted(){


      this.$store.dispatch('getFoods',()=>{
        this.$nextTick(()=>{
          new Swiper ('.swiper-container', {

            slidesPerView : 1.2,    //置slider容器能够同时显示的slides数量(carousel模式)。
            spaceBetween : 30,
            loop: true, // 循环模式选项
          });
        })
      });

      new BScroll('.picsContainer',{
        scrollX: true,
        click: true,
      });
      new BScroll('.smallImgContainer',{
        scrollX:true,
        click:true
      })
      new BScroll('.tenContainer',{
        scrollX: true,
        click: true,
      })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  body
    background #f4f4f4
  .goods
    width: 100%
    height:100%
    .header
      background #fff
      width 100%
      height (44*2/$rem)
      padding (15/$rem) 0 0 0
      position: relative
      border-bottom :(1/$rem) solid #cccccc
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

    .goodsContent
      .selloutGoods
        background #fff
        width 100%
        .picsContainer
          width (750/$rem)
          height (400/$rem)
          display flex
          justify-content center
          align-items: center
          .picsUl
            display flex
            align-items center
            .eve
              width (690/$rem)
              height (385/$rem)
              >img
                display block
                width 100%
                height: 5.13333rem
                border-radius (20/$rem)
        .smallImgContainer
          width (750/$rem)
          height (240/$rem)
          display flex
          padding-bottom (50/$rem)
          //padding:0 (30/$rem) 0 (60/$rem)
          .smallImgUl
            display flex
            align-items center
            padding 0 (40/$rem)
            .smallImg
              width (164/$rem)
              height (164/$rem)
              //background-image url(//yanxuan.nosdn.127.net/1662ac1fabbc2e495bdda39357a93d65.png?imageView&quality=75)
              //background-repeat no-repeat
              //background-size  cover
              margin-right (30/$rem)
              border-radius (10/$rem)
              position relative
              >img
                display block
                width (164/$rem)
                height (164/$rem)
              >span
                font-size .32rem
                color #fff
                position absolute
                top (2/$rem)
                right (2/$rem)
              >.text
                font-size .32rem
                color #333333
                text-align center
                margin-top (20/$rem)
      .goodsContainer
        background #fff
        margin-top (20/$rem)
        width (690/$rem)
        padding:0 (30/$rem) (40/$rem) (30/$rem)
        .goodsPick
          width:(690/$rem)
          height:(730/$rem)
          .picTitle
            width:(690/$rem)
            height:(120/$rem)
            font-size 0.426rem
            line-height (120/$rem)
            text-align center

          .goodPic
            width 100%
            height (574/$rem)
            border 1px solid #ccc
            position: relative
            border-radius (10/$rem)
            box-sizing border-box
            >span
              padding 0 (15/$rem)
              font-size .48rem
              &.two
                position absolute
                top:(420/$rem)
                right:(16/$rem)
            .mainGood
              width:(688/$rem)
              height:(386/$rem)
              overflow hidden
              border-radius (10/$rem) (10/$rem) 0 0
              >img
                display block
                width:(688/$rem)
                height:(386/$rem)
              &.zhenpin
                background-image url(//yanxuan.nosdn.127.net/64c86e9162d504f515d999141b585b69.jpg?imageView&quality=75)
              .textYx
                font-size (26/$rem)
                width:(120/$rem)
                height:(36/$rem)
                line-height (36/$rem)
                background #fff
                text-align centerri
                //line-height (36/$rem)
                //margin:(20/$rem) (25/$rem)
                border-radius (18/$rem)
            .desc
              font-size:0.3733rem
              padding 0 (15/$rem)
              color gray
              margin-top:(10/$rem);



        .twoPick
          //widthLine(100%)
          .first
            margin-bottom (35/$rem)
            width 100%
            height:(274/$rem)
            border:(1/$rem) solid #cccccc
            border-radius (10/$rem)
            display flex
            box-sizing border-box
            .left
              clearFix()
              width (358/$rem)
              height:(272/$rem)
              padding:0 (30/$rem) 0 (20/$rem)
              .top
                width (358/$rem)
                height:(75/$rem)
                display flex
                align-items center
                >img
                  width (46/$rem)
                  height:(46/$rem)
                  display inline-block
                  vertical-align middle
                  border-radius 50%
                  margin-right (10/$rem)
                .around
                  font-size (24/$rem)
              .middle
                font-size .426rem
                margin:(20/$rem) 0
              .bottom
                font-size: .32rem
                color #7f7f7f
            .right
              width (280/$rem)
              height:(272/$rem)
              position: relative
              >img
                display block
                width (280/$rem)
                height:(272/$rem)
              .textYx
                position: absolute
                top (-9/$rem)
                left (-20/$rem)
                font-size (26/$rem)
                width:(200/$rem)
                height:(36/$rem)
                background #fff
                text-align center
                line-height (36/$rem)
                margin:(20/$rem) (25/$rem)
                border-radius (18/$rem)


        .tenPoint

          .tenContent
            width (690/$rem)
            height (531/$rem)
            padding 0 (30/$rem) (40/$rem) (30/$rem)
            margin-bottom (20/$rem)
            .tenText
              width (690/$rem)
              height (120/$rem)
              line-height (120/$rem)
              text-align center
              font-size:(30/$rem)
            .tenContainer
              width 100%
              height (420/$rem)
              display flex
              .tenUl
                display flex
                .tenItem
                  background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png)
                  background-repeat no-repeat
                  background-size cover
                  background-position center
                  width:(500/$rem)
                  height (294/$rem)
                  padding: (38/$rem) (40/$rem) (79/$rem) (40/$rem)
                  margin-right:(30/$rem);
                  display flex
                  flex-direction column
                  justify-content space-around
                  align-items center
                  .todayTalk
                    display flex
                    align-items center
                    .yi
                      width (24/$rem)
                      height (3/$rem)
                      background #d9d9d9
                    span
                      color #7f7f7f
                      font-size .32rem
                      margin 0 (10/$rem)
                  .homeExp
                    font-size .48rem
                    font-weight bold

                  .homeTool
                    font-size .373rem
                  .topic
                    width 100%
                    height (58/$rem)
                    height
                    display: flex
                    justify-content center
                    align-items center
                    .chatJoin
                      display flex
                      justify-content center
                      align-items center
                      width (500/$rem)
                      height (58/$rem)
                      line-height (48/$rem)
                      .avatar
                        width (48/$rem)
                        height (48/$rem)
                        margin-right (5/$rem)
                        border-radius (24/$rem)
                        img
                          width (48/$rem)
                          height (48/$rem)
                          border-radius (24/$rem)
                          &.three
                            border-radius (24/$rem)
                        &.roll
                          width (40/$rem)
                          height (40/$rem)
                          background #d9d9d9
                          display: flex
                          align-items center
                          justify-content center

                        .dot
                          width (6/$rem)
                          height (6/$rem)
                          background gray
                          margin:(3/$rem)
                          background #fff
                          border-radius (3/$rem)
                      .join
                        font-size .32rem
                        color #7f7f7f
                        margin-left (30/$rem)




        .yanxuanLook
          .picTitle
            width:(690/$rem)
            height:(120/$rem)
            font-size 0.426rem
            line-height (120/$rem)
            text-align center
          img
            margin-left (-29/$rem)
          .rating
            width:(690/$rem)
            height:(116/$rem)
            padding (24/$rem) (30/$rem) (46/$rem) (30/$rem)

            .ratingTop
              width:(690/$rem)
              height:(48/$rem)
              display flex
              align-items center
              img
                width (40/$rem)
                height (40/$rem)
                margin-right (14/$rem)
                border-radius 50%
              span
                color #333333
                font-size (20/$rem)
            .ratingBtm
              color #7f7f7f
              text-align left
              font-size .373rem

        .moreGreat
          margin-bottom 400px
          .todayTalk
            display flex
            align-items center
            .yi
              width (250/$rem)
              height (1/$rem)
              background #d9d9d9
            span
              color #333
              font-size .373rem
              margin 0 (25/$rem)
          .bkContainer
            margin-top (60/$rem)
            padding (24/$rem)
            margin-bottom (30/$rem)
            .baokuan
              width (642/$rem)
              height (450/$rem)

              >img
                width (642/$rem)
                height (360/$rem)
              >span
                font-size .373333rem

</style>

