<template>
	<div id="myWork">
		<div id="myTree">
			<el-tree :data="data" node-key='category_id' 
	    	:props="defaultProps" 
	    	@node-click="handleNodeClick"
	    	ref="tree2"></el-tree>
		</div>
		
		<div id="my_work_view">
			<!--<keep-alive>-->
				<router-view></router-view>
			<!--</keep-alive>-->
		</div>		
	</div>
</template>

<script>
 	export default{
 		props: ['work'],
		components: {
		},
		created() {
//			console.log(this.$route.path)
		},
		data(){
			return{
				data: [],
		        defaultProps: {
		          children: 'sub_category_list',
		          label: 'category_name'
		        },
		        dataid:{},
		        workStatus: ''
			}
		},
		methods: {
	      handleNodeClick(data) {
			window.sessionStorage.setItem("b",data.category_id);  //设置b为"isaac"
			this.dataid = data.category_id
			this.$store.state.user_data = data.category_id
			this.$router.push('/homepage/mywork/list')
	      },
	      request: function(){
	      	if(window.sessionStorage.getItem('workType')=='my'){
	      		this.$ajax.get(this.Ip+'/ARLUserCategory/'+window.sessionStorage.getItem('admin'))
	          	.then(response=> {
	          		this.data = response.data.content;
	          	})
	          	.catch(function(error) {
	          		console.log(error)
				})	
	      	}else{
	      		this.$ajax.get(this.Ip+'/ARLCategory')
			      .then(res=> {
			      	this.data = res.data.content;		      
			      })
			      .catch(function(error) {
			      	console.log(error)
			      })
			}       
	      },
	      getStatus (urlStr) {
	      	this.request();
		  }
	    },
	    mounted(){
    		this.request();
		},
		watch: {
//		  '$route' (to, from) {
//		  //刷新参数放到这里里面去触发就可以刷新相同界面了
//		    this.getStatus()
//		    console.log('route')
//		  }
			work(val){
					this.workStatus = val
					this.getStatus()
				}
		}
	}
</script>

<style scope>
	#myWork{
		position: relative;
		width: 100%;
		height: 100%;
		background: white;
	}
	#myTree{
		position: absolute;
		display: inline-block;
		width: 300px;
		height: 100%;
		overflow: scroll;
	}
	#my_work_view{
		position: absolute;
		left: 300px;
		right: 0;
		height: 100%;
		background-color: rgb(243,243,243);
		overflow: scroll;
	}
</style>