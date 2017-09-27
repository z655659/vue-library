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
			<tr class="single"><td class="single_th">ARLID</td><td>{{msg1.arl_id}}</td></tr>
			<tr class="double"><td class="double_th">大分類</td><td>{{msg1.major_categor}}</td></tr>
			<tr class="single"><td class="single_th">中分類</td><td>{{msg1.medium_catetory}}</td></tr>
			<tr class="double"><td class="double_th">小分類(System configuration)</td><td>{{msg1.small_category}}</td></tr>
			<tr class="single"><td class="single_th">詳細(Related Basic Requirements)</td><td>{{msg1.detail}}</td></tr>
			<tr class="double"><td class="double_th">基本要件</td><td>{{msg1.base}}</td></tr>
			<tr class="single"><td class="single_th">転記してきた要件</td><td>{{msg1.req_post}}</td></tr>
			<tr class="double"><td class="double_th">備考、不明点</td><td>{{msg1.remark}}</td></tr>
			<tr class="single"><td class="single_th">状態</td><td>{{msg1.status}}</td></tr>
			<tr class="double"><td class="double_th">トリガー</td><td>{{msg1.trigger}}</td></tr>
			<tr class="single"><td class="single_th">動作</td><td>{{msg1.action}}</td></tr>
		</table>
		<form>
			<label><h4 class="h4_form">H/U--</h4></label>
				<table class="table1" border="0" cellspacing="0" cellpadding="0">
					<tr class="single"><td class="single_th"></td><td>
						<input type="text" v-model="msg2.arl_id" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">H/U要件定義ID</td><td>
						<input type="text" v-model="msg2.hu_id"  @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">ユニークID</td><td>
						<input type="text" v-model="msg2.unique_id" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">システム構成(System configuration)</td><td>
						<input type="text" v-model="msg2.system_conf" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">関連基本要件(Related Basic Requirements)</td><td>
						<input type="text" v-model="msg2.rel_requirement" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">除外</td><td>
						<input type="text" v-model="msg2.exception" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">DCU-状態</td><td>
						<input type="text" v-model="msg2.dcu_status"  @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">DCU-トリガー</td><td>
						<input type="text" v-model="msg2.dcu_trigger"  @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">DCU-動作</td><td>
						<input type="text" v-model="msg2.dcu_action" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">MEU-状態</td><td>
						<input type="text" v-model="msg2.meu_status" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">MEU-トリガー</td><td>
						<input type="text" v-model="msg2.meu_trigger" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">MEU-動作</td><td>
						<input type="text" v-model="msg2.meu_action" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">H/U分類ID</td><td>
						<input type="text" v-model="msg2.hu_category_id" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">備考</td><td>
						<input type="text" v-model="msg2.remark" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">001 システム仕様書--章Chapter/Section or ページ番号 Page No</td><td>
						<input type="text" v-model="msg2.sys_spec_chapter" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">003 共通アプリ?AVC-LAN仕様書--章　Chapter/Section or ページ番号 Page No</td><td>
						<input type="text" v-model="msg2.common_chapter" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">シーケンス仕様 Sequence spec.</td><td>
						<input type="text" v-model="msg2.common_seq_spec" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">シーケンス番号Sequence No.</td><td>
						<input type="text" v-model="msg2.common_seq_no" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">コマンドガイドCommand guide</td><td>
						<input type="text" v-model="msg2.common_cmd_guide"  @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">OPC</td><td>
						<input type="text" v-model="msg2.common_opc" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">318 DCU-MEU間連携仕様書DCU-MEU interaction spec.--機能配置?機能仕様 Function location and spec.</td><td>
						<input type="text" v-model="msg2.inter_loc_spec" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">章Chapter/Section or ページ番号 Page No</td><td>
						<input type="text" v-model="msg2.inter_chapter" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">ドキュメント名 ※トヨタ仕様の場合は仕様番号も記載する事</td><td>
						<input type="text" v-model="msg2.other_chapter" @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">ドキュメント名 ※トヨタ仕様の場合は仕様番号も記載する事</td><td>
						<input type="text" v-model="msg2.other_doc"  @blur="modelshow($event)" @focus="focusStatus($event)" v-bind:disabled="disabledInput" class="ipt"/>
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
	        		table_title: 'H/U要件定義書',       		 
				    //content: {},
					dialogVisible: false,
					disabledInput:true,
				    ID:this.$route.params.HU_id,
				    ID2:this.$route.params.ARL_id,
//				    ID3:this.$route.params.UN_id,
				    old_hu_id:this.$route.params.HU_id,
				    msg1:{},
				    msg2:{}
				}	
			},
			//组件通信
			mounted(){	  
					//console.log(this.ID,'这是id')
					//console.log(this.ID2,'这是id2')
	              axios.get("http://192.168.10.13:5000/ARLPostInfo/"+this.ID2).then(res => {
	               	this.msg1=res.data.content
	               	console.log(res,'这是内容')
	              })  
	              axios.get("http://192.168.10.13:5000/HUContent/"+this.ID).then(res => {
	               	this.msg2=res.data.content
	               	//console.log(res,'这是内容')
	              }) 
	   		  },
			methods:{
				edit(){
					this.disabledInput=false
				},
				cancel(){
					this.content="";
//					alert('1111')
					console.log(this.ID2)
					axios.get("http://192.168.10.13:5000/HUContent/"+this.ID).then(res => {
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
			      axios.post("http://192.168.10.13:5000/HUContent",{
			      		content:this.msg2,
			      		ARL_id:this.ID2,
			      		HU_id:this.ID,
			      		UN_id:this.ID3,
			      		old_hu_id:this.old_hu_id
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
			   		console.log(this.msg2.hu_id,"shanchu")
			   		this.dialogVisible = false;
//			   		console.log(this.content,this.ID2,this.ID+this.ID3);
			   		axios.get("http://192.168.10.13:5000/HuDelete/"+this.msg2.hu_id).then((res) => {
		       			})
		       			.catch(function(err){
				  	});
//					console.log(this.content,this.ID2,this.ID,this.ID3,'删除发送的参数')
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
