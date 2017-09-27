<template>
  <div id="tree-menu">
  	<!--11
    <ul v-for="menuItem in theModel">
      <my-tree :model="menuItem"></my-tree>
    </ul>-->
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
    <el-tree :data="data" node-key='category_id' 
    	:props="defaultProps" 
    	@node-click="handleNodeClick"
    	:filter-node-method="filterNode"
    	ref="tree2"></el-tree>

  </div>
</template>
 
<script>
//import myTree from './treeMenu.vue'
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
	watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
	data() {
      return {
      	filterText: '',
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
//    	console.log(this.$store.state.user_data)
//				console.log(event.target.parentNode)
					//span判断
					if(event.target.parentNode.nextSibling.childNodes.length == 0 ){
						window.localStorage.setItem("b",data.category_id);  //设置b为"isaac"
//						console.log(window.localStorage.getItem('b'))
//			var b=window.localStorage.getItem("b");  //获取b的值，字符串
//			window.localStorage.removeItem("c"); 
//				console.log(window.localStorage.getItem('b'))
      	this.dataid = data.category_id
      	this.$store.state.user_data = this.dataid;
      	console.log(this.$store.state.user_data)
//    	localStorage.set

//    	console.log(this.dataid)
//    	this.$store.commit('getDataid')
//      debugger
      	this.$router.push('/MainApp/dingyi/1')
//				bus.$emit('one','200')
					}
//  	debugger;
			
//				alert("点击")
      	
      },
      request: function(){
          this.$ajax.get('http://192.168.10.13:5000/ARLCategory')
          .then(response=> {
//        console.log(response);
          this.data = response.data.content;
//        console.log(this.data);
          })
          .catch(function(error) {
          console.log(error)
          })
      },
       filterNode(value, data) {
//     	console.log(data)
//     	console.log(value)
        if (!value) return true;
        return data.category_name.indexOf(value) !== -1;
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
