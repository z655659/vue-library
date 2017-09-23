<template>
	<div id='header'>
		<ul class='headul'>
          <!--<router-link></router-link>-->
          <li class='headli'>
				<el-select v-model="value" placeholder="ARL" @change="mm">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value"
				      >
				    </el-option>
				 </el-select>	
        </li>
        <li class='headli'>
            <input type="text" placeholder="search catalog">
            <img src="../../assets/img/search2.png" alt="搜索框">
         </li>
      	</ul>
		<router-link to='/login'>
			<div id="logout">
	          <img src="../../assets/img/exits2.png" alt="注销">
	          <span>logout</span>
	      </div> 
		</router-link>
	      
	</div>
</template>

<script>
	export default {
		 data() {
	      return {
	        options: [{
	          value: '/MainApp/ARL',
	          label: 'ARL'
	        }, {
	          value: '/MainApp/HU',
	          label: 'H/U'
	        }, {
	          value: '/MainApp/dingyi',
	          label: '事件定义'
	        }, {
	          value: '/MainApp/fenxi',
	          label: '事件分析'
	        }],
	        value: ''
	      }
	    },
	    methods: {
	    	mm(value){
	    		console.log(value)
	    		this.$router.push(value)
	    	}
	    }
	}
</script>

<style scoped>
	 *{
	    margin: 0;
	    padding: 0;
	    box-sizing: border-box;
    }
    #header{
        position:absolute;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        height: 73px;
        background-color: rgb(54, 54, 54);
        display: flex;
        flex-flow: 1;
        z-index: 999;
    }
    #header .item{
        text-align: center;
    }
    .headul {
        /* list-style: none; */
        position: absolute;
        left: 59px;
        top: 26px;
        width: 343px;
        height: 23px;
        border-left: solid 1px #71713b;
        border-right: solid 1px #71713b;
        color: #867e4f; 
     }
    .headli{
        list-style: none;
        float: left;
        color: rgb(204, 164, 59);
        font-size: 16px;
        text-align: center;
        width: 50%;
        height: 16px;
        margin-top:2px;
		color: white;      
        
    }
    .headli a{
        color: #867e4f; 
    }
    .headli:first-child{
        border-right: 1px solid #867132;
    }
    ul img {
        vertical-align: middle;
        width: 20px;
        height: 20px;
    }
    ul input {
        background-color: rgb(54, 54, 54);
        border: none;
        outline: medium;
        color: rgb(204, 164, 59);       
        width: 122px; 
    }
    ul input::-webkit-input-placeholder {
        color: #867132;
    }

    #logout {
        position: absolute;
        right: 0px;
        top: 20px;
        color: #867e4f; 
    }
    #logout img{
        width: 30px;
        height: 30px;
    }
    #hidden{
        /* display: none; */
        position: absolute;
        left: 60px;
        top: 50px;
        width: 166px;
        height: 182px; 
        background-color: white;
    }
</style>