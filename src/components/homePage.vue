<template>
	<div id="homepage">
		<!--头部组件-->
		
		<div id="header">
			<div id="brand">
				<img src="../assets/img/zhizhu.png" alt="商标"/>
			</div>
			<div id="nav">
				<el-menu :default-active="activeIndex2" class="el-menu-demo header_li" mode="horizontal" @select="handleSelect" :router="true">														
					<el-submenu index="1" >
				    	<template slot="title">我的工作</template>
				    	<el-menu-item index="1-1" @click='myARL'>我的ARL</el-menu-item>	
				   </el-submenu>
				   
				  	<el-submenu index="2" >
			    		<template slot="title">所有工作</template>
			    		<el-menu-item index="2-1"  @click='allARL'>所有ARL</el-menu-item>
			 		 </el-submenu>
				   	<el-menu-item index="3" :route="{path:'/homepage/USER'}">用户管理</el-menu-item>
				</el-menu>
			</div>
			
			<div id="logout">
				<el-button @click='logout'>注销</el-button>
			</div>	
					
		</div>
		<div id="homepageView">
			<!--<keep-alive>-->
				<router-view v-bind:work=workType></router-view>
			<!--</keep-alive>-->

		</div>
		<!--尾部组件-->
		<!--<div id="footer">
			
		</div>-->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				 activeIndex2: '1',
				 workType: ''
			}
		},
		methods: {
	        handleSelect(key, keyPath) {
	      	    event.preventDefault();
//			    if(key ==3){
//					if(window.confirm('确定要退出吗?')){
//						this.$router.push('/homepage')
//						console.log('111')
//					}
//				}
	        },
	        logout() {
		        this.$confirm('此操作将退出登录, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          this.$message({
		            type: 'success',
		            message: '退出成功!'
		          })
		          this.$router.push('/login')
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消退出'
		          })
		        });
		    },
		    allARL() {
		    	window.sessionStorage.setItem('workType','all')
		    	this.workType = window.sessionStorage.getItem('workType')
//		    	:route="{path:'/homepage/ARL'}"
		    	this.$router.push('/homepage/ARL')
		    	
		    },
		    myARL() {
		    	window.sessionStorage.setItem('workType','my')
		    	this.workType = window.sessionStorage.getItem('workType')
//		    	:route="{path:'/homepage/mywork/'
		    	this.$router.push('/homepage/mywork/')
		    	
		    }
	    }
	}
</script>

<style scoped>
	#homepage{
		position: absolute; 
		width: 100%;
		height: 100%;
	}
	#header{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		width: 100%;
		height:60px ;
		background-color: #eef1f6;
		z-index:100;
	}
	#homepageView{
		position: absolute;
		left: 0;
		right: 0;
		top: 60px;
		bottom: 0px;
		overflow: auto;
		width: 100%;
		background: darkcyan;
	}
	#footer{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		background-color: aquamarine;
		z-index:99;
	}
	#brand{
		position: absolute;
		left: 10px;
		width: 60px;
		height: 60px;
	}
	#brand img{
		width: 60px;
		height: 60px;
	}
	#logout{
		position: absolute;
		padding-top: 12px;
		right: 10px;
		height: 60px;
	}
	#nav{
		position: absolute;
		right: 70px;
		top: 0;
		/*width: 323px;*/
		height: 60px;
	}
	.liqq{
		float: right;
		right:70px;
	}
</style>