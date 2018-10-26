<template>
  <div class="profile">
    <Header/>
    <div class="line1"></div>
    <div class="wyYxImg">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="loginBtn">
      <div class="phoneBtn" @click="$router.push('/phone')">
        <i class="phoneIcon"></i>
        手机号码登录
      </div>
      <div class="emailBtn" @click="$router.push('/email')">
        <i class="emailIcon"></i>
        邮箱账号登录
      </div>
      <div class="phone-register" >
      手机号快捷注册
      </div>
      <i class="arrow-right"></i>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header/Header.vue'
  export default {
    components:{
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .profile
    width 100%
    height 100%

    .wyYxImg
      display: flex
      justify-content center
      align-items center
      width:(750/$rem)
      height (410/$rem)
      >img
        width:(134*2/$rem)
        height (90/$rem)

    .loginBtn
      width:(750/$rem)
      height:(146*2/$rem)
      display flex
      flex-direction column
      align-items center
      justify-content center
      position: relative
      .phoneBtn
        width:(335*2/$rem)
        height:(47*2/$rem)
        background #b4282d
        font-size (32/$rem)
        display flex
        align-items center
        justify-content center
        color: #fff
        .phoneIcon
          color: #fff
          margin-right (32/$rem)
          width (40/$rem)
          height (40/$rem)
          background-repeat no-repeat
          background-position 0 (-49/$rem)
          background-size (40/$rem) 3.86667rem;
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)
      .emailBtn
        width:(335*2/$rem)
        height:(47*2/$rem)
        border:(1/$rem) solid #b4282d
        margin (40/$rem) 0
        font-size (32/$rem)
        display flex
        align-items center
        justify-content center
        color #b4282d
        .emailIcon
          color: #b4282d
          margin-right (32/$rem)
          width (40/$rem)
          height (40/$rem)
          background-repeat no-repeat
          background-position 0 0
          background-size (40/$rem) 3.86667rem;
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)
      .phone-register
        font-size (32/$rem)
      .arrow-right
        background-size 100% 100%
        width (14*2/$rem)
        height (14*2/$rem)
        background-repeat no-repeat
        position absolute
        top 3.53rem
        right 3.1rem
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png)
</style>

