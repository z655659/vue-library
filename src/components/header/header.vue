<template>
  <div id='header'>
          <!-- <div id='aa'>按钮navTree展开</div> -->
      <ul>
          <li @:click='show'>
              specification
            <img src="../../assets/img/selected.png" alt="下拉框">              
         </li>
          <li>
              <input type="text" placeholder="search catalog">
              <img src="../../assets/img/search2.png" alt="搜索框">
          </li>
      </ul>

      <div id="loginout">
          <img src="../../assets/img/exits2.png" alt="注销">
          <span>loginout</span>
      </div>

      <div id="hidden">
        <router-link to='/ARL'>
            <div id ='ARL' class='item' v-on:click='request'>
                ARL
            </div>
        </router-link>

        <router-link to='/HU'>
            <div id='HU' class='item'>
                HU
            </div>
        </router-link>
      </div>

     
        <!-- <div id='loginout'>
            loginout
        </div> -->
  </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name: 'header',
        data: function() {
            return{
                arlData: {}
            }
        },
        methods: {
            request: function(){
                axios.get('http://192.168.10.13:5000/ARLCategory')
                .then(response=> {
                //console.log(response);
                // console.log(response.arlData)
                 this.arlData  = response.data;
                 //this.$store.bigState = response.data;
                // console.log(this.$store.bigState)
                //console.log(this.arlData)
                })
                .catch(function(error) {
                console.log(error)
                })
            },
            show: function(){
                var flag = false;
                if(flag){
                    document.getElementById('hidden').style.display='block';
                }else{
                    document.getElementById('hidden').style.display='none';                    
                }
            },
            showTree: function(){
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

    #loginout {
        position: absolute;
        left: 1720px;
        top: 20px;
        color: #867e4f; 
    }
    #loginout img{
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
