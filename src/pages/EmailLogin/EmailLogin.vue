<template>
  <div class="phoneLogin">
    <Header/>
    <div class="line1"></div>
    <div class="wyYxImg">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="middle">
      <div class="inputNum">邮箱账号</div>
      <div class="code">密码</div>
      <div class="problem" >
        <span>注册账号</span>
        <span>忘记密码</span>
      </div>
    </div>
    <div class="loginBtn">
      <div class="phoneBtn" @click="$router.push('/personal')">
        登录
      </div>
      <div class="emailBtn" @click="$router.push('/profile')">
        其他登录方式
      </div>
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
  .phoneLogin
    width 100%
    height 100%

    .wyYxImg
      display: flex
      justify-content center
      align-items center
      width:(750/$rem)
      height (310/$rem)
      >img
        width:(96*2/$rem)
        height (32*2/$rem)

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
    .middle
      padding-left (70/$rem)
      display flex
      flex-direction column
      justify-content center
      margin-bottom (50/$rem)
      .inputNum
        width (600/$rem)
        height (46/$rem)
        border-bottom (.03/$rem) solid #7e8c8d
        font-size .36rem
        color #7e8c8d
      .code
        width 88%
        height (106/$rem)
        border-bottom (.03/$rem) solid #7e8c8d
        font-size .36rem
        padding-top (50/$rem)
        box-sizing border-box
        color #7e8c8d
        display flex
        justify-content space-between
      .problem
        width 90%
        height (66/$rem)
        display flex
        justify-content space-between
        padding-top (50/$rem)
        box-sizing border-box
        >span
          font-size .36rem
          color #7e8c8d

</style>

