<template>
	<div class="new">
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
		<form>
			<label><h4 class="h4_form">H/U--</h4></label>
				<table class="table1" border="0" cellspacing="0" cellpadding="0">
					<tr class="single"><td class="single_th"></td><td>
						<input type="text" v-model="content.arl_id" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">H/U要件定義ID</td><td>
						<input type="text" v-model="content.hu_id"  @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">ユニークID</td><td>
						<input type="text" v-model="content.unique_id" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">システム構成(System configuration)</td><td>
						<input type="text" v-model="content.system_conf" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt ipt_double"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">関連基本要件(Related Basic Requirements)</td><td>
						<input type="text" v-model="content.rel_requirement" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">除外</td><td>
						<input type="text" v-model="content.exception" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">DCU-状態</td><td>
						<input type="text" v-model="content.dcu_status"  @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">DCU-トリガー</td><td>
						<input type="text" v-model="content.dcu_trigger"  @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">DCU-動作</td><td>
						<input type="text" v-model="content.dcu_action" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">MEU-状態</td><td>
						<input type="text" v-model="content.meu_status" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">MEU-トリガー</td><td>
						<input type="text" v-model="content.meu_trigger" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">MEU-動作</td><td>
						<input type="text" v-model="content.meu_action" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">H/U分類ID</td><td>
						<input type="text" v-model="content.hu_category_id" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">備考</td><td>
						<input type="text" v-model="content.remark" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">001 システム仕様書--章Chapter/Section or ページ番号 Page No</td><td>
						<input type="text" v-model="content.sys_spec_chapter" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">003 共通アプリ?AVC-LAN仕様書--章　Chapter/Section or ページ番号 Page No</td><td>
						<input type="text" v-model="content.common_chapter" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">シーケンス仕様 Sequence spec.</td><td>
						<input type="text" v-model="content.common_seq_spec" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">シーケンス番号Sequence No.</td><td>
						<input type="text" v-model="content.common_seq_no" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">コマンドガイドCommand guide</td><td>
						<input type="text" v-model="content.common_cmd_guide"  @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">OPC</td><td>
						<input type="text" v-model="content.common_opc" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">318 DCU-MEU間連携仕様書DCU-MEU interaction spec.--機能配置?機能仕様 Function location and spec.</td><td>
						<input type="text" v-model="content.inter_loc_spec" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt ipt_double"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">章Chapter/Section or ページ番号 Page No</td><td>
						<input type="text" v-model="content.inter_chapter" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">ドキュメント名 ※トヨタ仕様の場合は仕様番号も記載する事</td><td>
						<input type="text" v-model="content.other_chapter" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">ドキュメント名 ※トヨタ仕様の場合は仕様番号も記載する事</td><td>
						<input type="text" v-model="content.other_doc"  @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
				</table>
		</form>
		<div class="fixed">
			<!--<button type="submit" @click='edit' class="edit" @change="edit">编辑</button>-->
			<!--<button type="submit" @click='cancel' class="cancel">取消</button>-->
			<button type="submit" @click='submitForm($event)' class="save">保存</button>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import bus from '../../../assets/js/event.js'
	export default {
			name: 'new',
	        data(){
	        	return{
	        		table_title: '新建',       		 
				    content: {
				    	"arl_id": "",
						"hu_id":"",
						"unique_id": "",
						"system_conf": "",
						"rel_requirement": "",
						"exception": "",
						"dcu_status": "",
						"dcu_trigger": "",
						"dcu_action": "",
						"meu_status": "",
						"meu_trigger": "",
						"meu_action": "",
						"hu_category_id": "",
						"remark": "",
						"sys_spec_chapter": "",
						"common_chapter": "",
						"common_seq_spec": "",
						"common_seq_no": "",
						"common_cmd_guide": "",
						"common_opc": "",
						"inter_loc_spec": "",
						"inter_chapter": "",
						"other_chapter": "",
						"other_doc": ""
				    },
					dialogVisible: false,
					//disabledInput:true,
				    ID2:this.$route.params.ARL_id,
				    ID4:'',
				    ID5:''
				}	
			},
			//组件通信
			mounted(){	  
	              axios.get("http://192.168.10.13:5000/HuNewId/"+this.ID2).then(res => {
	              	this.content.hu_id=res.data.content.hu_id
	              	this.content.unique_id=res.data.content.unique_id
	              	this.content.arl_id=this.$route.params.ARL_id
//	               	this.ID4=res.data.content.hu_id;
//	               	this.ID5=res.data.content.unique_id
//	               	console.log(this.content.hu_id,this.content.unique_id,this.content.arl_id)
					console.log(this.ID2)
	              }) 
	   		  },
			methods:{
				modelshow(event) {
					if(event.target.value==''){
						event.target.nextSibling.nextSibling.style='display:block'
					}
				},
				focusStatus(event) {
					event.target.nextSibling.nextSibling.style='display:none'
				},
				submitForm(event) {
					alert("1111111")
				  var ipt=document.getElementsByTagName("input");
				  //console.log(ipt);
				  for(var i=0;i<ipt.length;i++){
				  	  if(ipt[i].value==''){
						  ipt[i].nextSibling.nextSibling.style='display:block'
					  }
				  };
				  
		          event.preventDefault();
			      axios.post("http://172.26.11.56:5000/HUContent",{content:this.content}).then((res) => {
			      	
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
			   		axios.post("http://172.26.11.56:5000/HUContent",this.ID5).then((res) => {
		       			})
		       			.catch(function(err){
				  	});
					//console.log(this.content,this.ID2,this.ID4,this.ID5,'删除发送的参数')
				  	this.$router.push('/MainApp/ARL') 
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
  /*.edit{
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
  }*/
  /*.cancel{
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
  }*/
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
