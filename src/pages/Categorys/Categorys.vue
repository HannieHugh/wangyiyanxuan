<template>
  <div class="category">
    <div class="header">
      <div class="msite_search">
        <i class="search-icon"></i>
        <span>搜索商品，共16740件好物</span>
      </div>
    </div>
    <div class="categoryContent">
      <div class="contentLeft">
        <div class="leftItem">
          <span :class="{sline:currentIndex===index}" @click="rightShow(index,category)"
                v-for="(category,index) in categorys" :key="index">
            <span>
              {{category.name}}
            </span>
          </span>
        </div>
      </div>
      <!--<RightItem :subCateList="subCateList"/>-->
      <div class="contentRight" v-if="!subCateList.length && categorys[0]">
        <ul class="container">
          <div class="topImg">
            <img :src="categorys[0].bannerUrl" alt="">
          </div>
          <div class="itemUl">
            <div class="itemOne" v-for="(subCate,index) in categorys[0].subCateList" :key="index">
              <img :src="subCate.wapBannerUrl" alt="">
              <div>{{subCate.name}}</div>
            </div>
          </div>
        </ul>
      </div>
      <!--<div class="contentRight" v-else="subCateList">
        <ul class="container">
          <div class="topImg">
            <img :src="category.bannerUrl" alt="">
          </div>
          <div class="itemUl">
            <div class="itemOne" v-for="(subCate,index) in subCateList" :key="index">
              <img :src="subCate.wapBannerUrl" alt="">
              <div>{{subCate.name}}</div>
            </div>
          </div>
        </ul>


        </div>-->
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import RightItem from '../../components/RightItem/RightItem.vue'
  export default {
    data(){
      return{
        subCateList:[],
        category:{},
        currentIndex:0
      }

    },
    mounted(){
      this.$store.dispatch('getCategorys' );
      new BScroll('.contentLeft',{
        click:true
      })
      new BScroll('.contentRight',{
        click:true
      })
    },
    computed:{
      ...mapState(['categorys'],()=>{
        this.$nextTick(()=>{
          this.category = this.categorys[0]
          this.subCateList = this.categorys[0].subCateList
        })
      }),
     /* getRightFood(){

      }*/

    },
    methods:{
      rightShow(index,category){
        //console.log('---')
        this.subCateList = this.categorys[index].subCateList
        this.category = category
        this.currentIndex = index;
      }
    },
    components:{
      RightItem
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .category
    width 100%
    height 100%
    .header
      width: 100%
      height (88/$rem)
      display: flex
      justify-content: center
      align-items center
      box-sizing border-box
      border-bottom  (1/$rem) solid #ccc
      .msite_search
        border-radius (10/$rem)
        background-color #ededed
        width (690/$rem)
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
    .categoryContent
      overflow hidden
      display: flex;
      .contentLeft
        width (162/$rem)
        height (1200/$rem)
        padding 0 0 (138/$rem) 0
        border-right:(1/$rem) solid #ccc
        .leftItem
          padding (40/$rem) 0 2rem 0

          >span
            box-sizing border-box
            font-size .37333rem
            text-align center
            margin-bottom (60/$rem)
            display block
            width (162/$rem)
            height (40/$rem)
            line-height (40/$rem)
            position: relative;
            &.sline
              &::after
                content: ''
                height: 100%
                width .08rem
                display: block
                position: absolute
                top: 0
                left:0
                background #ab2b2b
              >span
                color #ab2b2b

      .contentRight
        width (528/$rem)
        height (1088/$rem)
        padding (30/$rem) (30/$rem) (21/$rem) (30/$rem)
        display flex
        flex-direction column
        .topImg
          >img
            width (528/$rem)
            height (192/$rem)
        .itemUl
          width (528/$rem)
          height (864/$rem)
          .itemOne
            float left
            width (144/$rem)
            height (216/$rem)
            margin-right (32/$rem)
            >img
              width (144/$rem)
              height (144/$rem)
            >div
              font-size .32rem
              width (144/$rem)
              height (72/$rem)
              text-align center


</style>

