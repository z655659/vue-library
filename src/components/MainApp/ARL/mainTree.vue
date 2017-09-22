<template>
  <div id="tree-menu">
  	<!--11
    <ul v-for="menuItem in theModel">
      <my-tree :model="menuItem"></my-tree>
    </ul>-->
    <el-tree :data="data" node-key='category_id' :props="defaultProps" @node-click="handleNodeClick"></el-tree>

  </div>
</template>
 
<script>
import myTree from './treeMenu.vue'
import axios from 'axios'
import bus from '../../../assets/js/event'
export default {
//components: {
//  myTree
//},
//data() {
//  return {
//    theModel: {}
//  }
//},
// methods: {
//    request: function(){
//        axios.get('http://192.168.10.13:5000/ARLCategory')
//        .then(response=> {
//        console.log(response);
//        this.theModel = response.data.content;
//        console.log(this.theModel);
//        })
//        .catch(function(error) {
//        console.log(error)
//        })
//    }
//},
//mounted(){
//  this.request();
//}
	data() {
      return {
        data: [],
        defaultProps: {
          children: 'sub_category_list',
          label: 'category_name'
        },
        dataid:{}
      };
    },
    methods: {
      handleNodeClick(data) {

			window.localStorage.setItem("b",data.category_id);  //设置b为"isaac"
//			var b=window.localStorage.getItem("b");  //获取b的值，字符串
//			window.localStorage.removeItem("c"); 
				console.log(window.localStorage.getItem('b'))
      	this.dataid = data.category_id
//    	localStorage.set
        bus.$emit('one','200')
//    	console.log(this.dataid)
//    	this.$store.commit('getDataid')
      	this.$router.push('/MainApp/ARL/1')
				
				// console.log("点击")
      	
      },
      request: function(){
          axios.get('http://192.168.10.13:5000/ARLCategory')
          .then(response=> {
          console.log(response);
          this.data = response.data.content;
          console.log(this.data);
          })
          .catch(function(error) {
          console.log(error)
          })
      }
    },
    mounted(){
    	this.request();
		}

}
</script>

<style scoped>
    /* #tree-menu>ul:first-child{
        padding: 0;
    } */
    #tree-menu {
      width: 20%;
      height: 100%;
      background-color: white;
      overflow: scroll;
      text-align: left;
    }
</style>
