<template>
  <div id="tree-menu">
    <el-tree :data="data" node-key='category_id' 
    	:props="defaultProps" 
    	@node-click="handleNodeClick"
    	ref="tree2"></el-tree>

  </div>
</template>
 
<script>
import axios from 'axios'
export default {
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

     },
      request: function(){
          
      }   
    },
    mounted(){

		}

}
</script>

<style scoped>
    #tree-menu {
      width: 100%;
      height: 100%;
      background-color: white;
      overflow: scroll;
      text-align: left;
    }
</style>
