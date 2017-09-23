<template>
	<div class="hu">
		<h2>{{table_title}}</h2>
		<h4>
			ARL要件
			<el-dialog title="删除HU" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose" :modal-append-to-body="false" style="top:42%">
				<span style="margin-left: 0;">确认删除？</span>
  				<span slot="footer" class="dialog-footer">
    				<el-button @click="dialogVisible = false">取 消</el-button>
    				<el-button @click="de">确 定</el-button>
  				</span>
			</el-dialog>
			<span class="del" @click='backHU'>返回</span>
		</h4>
		<el-button type="text" @click="dialogVisible = true" class="del_hu">删除HU</el-button>
		<table class="table1" border="0" cellspacing="0" cellpadding="0">
			<tr class="single"><td class="single_th">hu_id</td><td>{{msg1.hu_id}}</td></tr>
			<tr class="double"><td class="double_th">大分類</td><td>{{msg1.major_categor}}</td></tr>
			<tr class="single"><td class="single_th">中分類</td><td>{{msg1.medium_catetory}}</td></tr>
			<tr class="double"><td class="double_th">小分類</td><td>{{msg1.small_category}}</td></tr>
			<tr class="single"><td class="single_th">詳細(Related Basic Requirements)</td><td>{{msg1.detail}}</td></tr>
			<tr class="double"><td class="double_th">関連基本要件</td><td>{{msg1.rel_requirement}}</td></tr>
			<tr class="single"><td class="single_th">DCU-状態</td><td>{{msg1.dcu_status}}</td></tr>
			<tr class="double"><td class="double_th">DCU-トリガー</td><td>{{msg1.dcu_trigger}}</td></tr>
			<tr class="single"><td class="single_th">トリガー</td><td>{{msg1.meu_trigger}}</td></tr>
			<tr class="double"><td class="double_th">MEU-状態</td><td>{{msg1.meu_status}}</td></tr>
			<tr class="single"><td class="single_th">MEU-トリガー</td><td>{{msg1.meu_trigger}}</td></tr>
			<tr class="double"><td class="double_th">MEU-動作</td><td>{{msg1.meu_action}}</td></tr>
			<tr class="single"><td class="single_th">基本要件</td><td>{{msg1.base}}</td></tr>
		</table>
		<form>
			<label><h4 class="h4_form">H/U--</h4></label>
				<table class="table1" border="0" cellspacing="0" cellpadding="0">
					<tr class="single"><td class="single_th"></td><td>
						<input type="text" v-model="msg2.arl_id" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">H/U要件定義ID</td><td>
						<input type="text" v-model="msg2.hu_def_id"  @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">要件定義ID</td><td>
						<input type="text" v-model="msg2.definition_id" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">exception</td><td>
						<input type="text" v-model="msg2.exception" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">DCU/MEUどちらの想定か</td><td>
						<input type="text" v-model="msg2.dcu_meu" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">状態</td><td>
						<input type="text" v-model="msg2.pf_status" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">リガー</td><td>
						<input type="text" v-model="msg2.pf_trigger"  @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">動作</td><td>
						<input type="text" v-model="msg2.pf_action"  @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">備考</td><td>
						<input type="text" v-model="msg2.remark" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">責務分担の特記事項</td><td>
						<input type="text" v-model="msg2.notice" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">参考HAL設計書</td><td>
						<input type="text" v-model="msg2.rel_hal_design" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">参考ウォークスルー図</td><td>
						<input type="text" v-model="msg2.rel_flow_diagram" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">その他仕様（リファハード仕様等</td><td>
						<input type="text" v-model="msg2.other_spec" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">リファレンスハード上での実現可否</td><td>
						<input type="text" v-model="msg2.implementation" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">詳細分析可否</td><td>
						<input type="text" v-model="msg2.analysis" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">未要件分析</td><td>
						<input type="text" v-model="msg2.unrequire" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">担当</td><td>
						<input type="text" v-model="msg2.author_name" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
				</table>
		</form>
		<div class="fixed">
			<button type="submit" @click='edit' class="edit" @change="edit">编辑</button>
			<button type="submit" @click='cancel' class="cancel">取消</button>
			<button type="submit" @click='submitForm($event)' class="save" v-bind:disabled="disabledInput">保存</button>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import bus from '../../../assets/js/event.js'
	export default {
			name: 'hu',
	        data(){
	        	return{
	        		table_title: '要件定義書',       		 
					dialogVisible: false,
					disabledInput:true,
				    ID2:this.$route.params.HU_id,
				    ID:this.$route.params.DEF_id,
				    // ID2:this.$route.params.ARL_id,
				    // ID3:this.$route.params.UN_id,
				    hu_def_id:this.$route.params.DEF_id,
				    msg1:{},
				    msg2:{}
				}	
			},
			//组件通信
			mounted(){	 
					console.log(this.ID2,"这是HU",this.ID,'这是DEF') 
	              axios.get("http://192.168.10.13:5000/HUPostInfo/"+this.ID2).then(res => {
	              	console.log(res)
	               	this.msg1=res.data.content
	               	console.log(this.msg1,'显示表格')
	              })  
	              axios.get("http://192.168.10.13:5000/DEFContent/"+this.ID).then(res => {
	               	this.msg2=res.data.content
	               	              }) 
	   		  },
			methods:{
				edit(){
					this.disabledInput=false;
				},
				cancel(){
				  this.msg2=''
				 	axios.get("http://192.168.10.13:5000/DEFContent/"+this.ID).then(res => {
	              this.msg2=res.data.content
	               	              }) 
	              this.disabledInput=true
				},
				modelshow(event) {
					if(event.target.value==''){
						event.target.nextSibling.nextSibling.style='display:block'
					}
				},
				focusStatus(event) {
					event.target.nextSibling.nextSibling.style='display:none'
				},
				submitForm(event) {
				  var ipt=document.getElementsByTagName("input");
				  for(var i=0;i<ipt.length;i++){
				  	  if(ipt[i].value==''){
						  ipt[i].nextSibling.nextSibling.style='display:block'
					  }
				  };
				  // console.log(this.msg2);
		          event.preventDefault();

		          console.log(this.msg2,"编辑后的值",this.ID2,'HU_id',this.ID,'DEF_id',this.hu_def_id,'old_def_id')
		          // this.msg2.hu_def_id
			      axios.post("http://172.26.11.56:5000/DEFContent",{
			      		content:this.msg2,
			      		HU_id:this.ID2,
			      		DEF_id:this.ID,
			      		old_def_id:this.msg1.hu_id
			      }).then((res) => {
			      	}).catch(function(err){
				        console.log(err)
				  })  
				
		       },
		       handleClose(done) {
		       		console.log('进入回调')
		       		done();
				},
			   de:function(){
			   		this.dialogVisible = false;
				   		axios.get("http://172.26.11.56:5000/DEFDelete/"+this.msg1.hu_id).then((res) => {
			       			})
			       			.catch(function(err){
					  	});
				  	// this.$router.push('/MainApp/ARL') 
				  	// console.log("成功跳转")
			   },
		       backHU(){
		       	
		       }
			}
	        
		}		
		
