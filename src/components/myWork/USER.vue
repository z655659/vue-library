<template>
	<div id='USER'>
		<!-- 左边标题 -->
		<div class="left">
			<ul>
				<li><el-button @click='VIP'>管理员管理</el-button></li>
				<li><el-button @click='group'>组 员 管 理 </el-button></li>
				<li><el-button @click='list'>成 员 列 表 </el-button></li>

			</ul>
			</div>
			<!-- 右边内容 -->
		<div class="right">
			<!-- 管理员管理页面 -->
		 <div id='group' class="flag group" v-if='G_flag'>
			<div class="group-one">
				<!-- 添加组 -->
					<br>
					<el-row class="demo-autocomplete">		
						<el-col :span="8" :push="4">
						   <div class="sub-title" size='large'>组名</div>
						   <el-input v-model="Group_name" placeholder="请输入内容" ></el-input>
						   
						   <el-button @click='appendG'>添加组</el-button>
						</el-col>
						<el-col :span="8"></el-col>
					</el-row>
			 	<!-- 所有组列表 -->
					<el-row>
						<el-col  :push="4" :span="16">
				    <el-table :data="Vgroups" height="280" style="width:479px">
				      <el-table-column type="index" width="100">
					  </el-table-column>
				      <el-table-column prop="group_name" label="组名" width="180">
				      </el-table-column>
				      <el-table-column label="操作" width="180">
				      <template scope="scope" >
				        <el-button
				          size="small"
				          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
				        <el-button
				          size="small"
				          type="danger"
				          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				      </template>
				      </el-table-column>
				    </el-table>
				    <!-- 分页组件 -->
				    <!-- <div class="block">
						<span class="demonstration"></span>
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="page_number" :page_sizes="[10, 20,]" :page_size="10" layout="sizes, prev, pager, next" :total="total"  >
						</el-pagination>
					</div> -->
					</el-col>
					</el-row>
						
			</div>
		 </div>
		 <!-- 组长和组员管理 -->
		 <div id='member' class="flag member" v-if='M_flag'>
			<div class="member-one">
					
				</div>
				<el-form :model="addGroupMemberForm" ref="addGroupMemberForm" label-width="100px" class="demo-dynamic">
				  <el-form-item prop="group_id" label="组名" >
				  	<el-select v-model="addGroupMemberForm.group_id" placeholder="请选择组" >
						  <el-option
						      v-for="item in Ggroups"
						      :key="item.group_id"
						      :label="item.group_name"
						      :value="item.group_id">
						  </el-option>
					</el-select>

				  </el-form-item>
				<!-- 添加组长 -->
				  <el-form-item v-for="(leader, index) in addGroupMemberForm.leaders" :label="'组长' + (index+1)" :key="leader.key" :prop="'leaders.' + index + '.user_name'" >
				  	<el-row> 
				  		<el-col :span="5">
				    		<el-select v-model="leader.user_id" placeholder="请选择组长" >
							  <el-option
								      v-for="item in members"
								      :key="item.user_id"
								      :label="item.user_name"
								      :value="item.user_id">
								  </el-option>
							  </el-select>
				    		<el-button @click.prevent="removeLeader(leader)">删除</el-button>
				   		</el-col>
					</el-row>
				  </el-form-item>
					<!-- 添加成员 -->
				  <el-form-item v-for="(member, index) in addGroupMemberForm.members" :label="'成员' + (index+1)" :key="member.key" :prop="'members.' + index + '.user_name'" >
				  	<el-row> 
				  		<el-col :span="5">
				    		<el-select v-model="member.user_id" placeholder="请选择组员" >
							  <el-option
								      v-for="item in members"
								      :key="item.user_id"
								      :label="item.user_name"
								      :value="item.user_id">
								  </el-option>
							  </el-select>
						<el-button @click.prevent="removeMember(member)">删除</el-button>
				   		</el-col>
					</el-row>
				  </el-form-item>

				  <el-form-item>
				    <el-button type="primary" @click="submitForm('addGroupMemberForm')">提交</el-button>
				    <el-button @click="addMember">新增成员</el-button>
				    <el-button @click="addLeader">新增组长</el-button>
				    <el-button @click="resetForm('addGroupMemberForm')">重置</el-button>
				  </el-form-item>
				</el-form>
				<!-- 查看组内信息 -->
				<el-table :data="GroupMember" height="280" style="width:824px">
				      <el-table-column type="index" width="100">
					  </el-table-column>
				      <el-table-column prop="role" label="身份" width="180">
				      </el-table-column>
				      <el-table-column prop="user_name" label="姓名" width="180">
				      </el-table-column>
				      <el-table-column prop="user_id" label="编号" width="180">
				      </el-table-column>
				      <el-table-column label="操作" width="180">
				      <template scope="scope" >
				        <el-button
				          size="small"
				          @click="memberEdit(scope.$index, scope.row)">编辑</el-button>
				        <el-button
				          size="small"
				          type="danger"
				          @click="memberDelete(scope.$index, scope.row)">删除</el-button>
				      </template>
				      </el-table-column>
				 </el-table><br>
				 <el-row>
				 	<el-col :span="6" :push="2">
				 		选择想要查看的组：
				 	</el-col>
				 	<el-col :span="5" >
				 		<el-select v-model="SeeGroup" placeholder="请选择组" >
						  <el-option
						      v-for="item in Ggroups"
						      :key="item.group_id"
						      :label="item.group_name"
						      :value="item.group_id">
						  </el-option>
						</el-select>
				 	</el-col>
				 	<el-col :span="11">
						<el-button @click="lookgroup">查看</el-button>
				 	</el-col>
				 </el-row>
				 
			</div>
			<!-- 成员列表 -->
			<div id="list" class="flag list" v-if='L_flag'>
				<!-- 成员Table表单 -->
				<div class="showlist">
					
					<el-table :data="members"  height="750" style="width:519px">
				      <el-table-column type="index" width="100">
				      </el-table-column>
				      <el-table-column prop="user_id" label="ID" width="100">
				      </el-table-column>
				      <el-table-column prop="user_name" label="姓名" width="180">
				      </el-table-column>
				      <el-table-column label="操作" width="120">
				      <template scope="scope" >
				        <el-button
				          size="small"
				          type="danger"
				          @click="memberDelete(scope.$index)">删除</el-button>
				      </template>
				      </el-table-column>
				    </el-table>
				</div>
			</div>
		</div>
			
		</div>
	</div>
