<template>
	<div class="als">
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
			<tr class="single"><td class="single_th">01.1.1.1.0.0.0.0</td><td>{{msg1.definition_id}}</td></tr>
			<tr class="double"><td class="double_th">ユニークID</td><td>{{msg1.unique_id}}</td></tr>
			<tr class="single"><td class="single_th">大分類</td><td>{{msg1.major_categor}}</td></tr>
			<tr class="double"><td class="double_th">中分類(System configuration)</td><td>{{msg1.medium_catetory}}</td></tr>
			<tr class="single"><td class="single_th">小分類(Related Basic Requirements)</td><td>{{msg1.small_category}}</td></tr>
			<tr class="double"><td class="double_th">基本要件</td><td>{{msg1.base}}</td></tr>
			<tr class="single"><td class="single_th">詳細</td><td>{{msg1.detail}}</td></tr>
			<tr class="double"><td class="double_th">関連基本要件</td><td>{{msg1.rel_requirement}}</td></tr>
			<tr class="single"><td class="single_th">DCU/MEUどちらの想定か</td><td>{{msg1.dcu_meu}}</td></tr>
			<tr class="double"><td class="double_th">状態</td><td>{{msg1.pf_status}}</td></tr>
			<tr class="single"><td class="single_th">トリガー</td><td>{{msg1.pf_trigger}}</td></tr>
			<tr class="double"><td class="double_th">動作</td><td>{{msg1.pf_action}}</td></tr>
		</table>
		<form>
			<label><h4 class="h4_form">H/U--</h4></label>
				<table class="table1" border="0" cellspacing="0" cellpadding="0">
					<tr class="single"><td class="single_th">担当者</td><td>
						<input type="text" v-model="msg2.author_name" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">TAGL要件定義ID</td><td>
						<input type="text" v-model="msg2.definition_id"  @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">ユニークID</td><td>
						<input type="text" v-model="msg2.unique_id" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">DCU/MEUどちらの想定か(System configuration)</td><td>
						<input type="text" v-model="msg2.dcu_meu" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">状態(Related Basic Requirements)</td><td>
						<input type="text" v-model="msg2.pf_status" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">トリガー</td><td>
						<input type="text" v-model="msg2.fp_trigger" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">動作</td><td>
						<input type="text" v-model="msg2.pf_action"  @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">シーケンス図</td><td>
						<input type="text" v-model="msg2.seq_diagram"  @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">アプリケーション</td><td>
						<input type="text" v-model="msg2.application" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">kernel</td><td>
						<input type="text" v-model="msg2.kernel" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">systemd</td><td>
						<input type="text" v-model="msg2.systemd" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">補足参照仕様書</td><td>
						<input type="text" v-model="msg2.supple_spec" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">未検証</td><td>
						<input type="text" v-model="msg2.uncheck" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">備考</td><td>
						<input type="text" v-model="msg2.remark" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red" >输入框不能为空</p>
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
			name: 'als',
	        data(){
	        	return{
	        		table_title: '要件分析',       	
					dialogVisible: false,
					disabledInput:true,
				    ID:this.$route.params.DEF_id,
				    ID2:this.$route.params.HU_id,
				    //old_als_id:this.$route.params.DEF_id,
				    msg1:{},
				    msg2:{}
				}	
			},
			//组件通信
			mounted(){	  
	              axios.get("http://192.168.10.13:5000/DEFPostInfo/"+this.ID).then(res => {
	               	this.msg1=res.data.content
	               	console.log(res,'这是内容')
	              })  
	              axios.get("http://192.168.10.13:5000/AnalysisContent/"+this.ID).then(res => {
	               	this.msg2=res.data.content
	               	//console.log(res,'这是内容')
	              }) 
	   		  },
			methods:{
				edit(){
					this.disabledInput=false
				},
				cancel(){
	               	this.msg2=''
				 	axios.get("http://192.168.10.13:5000/AnalysisContent/"+this.ID).then(res => {
	                	this.msg2=res.data.content
	               	}) 
	                this.disabledInput=true
				},
				modelshow(event) {
//					console.log(event.path[0].nextSibling);
					if(event.target.value==''){
						//console.log(event.target.nextSibling)
						event.target.nextSibling.nextSibling.style='display:block'
					}
				},
				focusStatus(event) {
					event.target.nextSibling.nextSibling.style='display:none'
				},
				submitForm(event) {
				  //console.log(event.target);
				  var ipt=document.getElementsByTagName("input");
				  for(var i=0;i<ipt.length;i++){
				  	  //console.log(ipt[i].value);
				  	  if(ipt[i].value==''){
						  ipt[i].nextSibling.nextSibling.style='display:block'
					  }
				  };
				  console.log(this.msg2);
		          event.preventDefault();
		          //console.log(this.content,this.ID2,this.ID,this.ID3,'提交信息发送的id')
			      axios.post("http://192.168.10.13:5000/AnalysisContent",{
			      		content:this.msg2,
			      		HU_id:this.ID2,
			      		ALS_id:this.ID,
			      		UN_id:this.ID3,
			      		//old_als_id:this.msg1.definition_id
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
//			   		console.log(this.content,this.ID2,this.ID+this.ID3);
			   		axios.get("http://192.168.10.13:5000/AnalysisDelete/"+this.msg1.definitions_id).then((res) => {
			   			alert("del成功")
		       			})
		       			.catch(function(err){
				  	});
					console.log(this.ID,'删除发送的参数')
				  	//this.$router.go(-1);
				  	this.$router.push('/MainApp/ARL') 
				  	console.log("成功跳转")
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