</script>

<style scoped>
	body{
		height: 100%;
	}
  h2{
   	 margin: 2% 0;
   	 text-align: center;
   }
   h4{
   	 margin: 2% 0 0 -45%;
   	 font-weight:normal;
   }
  td{
  	width: 50%;
  	text-align: center;
  	line-height: 50px;
  	height: 50px;
  	word-break: break-all;	/*强制换行*/
  }
  .table1{
  	border-left: 20px solid #cda43b;
  }
  table{
  	width: 80%;
  	margin: 2% auto;
  }
  .single{
  	background: #979692;
  	color: #3a3f42;
  }
  .double{
  	background: #83827d;
  	color: white;
  }
  .single_th{
  	background: #595959;
  	color: #cda43b;
  }
  .double_th{
  	background: #363636;
  	color: #cda43b;
  }
  .ipt{
  	width: 100%;
    height: 47px;
    margin: auto;
    position: relative;
    background: none;
    border: 0;
    text-align: center;
    border: 0 none;
    outline: none;
  }
  .fixed{
  	width: 60px;
    height: 22%;
    position: fixed;
    right: 5%;
    bottom: 40%;
    /*border: 1px solid red;*/
  }
  .edit{
  	width: 60px;
    height: 60px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    background: #cda43b;
    opacity: 0.5;
    border: 0 none;
    outline: none;
  }
  .cancel{
  	width: 60px;
    height: 60px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    background: #cda43b;
    margin: 25% 0;
    opacity: 0.5;
    border: 0 none;
    outline: none;
  }
  .save{
  	width: 60px;
    height: 60px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    background: #cda43b;
    opacity: 0.5;
    border: 0 none;
    outline: none;
  }
  .edit:hover,.cancel:hover,.save:hover{
	opacity: 1;
	color: white;
	}
	.edit{
		margin-right: 20%;
	}
  .red{
	color: red;
    position: relative;
    top: -7px;
    margin: auto;
    font-size: 14px;
    display: none;
    line-height: 0;
    width: 120px;
  }
	.del{
		color: red;
	    font-size: 14px;
	    background: #979692;
	    border-radius: 50%;
	    cursor: pointer;
	}
	.ipt_double{
		color: white;
	}
	/*.h4_form{
		position: relative;
		left: -25%;
	}  */
	.del_hu{
		color: red;
		position: relative;
		left: 20%;
	}
</style>
