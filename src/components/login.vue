<template>
  <div>
    <div id="login">
        <div class="login_content" v-if="Login_flag">
            <div class="login_fl">
                <img src="../assets/img/zhizhu.png" alt="" class="logo">
                <h2 class="size">Welcome to SPIDER</h2>
            </div>
            <div class="login_fr">
            		<span class="Regest" @click="ToLogin" style="border-bottom: 2px solid #1D8CE0;">check me to Login</span>
                <span class="Regest" @click="Toregest">check me to Regest</span>
                <div @keyup.enter="sub()">
                	<p class="value_content">
                    <el-input v-model="user" placeholder="Username"></el-input>
	                </p>
	                <p class="value_content">
										<el-input type="password"  v-model="pwd" placeholder="Password"></el-input>
	                </p>
                </div>
                
                <el-button type="primary" @click="sub()" style="font-size: 20px;" class="el_b">sign in</el-button>
            </div>
            <div class="hint" v-if="flag">
                <p class="hint_size">Incorrect username or password</p>
                <p class="hint_size">Please try again</p>
                <button class="hitn_btn" @click="al">OK</button>
            </div>
        </div>
		<!-- 注册页面 -->
        <div class="login_content" v-if="Regest_flag">
            <div class="login_fl">
                <img src="../assets/img/zhizhu.png" alt="" class="logo">
                <h2 class="size">Welcome to SPIDER</h2>
            </div>
            <div class="login_fr">
            		<span class="Regest" @click="ToLogin">check me to Login</span>
                <span class="Regest" @click="Toregest" style="border-bottom: 2px solid #1D8CE0;">check me to Regest</span>
                <div @keyup.enter="SUB()">
                	<p class="value_content">
                    <el-input v-model="R_user" placeholder="Username"></el-input>
	                </p>
	                <p class="value_content">
	                    <el-input v-model="R_pwd" type="password"  placeholder="Password"></el-input>
	                </p>
	                <p class="value_content">
	                    <el-input v-model="REpwd" type="password"  placeholder="Re:Password"></el-input>
	                </p>
	                <p >
	                    <el-select v-model="Rgroup_id" placeholder="请选择组" class="Rselect">
	                        <el-option
	                            v-for="item in Ggroups"
	                            :key="item.group_id"
	                            :label="item.group_name"
	                            :value="item.group_id">
	                        </el-option>
	                    </el-select>
	                </p>
                </div>
                
                <el-button type="primary" @click="SUB()" style="font-size: 20px;" class="el_b">sign up</el-button>
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
       flag:false,
       Login_flag:true,
       Regest_flag:false,
       R_user:'',
       R_pwd:'',
       Rgroup_id:'',
       Ggroups:[],
       REpwd:'',

     }
  },
   mounted(){ 
      this.getGgroups();  
     },
     methods:{
        sub:function(){
            if(this.user&&this.pwd != ''){
                this.valueup.pwd=this.pwd;
                this.valueup.user=this.user;
               
             
                axios.get(this.Ip+'/login/'+this.valueup.user+'/'+this.valueup.pwd).then(res=>{
                    if(res.data.result==true){
                    		window.sessionStorage.setItem('admin',res.data.content.user_id)
                        this.$store.state.user_id = res.data.content.user_id
                    		window.sessionStorage.setItem('workType','my')
                         this.$router.push('/homepage/mywork')   
                    }else{
                         this.flag=true;
                    }
                })

            }
        },
        al:function(){
          this.flag=false;
        },
        Toregest(){
          this.Login_flag = false;
          this.Regest_flag = true;
        },
        ToLogin(){
          this.Login_flag = true;
          this.Regest_flag = false;
        },
        getGgroups(){
            axios.get(this.Ip+"/GroupAllGroups")
            .then(res=>{
              this.Ggroups = res.data.content;
            })
        },
        SUB(){
          var user = this.R_user;
          var pwd = this.R_pwd;
          var Rpwd = this.REpwd;
          var group_id = this.Rgroup_id;
          if(pwd==Rpwd){
            axios.get(this.Ip+"/register/"+group_id+"/"+user+"/"+pwd).then(res=>{
            if(res.data.result==true){
                alert("注册成功") ;
                
								ToLogin();
//              this.$router.push('/homepage') 
                }else{
                alert("用户名或密码不合规");
                }
            })
          }else{
            alert("两次输入的密码不一样");
          }
          
        }

     }
}
</script>

<style >
	*{margin: 0;padding: 0}
	.fl{float: left;}
	.fr{float: right;}
	#login {
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	}
	.login_content {
		width: 350px;
		height: 586px;
		    margin: 0 auto;
		    margin-top: 220px;
	}
	.login_fl {
		width: 350px;
		text-align: center;
		margin-left: -2px;
	}
	.logo {
	    width: 25%;
	}
	.size {
		font-size: 22px;
		color: #20A0FF;
	}
	
	.login_fr {
	    margin-top: 10px;
	    margin-right: 35px;
	}
	.login_title{
	  font-size:26px;
	  color: rgb(137,125,94);
	  margin-top: 110px;
	}
	.value_content{
	  margin-top: 30px;
		margin-left: 40px;
	}
	.value_img>img{
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
	.Regest{
		font-size: 12px;
		width: 118px;
		cursor: pointer;
		color: #1D8CE0;
		padding-bottom: 10px;
		font-style: bol;
		font-weight: bold;
		margin: 20px 0 10px 37px;
		display: inline-block;
	}
	.Rselect{
		width: 88%;
		margin: 20px 0 0px 39px;
	}
	select::-webkit-input-placeholder, option::-webkit-input-placeholder{ 
	color: rgb(140,138,133); 
	font-size: 18px;
	} 
	select:-moz-placeholder, option:-moz-placeholder { 
	color: rgb(140,138,133); 
	font-size: 18px;
	} 
	select::-moz-placeholder, option::-moz-placeholder { 
	color: rgb(140,138,133); 
	font-size: 18px;
	} 
	select:-ms-input-placeholder, option:-ms-input-placeholder { 
	color: rgb(140,138,133); 
	font-size: 18px;
	}
	.value_content .el-input__inner {
		border: 1px solid #bfcbd9;
	}
	.login_fr .el-button {
			width: 88%;
	    margin-top: 30px;
	    margin-left: 40px;
	}
</style>
