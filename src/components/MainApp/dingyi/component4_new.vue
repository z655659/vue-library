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
					
					<tr class="double"><td class="double_th">担当</td><td>
						<input type="text" v-model="content.author_name"  @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">未要件分析</td><td>
						<input type="text" v-model="content.unrequire" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">要件定義ID</td><td>
						<input type="text" v-model="content.definition_id" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt ipt_double"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">exception</td><td>
						<input type="text" v-model="content.exception" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">DCU/MEUどちらの想定か</td><td>
						<input type="text" v-model="content.dcu_meu" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">状態</td><td>
						<input type="text" v-model="content.pf_status"  @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">リガー</td><td>
						<input type="text" v-model="content.pf_trigger"  @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">動作</td><td>
						<input type="text" v-model="content.pf_action" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">備考</td><td>
						<input type="text" v-model="content.remark" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">責務分担の特記事項</td><td>
						<input type="text" v-model="content.notice" @blur="modelshow($event)" @focus="focusStatus($event)"  class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">参考HAL設計書</td><td>
						<input type="text" v-model="content.rel_hal_design" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">参考ウォークスルー図</td><td>
						<input type="text" v-model="content.rel_flow_diagram" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">その他仕様（リファハード仕様等）</td><td>
						<input type="text" v-model="content.other_spec" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt"/>
						<p class="red" >输入框不能为空</p>
					</td></tr>
					<tr class="single"><td class="single_th">"リファレンスハード上での実現可否</td><td>
						<input type="text" v-model="content.implementation" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt ipt_double"/>
						<p class="red">输入框不能为空</p>
					</td></tr>
					<tr class="double"><td class="double_th">詳細分析可否</td><td>
						<input type="text" v-model="content.analysis" @blur="modelshow($event)" @focus="focusStatus($event)" class="ipt"/>
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
	        		table_title: '要件定义新建',       		 
				    "content": {
				    "author_name": "",
				    "hu_def_id": "",
				    "definition_id": "",
				    "exception": "",
				    "dcu_meu": "",
				    "pf_status": "",
				    "pf_trigger": "",
				    "pf_action": "",
				    "remark": "",
				    "notice": "",
				    "rel_hal_design": "",
				    "rel_flow_diagram": "",
				    "other_spec": "",
				    "implementation": "",
				    "analysis": "",
				    "unrequire": "",
				    "model_list":[{
				    "content": "",
				    "unique_id":"",
				    "sub_content": [{

				    }]
				    }]
				    },
					dialogVisible: false,
					//disabledInput:true,
				    ID2:this.$route.params.HU_id,
				    ID4:'',
				    ID5:''
				}	
			},
			//组件通信
			mounted(){	  
	              axios.get("http://192.168.10.13:5000/DefNewId/"+this.ID2).then(res => {
	              	console.log(res)
	              	this.content.definition_id=res.data.content.definition_id
	              	this.content.unique_id=res.data.content.unique_id
	              	this.content.hu_def_id=this.$route.params.HU_id
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
					// alert("1111111")
				  var ipt=document.getElementsByTagName("input");
				  for(var i=0;i<ipt.length;i++){
				  	  if(ipt[i].value==''){
						  ipt[i].nextSibling.nextSibling.style='display:block'
					  }
				  };
				  
		          event.preventDefault();
			      axios.post("http://192.168.10.13:5000/DEFContent",{content:this.content}).then((res) => {
			      	
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
			   	// 	axios.post("http://192.168.10.13:5000/HUContent",this.ID5).then((res) => {
		     //   			})
		     //   			.catch(function(err){
				  	// });

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
