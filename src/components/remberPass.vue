<style  scoped>
.m-container {
  background: url("../assets/bg.jpg");
  background-size: cover;
  height: 100%;
  min-height: 1000px;
  text-align: center;
  min-width: 420px;
}
.h200{
  height: 200px
}
.global{
  color: white;width: 500px;margin: auto;height: 300px;border:  1px solid gray;
}
.wel{
    font-size: 18px;font-weight:bold;margin: auto;width: 100px;padding: 20px 10px;
}
.mt10{
    margin-top: 10px
}
</style>
<template>
<div class="m-container">
  <div class="h200"></div>
  <div class="global">
    <div class="wel">欢迎登陆</div>
    <el-form class="mt10">
      <el-form-item>
        <el-input :maxlength="128" placeholder="用户名" style="width: 60%;" v-model="username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input :maxlength="128" placeholder="密码" type="password" style="width: 60%" v-model="password"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <br>
      <br>
      <el-button size="large" type="primary" @click="login" style="width: 60%;">登陆</el-button>
    </el-form>
  </div>
 
</div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: "",
      password: "",
      checked: true
    }
  },
  mounted() {
    this.getCookie();
  },
  methods: {
    login() {
      var vm = this
      var params = new URLSearchParams();
      params.append('username', this.username);
      params.append('password', this.password);
      axios.post("/api/v1/login/loginUser", params)
        .then(function(response) {
          if (response.data.ret == -1) {
            console.log("ret: " + response.data.ret);
            alert("用户名或密码错误！")
          } else {
            var remeberFlag;
            //判断复选框是否被勾选
            if (vm.checked == true) {
                // console.log("checked == true");
                remeberFlag = "true";
            }else {
                remeberFlag = "false";
            }
            //调用配置cookie方法,传入账号名，密码，和保存天数3个参数
            vm.setCookie(vm.username, vm.password, 7, remeberFlag);
            vm.$router.push({path:'/index'});
            console.log("username: " + response.data.data.user.username);
          }
        })
        .catch(function(error) {
          console.log("Error: " + error);
        });
    },
 
    //设置cookie
    setCookie(c_name, c_pwd, exdays, remeberFlag) {
        var exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = "remeberFlag" + "=" + remeberFlag + ";path=/;expires=" + exdate.toGMTString();
    },
 
    //读取cookie
    getCookie: function() {
        if (document.cookie.length > 0) {
            var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
            console.log(arr)
            for (var i = 0; i < arr.length; i++) {
                var arr2 = arr[i].split('='); //再次切割
                //判断查找相对应的值
                if (arr2[0] == 'userName') {
                    this.username = arr2[1]; //保存到保存数据的地方
                } else if (arr2[0] == 'userPwd') {
                    this.password = arr2[1];
                }
            }
        }
    }
  }
}
</script>
