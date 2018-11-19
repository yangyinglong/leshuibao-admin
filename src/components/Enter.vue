<template>
  <div class="enter">
    <el-container>
      <el-header>
        <div class="navigate">
          <div class="headerRight">
            <b class="logo">&nbsp</b>
            <Login></Login>
            <div class="content" v-if="loginStatus == 0">
            </div>
            <div class="content" v-else>
              <Logout></Logout>
            </div>
          </div>

        </div>
      </el-header>
      <el-main>
        <div class="main">
          <h1>乐税宝</h1>
          <h2>极简 高效</h2><br><br>
          <div v-if="loginStatus == 0">
            <button class="button button-block button-rounded button-large" style="display: inline-block"
                    @click="openLoginTips">点击审核
            </button>
          </div>
          <div v-else>
            <router-link to="/orderCenter">
              <button class="button button-block button-rounded button-large" style="display: inline-block">点击审核
              </button>
            </router-link>
          </div>
        </div>
      </el-main>
      <el-footer>
        <div class="content" style="width: 800px; height: 30px">
          <h3>乐税宝信息科技有限公司</h3>
          <span>公安备案号：32120402000309&nbsp;&nbsp;&nbsp;</span>
          <a target="_blank" href="http://www.miitbeian.gov.cn/">苏ICP备18058100号-1</a>
          <!-- <img style="width: 20px; height: 20px" src="../assets/baianhao.png" alt=""> -->
          <br>
          <div style="height: 20px"></div>
        </div>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
  /* eslint-disable indent,indent,space-before-function-paren */

  import Login from "./user/Login"
  import Logout from "./user/Logout"

  export default {
    name: 'Enter',
    components: {Login, Logout},
    data() {
      return {
        // loginState: 0
      }
    },
    methods: {
      openLoginTips() {
        this.$notify.success({
          title: 'Info',
          message: '请先登录或注册！',
          position: 'top-left'
        })
      }
    },
    computed: {
      loginStatus() {
        return this.$store.state.loginStatus
      },
      userName() {
        return this.$store.state.userName
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1 {
    font-weight: 500;
    font-size: 76px;
  }

  h2 {
    font-weight: lighter;
    font-size: 40px;
    font-family: STSong, Microsoft YaHei, "Heiti TC", "Songti SC";
    color: #999999;
  }

  h3 {
    float: bottom;
    font-size: 20px;
    color: #666666;
  }
</style>
