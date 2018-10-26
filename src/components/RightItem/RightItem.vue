<template>
  <div class="contentRight">
    <div class="topImg" v-for="(subCate,index) in subCateList" :key="index">
      <img :src="subCate.bannerUrl" alt="">
    </div>
    <div class="itemUl">
      <div class="itemOne">
        <img src="http://yanxuan.nosdn.127.net/c06501bfcc69f11a3e757eb1d4aa711d.png?imageView&quality=85&thumbnail=144x144" alt="">
        <div>居家新品</div>
      </div>
      <div class="itemOne">
        <img src="http://yanxuan.nosdn.127.net/c06501bfcc69f11a3e757eb1d4aa711d.png?imageView&quality=85&thumbnail=144x144" alt="">
        <div>居家新品</div>
      </div><div class="itemOne">
      <img src="http://yanxuan.nosdn.127.net/c06501bfcc69f11a3e757eb1d4aa711d.png?imageView&quality=85&thumbnail=144x144" alt="">
      <div>居家新品</div>
    </div><div class="itemOne">
      <img src="http://yanxuan.nosdn.127.net/c06501bfcc69f11a3e757eb1d4aa711d.png?imageView&quality=85&thumbnail=144x144" alt="">
      <div>居家新品</div>
    </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    mounted(){
      setTimeout(()=>{
        console.log(subCateList)
      },1000)


    },
    props:{
      subCateList:Array
    },
    computed:{
      ...mapState(['categorys'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .contentRight
    width (528/$rem)
    height (1088/$rem)
    padding (30/$rem) (30/$rem) (21/$rem) (30/$rem)
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

