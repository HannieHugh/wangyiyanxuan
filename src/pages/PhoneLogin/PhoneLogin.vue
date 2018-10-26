<template>
  <div class="phoneLogin">
    <Header/>
    <div class="line1"></div>
    <div class="wyYxImg">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="middle">
      <div class="inputNum">
        <input type="text" placeholder="请输入手机号" style="outline:none" v-model="phone">
        </div>
      <div class="code">
        <input type="text" placeholder="请输入短信验证码" style="outline:none" v-model="msgCode">
        <div class="getCode">获取验证码</div>
      </div>
      <div class="problem" >
        <span>遇到问题</span>
        <span>使用密码验证登录</span>
      </div>
    </div>
    <div class="loginBtn">
      <div class="phoneBtn" @click="login">
        登录
      </div>
      <div class="emailBtn" @click="$router.push('/profile')">
        其他登录方式
      </div>
      <div class="phone-register" >
        注册账号
      </div>
      <i class="arrow-right"></i>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header/Header.vue'
  import {Toast,MessageBox} from 'mint-ui'
  export default {
    data(){
      return{
        phone:'',
        msgCode:'',
      }
    },
    computed:{
      rightPhone(){
        return /^1\d{10}$/.test(this.phone)
      },
      rightCode(){
        return /^d{4}$/.test(this.msgCode)
      }
    },

    components:{
      Header
    },
    methods:{
      login(){
        //前台表单验证
        if(!this.rightPhone){
          MessageBox.alert('确定','手机号输入错误')
        }else if(!this.rightCode){
          MessageBox.alert('确定','验证码错误')
        }else{
          this.$router.push('/personal')
        }

      }
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
      .phone-register
        font-size (32/$rem)
      .arrow-right
        background-size 100% 100%
        width (14*2/$rem)
        height (14*2/$rem)
        background-repeat no-repeat
        position absolute
        top 3.53rem
        right 3.6rem
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png)
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
        .getCode
          width (170/$rem)
          height (50/$rem)
          line-height (50/$rem)
          text-align center
          border (1/$rem) solid #7e8c8d
          border-radius 10%
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