</template>

<script>
import axios from 'axios';
	export default {
		name: 'USER',
		data(){

			return {
	        	//正常数据
	        	//两个管理的切换
				G_flag:true,
				M_flag:false,
				L_flag:false,
		        
		        state1: '',
		        state2: '',

		        addGroupMemberForm: {
			        members: [{
			           user_name: '',
			           user_id:'',
			        }],
			        leaders: [{
			           user_name: '',
			           user_id:'',
			        }],
			        group_id: ''
			    },
			      
		        //添加的组名
		       	Group_name:'',
		        //管理员页面的组列表
		        Vgroups: [
		       	{
		       		group_id:1,
		       		group_name:"Admin"
		       	},
		       	{
		       		group_id:2,
		       		group_name:"Data"
		       	},
		       	{
		       		group_id:3,
		       		group_name:"group01"
		       	}
		       	],
		        //所有的组
		       	Ggroups:[],
		       	//选择的组
		       	Groupv:'',
		       	
		       	//member中的组和所有组
		       	GroupMember:[],
		       	SeeGroup:'',
		       	
		       	page_size: 10,
				page_number: 1,
				total:'',
				//组长搜索
				members:[],
		        Group_leaders:[],
		        

      		};
		},
		create(){
			
		},
		mounted:function() {
	      
	      this.Vgroups = this.getVgroups();
	      this.Ggroups = this.getGgroups();
	      
	      this.members = this.getmembers();
	      
	    },
		methods:{
	     	VIP(){
	        	this.G_flag =true;
	        	this.M_flag =false;
	        	this.L_flag =false;
	        	this.getVgroups();
	      	},
	      	group(){
	        	this.M_flag =true;
	        	this.G_flag =false;
	        	this.L_flag =false;
	        	this.getGgroups();
	      	
	      	},
	      	list(){
	      		this.L_flag =true;
	      		this.G_flag =false;
	      		this.M_flag =false;
	      		this.getmembers();
	      	},
	      	getVgroups(){
	      		axios.get(this.Ip+"/GroupAllGroups")
	      		.then(res=>{
	      			this.Vgroups = res.data.content;
	      		})
	      	},
	      	getGgroups(){
	      		axios.get(this.Ip+"/GroupAllGroups")
	      		.then(res=>{
	      			this.Ggroups = res.data.content;
	      		})
	      	},
	      	//添加组员
	      	submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		          	axios.post(this.Ip+"/GpMemberAdd",this.addGroupMemberForm)
		          	// axios.post("http://172.26.11.98:5000/GpMemberAdd",this.addGroupMemberForm)
		            alert('添加成功!');
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		      },
		      resetForm(formName) {
		        this.$refs[formName].resetFields();
		      },
		      removeLeader(item) {
		        var index = this.addGroupMemberForm.leaders.indexOf(item)
		        if (index !== -1) {
		          this.addGroupMemberForm.leaders.splice(index, 1)
		        }
		      },
		      addLeader() {
		        this.addGroupMemberForm.leaders.push({
		          user_name: '',
		          user_id:'',
		          key: Date.now()
		        });
		      },
		      removeMember(item) {
		        var index = this.addGroupMemberForm.members.indexOf(item)
		        if (index !== -1) {
		          this.addGroupMemberForm.members.splice(index, 1)
		        }
		      },
		      addMember() {
		        this.addGroupMemberForm.members.push({
		          user_name: '',
		          user_id:'',
		          key: Date.now()
		        });
		      },

		    lookgroup(){
		      	var g_id = this.SeeGroup
		      	axios.get(this.Ip+"/GroupMembers/"+g_id)
	      		.then(res=>{
	      			this.GroupMember = res.data.content;
	      		})
		      },
		     //
			getmembers(){
				axios.get(this.Ip+"/AllUsers")
				.then(res=>{
					this.members = res.data.content;
				})
			},
			
			appendG(){
				axios.get(this.Ip+"/GroupAdd/"+this.Group_name+this.Group_leader)
				alert("添加成功");
				axios.get(this.Ip+"/GroupAllGroups")
	      		.then(res=>{
	      			this.options = res.data.content;
	      		})
				// console.log(this.options)
			},
			
			Glist(){

			},
			appendM(){

			},
			handleEdit(index, row) {
		        console.log(index, row);
		    },
		    handleDelete(index, row) {
		        console.log(index, row);
		        var id = this.options[index].group_id;
		        axios.get(this.Ip+"/GroupDelete/"+id);
		        this.$alert('删除成功', '删除提示', {
			          confirmButtonText: '确定',
			          callback: action => {
			            this.$message({
			              type: 'info',
			              message: `已经成功删除`
			            });
			          }
			        });
		        // this.$alert("删除成功");
		    },
		    memberDelete(index){
		    	// console.log(index,row);
		    var	user_id=this.members[index].user_id
		    axios.get(this.Ip+"/UserDel/"+user_id)
		    .then(res=>{
		    	alert("删除成功");
		    	getmembers();
		    })
		    },

		   
		    
		},
		
	}
</script>

<style scoped>
	#USER{
		display: flex;
		position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top:  0px;
        width: 100%;
        overflow: auto;
        z-index: 99;
        background-color: white;
	}
	body,html,li{
		margin:0;
		padding:0;
		list-style: none;
	}
	.left{
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 170px;
		border-right: 1px solid black;
	}
	.right{
		/*border: 1px solid yellow;*/
		position: absolute;
		right: 0;
		left: 170px;
		height: 100%;
		/*width: 100%;*/
	}
	.showlist{
		
	}
	.transfer{
		float: left;
		top: 50px;
		left: 10px;
	}
	.Amember{
	/*	float: right;
		right: 50px;
		top: 300px;*/
	}
	.group-one{
		
	}
	#group{
		
	}
	#member{
		
	}
	.gg{
		
	}
</style>
