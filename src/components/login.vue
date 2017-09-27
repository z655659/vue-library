<template>
  <div>
    <div id="login">
        <div class="login_content">
            <div class="login_fl fl">
                <img src="../assets/img/zhizhu.png" alt="" class="logo">
                <h2 class="size">Welcome to SPIDER</h2>
            </div>
            <div class="login_fr fl">
                <h2 class="login_title">PLEASE SIGN IN</h2>
                <p class="value_content">
                    <span class="value_img fl"><img src="../assets/img/user.png"  alt=""></span>
                    <input type="text" placeholder="Username" class="fl Asa_user" v-model='user'>
                </p>
                <p class="value_content">
                    <span class="value_img fl"><img src="../assets/img/pwd.png"  alt=""></span>
                    <input type="password" placeholder="Password" class="fl Asa_user" v-model='pwd'>
                </p>
                <button class="sub_btn" @click="sub()">sign in</button>
            </div>
            <div class="hint" v-if="flag">
                <p class="hint_size">Incorrect username or password</p>
                <p class="hint_size">Please try again</p>
                <button class="hitn_btn" @click="al">OK</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script >
import axios from 'axios'
export default {

  name: 'app',
  data(){
    return {
       user:'',
       pwd:'',
       msg:'',
       valueup:{
          pwd:'',
          user:''
       },
       flag:false
     }
  },
   mounted(){ 
      var x= window.innerWidth;
      var h= window.innerHeight;
      var login=document.getElementById("login")
      login.style.height=h+'px';
      window.onresize = function(){
        h= window.innerHeight;
        login.style.height=h+'px';
      }
     },
     methods:{
        sub:function(){
            if(this.user&&this.pwd != ''){
                this.valueup.pwd=this.pwd;
                this.valueup.user=this.user;
                this.$router.push('/MainApp/ARL') 
                var self=this;
                console.log(this.valueup)
                axios.get('http://192.168.10.13:5000/login/1/1').then(res=>{

                   console.log(res)
                })

            }else{
                this.flag=true;
            }
        },
        al:function(){
          this.flag=false;
        }
     }
}
</script>

<style >
*{margin: 0;padding: 0}
.fl{float: left;}
.fr{float: right;}
#login{
  /* position:relative; */
  left: 0;
  top:0;
  width: 100%;
  height:100%;
  background-image: url(../assets/img/spiderlogin.jpg);
  background-size: 100% 100%;
  /* z-index: -1; */
  overflow: hidden;
}
.login_content{
  background:rgb(211,207,196);
  width:945px;
  height:586px;
  position: relative;
  z-index: 666;
  margin: 0 auto;
  margin-top: 220px
  /* top:50%; */
}
.login_fl{
  width: 385px;
  height: 510px;
  border-right: 1px solid rgb(0,0,0);
  margin-top: 38px;
  text-align: center;
}
.logo{
  margin-top: 116px;
}
.size{
  font-size:26px;
  color: rgb(137,125,94);
  margin-top: 48px;
}

.login_fr{
  margin:38px 0 0 128px;
}
.login_title{
  font-size:26px;
  color: rgb(137,125,94);
  margin-top: 110px;
}
.value_content{
  margin-top: 30px;
  overflow: hidden;
}
.value_img>img{
  /* width: 42px; */
  max-width: 100%;
  height: 42px;
}
.Asa_user{
  border: 0 none;
  height:25px;
  width: 230px;
  background-color: rgb(211,207,196);
  border-bottom: 1px solid  rgb(54,54,54);
  outline:none;
  font-family:Arial, Helvetica, sans-serif;
  line-height:10px;
  font-size: 18px;
  margin-left:10px;
  padding-left:5px;
  padding-top:17px;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
color: rgb(140,138,133); 
font-size: 18px;
} 
input:-moz-placeholder, textarea:-moz-placeholder { 
color: rgb(140,138,133); 
font-size: 18px;
} 
input::-moz-placeholder, textarea::-moz-placeholder { 
color: rgb(140,138,133); 
font-size: 18px;
} 
input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
color: rgb(140,138,133); 
font-size: 18px;
} 
.sub_btn{
  margin: 30px 0 0 52px;
  width: 216px;
  height: 50px;
  line-height: 50px;
  background-color: rgb(204,164,59);
  color:#e5e5e5;
  font-size: 18px;
  text-align: center;
  border: 0 none;
  outline:none;
  cursor: pointer;
}
.hint{
  width: 488px;
  height: 116px;
  background-color: rgba(71,79,90,0.9);
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -58px 0 0 -244px;
  z-index: 6666
}
.hint_size{
  margin-top: 8px;
  width: 100%;
  text-align: center;
  font-size:18px;
  color: rgb(204,164,59);
}
.hitn_btn{
  display: block;
  *display: block;
  width: 104px;
  height: 28px;
  margin: 0 auto;
  margin-top: 8px;
  border: 0 none;
  color: #fff;
  background-color:  rgb(204,164,59);
  outline: none;
  cursor: pointer;
}
</style>
