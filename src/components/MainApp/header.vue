<template>
	<div id='header'>
		<ul>
          <!--<router-link></router-link>-->
          <li>
             ARL
            <img src="../../assets/img/selected.png" alt="下拉框">              
         </li>
          <li>
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

<scirpt>
	
</scirpt>

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
    ul {
        /* list-style: none; */
        position: absolute;
        left: 59px;
        top: 26px;
        width: 343px;
        height: 23px;
        border-left: solid 1px #71713b;
        border-right: solid 1px #71713b;
     }
    ul li{
        list-style: none;
        float: left;
        color: rgb(204, 164, 59);
        font-size: 16px;
        text-align: center;
        width: 50%;
        height: 16px;
        margin-top:2px;
    }
    ul li:first-child{
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
        right: 10px;
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