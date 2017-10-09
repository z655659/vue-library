<template>
	<div id="myWorkChildren2">
		<div class="Asa_content" v-for="(item,index) in list">
			<!-- 查看ARL -->
			<div class="Asa_arl fl">
				<h4 class="arl_size" title="ARL要件转记">ARL要件转记</h4>
				<el-button type="text" size="small" class="arl_btn">查看</el-button>
			</div>
			<!-- HU -->
			<div class="Asa_Hu fl">
				<h4 class="arl_size" title="HU">HU</h4>
				<span class="Hu_Id">ID: <span class="HU_size" :title="item.hu_id">{{item.hu_id}}</span></span>
			</div>
			<!-- option -->
			<div class="Asa_option fl">
				<h4 class="arl_size" title="option">option</h4>
				<p class="option_size">
					<span class="option_title">AMP:</span>
						<el-input placeholder="0" class="opt_ipt"></el-input>
				</p>
				<p class="option_size">
					<span class="option_title">DSRC:</span>
						<el-input placeholder="0" class="opt_ipt"></el-input>
				</p>
				<p class="option_size">
					<span class="option_title">PCM:</span>
						<el-input placeholder="0" class="opt_ipt"></el-input>
				</p>
				<p class="option_size">
					<span class="option_title">RSE:</span>
						<el-input placeholder="0" class="opt_ipt"></el-input>
				</p>
				<p class="option_size">
					<span class="option_title opt_line">Touch Pad:</span>
						<el-input placeholder="0" class="opt_ipt"></el-input>
				</p>
				<p class="option_size">
					<span class="option_title opt_line" >Soparate Disp:</span>
						<el-input placeholder="0" class="opt_ipt"></el-input>
				</p>
				<p class="option_size_id">
					<span class="option_title_id">ID:</span>
						<el-input type="textarea" :rows="2"  placeholder="10.54.489.84.0" class="opt_ipt_id"></el-input>
				</p>
			</div>
			<!-- 关联 -->
			<div class="Asa_relevance fl">
				<h4 class="arl_size" title="关联">关联</h4>
				<div class="arl_over">  
			      <p v-for="rel in rels" class="relevance_size">  
			        <el-input placeholder="点击输入" class="rel_ipt" v-model="rel.text"></el-input>  
			        <el-button type="primary" class="rel_btn" @click="rel_del(index)">-</el-button> 
			      </p>  
				  <p class="relevance_size">   
				  	<el-button type="primary" class="rel_btn" @click="rel_add(index)">+</el-button>
			      </p> 
				</div> 
			</div>
			<!-- 责任分担 -->
			<div class="Asa_duty fl">
				<h4 class="arl_size" title="责任分担">责任分担</h4>
				
			</div>
			<!-- 模块 -->
			<div class="Asa_moudel fl">
				<h4 class="arl_size" title="模块">模块</h4>
				<el-collapse v-model="activeNames" class="arl_over">
				  <el-collapse-item title="H/U以外のＭＭ部品" name="1" @click="">
				    <div>01.遠隔ディスプレイ(WVGA Display)</div>
				  </el-collapse-item> 
				  <el-collapse-item title="H/U以外のＭＭ部品" name="2">
				    <div>20. Meter</div>
				  </el-collapse-item>
				</el-collapse>
			</div>
			<!-- 备考 -->
			<div class="Asa_remark fl">
				<h4 class="arl_size" title="备注">其他</h4>
				<el-button type="text" size="small" class="operation_btn" @click="texTarea(index)">备考</el-button>
			</div>
			<!-- delete -->
			<div class="Asa_dele fl">
				<h4 class="arl_size" title="操作">操作</h4>
				<el-button type="text" size="small" class="operation_btn" @click="copy(index)">复制添加</el-button>
				<el-button type="text" size="small" class="operation_btn" @click="Delete()">删除</el-button>
				<el-button type="text" size="small" class="operation_btn" @click="Up(index)">上移动</el-button>
				<el-button type="text" size="small" class="operation_btn" @click="Down(index)">下移动</el-button>
			</div>
		</div>
		<!-- 悬浮保存按钮 -->
		<div class="Asa_btutton">
			<el-button  class="arl_btn">保存</el-button>
			<el-button  class="arl_btn">添加</el-button>
			<el-button  class="arl_btn">返回</el-button>
			<el-button  class="arl_btn">保存返回</el-button>
		</div>
		<el-dialog title="添加DCU" :visible.sync="DCU_flag">
			<p class="DCU_size">
				<h5 class="fl">動作 :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="dcu_action" v-model="dcu_action"  class="DCU_ipt" ></el-input>
			</p>
			<p class="DCU_size">
				<h5 class="fl">状態 :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="dcu_status" v-model="dcu_status"  class="DCU_ipt" ></el-input>
			</p>
			<p class="DCU_size">
				<h5 class="fl">トリガー :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="dcu_trigger" v-model="dcu_trigger"  class="DCU_ipt" ></el-input>
			</p>
			<p class="DCU_btn">
				<el-button  size="small" class="operation_btn fr" @click='DCU_dele(index)'>删除</el-button>
				<el-button  size="small" class="operation_btn fr" @click='DCU_save(index)'>保存</el-button>
			</p>
		</el-dialog>
		<el-dialog title="添加MEU" :visible.sync="MEU_flag">
			<p class="DCU_size">
				<h5 class="fl">動作 :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="meu_action" v-model="meu_action"  class="DCU_ipt" ></el-input>
			</p>
			<p class="DCU_size">
				<h5 class="fl">状態 :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="meu_status" v-model="meu_status"  class="DCU_ipt" ></el-input>
			</p>
			<p class="DCU_size">
				<h5 class="fl">トリガー :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="meu_trigger" v-model="meu_trigger"  class="DCU_ipt" ></el-input>
			</p>
			<p class="DCU_btn">
				<el-button  size="small" class="operation_btn fr" @click='MEU_dele()'>删除</el-button>
				<el-button  size="small" class="operation_btn fr" @click='MEU_save()'>保存</el-button>
			</p>
		</el-dialog>
		<el-dialog title="备考" :visible.sync="flag" :modal-append-to-body="false">
			<el-input
			  type="textarea" :rows="10" placeholder="请输入内容"
			  v-model="remark">
			</el-input>
			<el-button class="save fr" @click="texTareasave()">保存</el-button>
		</el-dialog>
	</div>
</template>

<script>
import axios from 'axios';
	export default{
		data(){
			return{
				list:[],
				flag:false,
				DCU_flag:false,
				MEU_flag:false,
				disabled:true,
				MEU_disabled:true,
				dcu_action:"",
				dcu_status:'',
				dcu_trigger:'',
				index:0,
				index_meu:0,
				meu_action:'',
				meu_status:'',
				meu_trigger:'',
				texTarea_index:0,
				remark:'',
				rels:[
					 { text: '' }
				],
				activeNames: ['1']
			}
		},
		created:function(){
			axios.get('http://192.168.10.13:5000/ARLSubHu/10.2.3.2.3.0')
				.then(res => {
					this.list=res.data.content;
					console.log(this.list)
				})
		},
		methods:{
			Delete:function(index){
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {
				          var item = []
				          item = this.list
				          item.splice(index,1)
				          this.list= [] 
				          this.list=item
				          this.$message({
				            message: '删除成功!'
				          });
				        }).catch(() => {
				          this.$message({
				            type: 'info',
				            message: '已取消删除'
				          });          
				        });
				
			},
			Up:function(index){
				if(this.list.length>1){
					if(index!=0){
						var item=[];
						item = this.list[index]
						this.list[index] = this.list[index-1]
						this.list[index-1] = item
						var im = this.list;
						this.list = [];
						this.list = im;
					}
				}
			},
			Down:function(index){
				if(this.list.length>1){
					if(index!=this.list.length-1){
						var item=[];
						item=this.list[index]
						this.list[index]=this.list[index+1]
						this.list[index+1]=item
						var im = this.list;
						this.list = [];
						this.list = im;
					}
				}
			},
			rel_del:function(index, rows){
				this.rels.splice(index, 1);
			},
			copy:function(index){
				var item=[];
				item=this.list[index];
				item=JSON.parse(JSON.stringify(item))
				var msg =this.list;
				msg.push(item)
				this.list = [];
				this.list = msg;
				this.$message('添加成功');
			},
			texTarea(index){
				this.texTarea_index=index
				this.remark=this.list[this.texTarea_index].remark
				this.flag = !this.flag;
			},
			texTareasave(){
				this.list[this.texTarea_index].remark=this.remark
				this.flag = !this.flag;
				console.log(this.texTarea_index)
			},
			examine(index){
				this.index=index
				this.DCU_flag = !this.DCU_flag
				this.dcu_action=this.list[index].dcu_action
				this.dcu_status=this.list[index].dcu_status
				this.dcu_trigger=this.list[index].dcu_trigger
			},
			// compile(index){
			// 	this.disabled=!this.disabled
			// 	console.log(this.disabled)
			// },
			DCU_save(index){
				this.list[this.index].dcu_action=this.dcu_action
				this.list[this.index].dcu_status=this.dcu_status
				this.list[this.index].dcu_trigger=this.dcu_trigger

				console.log(this.list)
				this.DCU_flag = !this.DCU_flag
			},
			DCU_dele(index){
				this.DCU_flag = !this.DCU_flag
				this.list[this.index].dcu_action='-'
				this.list[this.index].dcu_status='-'
				this.list[this.index].dcu_trigger='-'
			},
			examine_MEU(index){
				this.index_meu=index
				this.MEU_flag = !this.MEU_flag
				this.meu_action=this.list[this.index_meu].meu_action
				this.meu_status=this.list[this.index_meu].meu_status
				this.meu_trigger=this.list[this.index_meu].meu_trigger
				// console.log(this.index_meu)
			},
			// MEU_compile(index){
			// 	this.MEU_disabled = !this.MEU_disabled
			// },
			MEU_save(index){
				this.list[this.index_meu].meu_action=this.meu_action
				this.list[this.index_meu].meu_status=this.meu_status
				this.list[this.index_meu].meu_trigger=this.meu_trigger
				this.MEU_flag = !this.MEU_flag
				// console.log(this.list)
			},
			MEU_dele(index){
				this.list[this.index_meu].meu_action='-'
				this.list[this.index_meu].meu_status='-'
				this.list[this.index_meu].meu_trigger='-'
				this.MEU_flag = !this.MEU_flag
			},
			rel_add:function(index, rows){
				this.rels.push(index)
			}

		}
	}
</script>

<style spoced>
	*{
		margin: 0;
		padding: 0;
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	a{
		text-decoration: none;
	}
	ul,li{
		list-style: none;
	}
	html,body{
		font-size:14px;
		font-family: "微软雅黑";
		color: #1f2d3d;
	}
	#myWorkChildren2{
		width: 100%;
		height: 100%;
	}
	.Asa_content{
		width:98%;
		box-shadow: 2px 1px 9px #ccc;
		height:300px;
		margin: 0 auto;
		margin-top: 30px;
	}
	.Asa_arl,.Asa_Hu{
		width:11%;
		height:300px;
		border: 1px solid #dfe6ec;
	}
	.Asa_option,.Asa_relevance,.Asa_moudel{
		width:14%;
		height:300px;
		border: 1px solid #dfe6ec;
	}
	.Asa_duty{
		width:13%;
		height:300px;
		border: 1px solid #dfe6ec;
	}
	.Asa_remark{
		width:9%;
		height:300px;
		border: 1px solid #dfe6ec;
	}
	.Asa_remark_2{
		width:12%;
		height:300px;
		border: 1px solid #dfe6ec;
	}
	.Asa_dele{
		width:14%;
		height:300px;
	}
	.arl_size{
		text-align: center;
		width: 100%;
		height:50px;
		line-height: 50px;
		background: rgb(231,231,231);
		border-bottom: 1px solid #dfe6ec;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;

	}
    .Asa_content .arl_btn{
		display: block;
		margin: 0 auto;
		margin-top: 30px;
	}
    .option_size {
	    width: 100%;
	    text-align: center;
	    height: 31px;
	    line-height: 31px;
	    border-bottom: 1px solid #dfe6ec;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	}
	.option_size_id {
	    width: 100%;
	    text-align: center;
	    height: 62px;
	    line-height: 62px;
	    border-bottom: 1px solid #dfe6ec;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	}
    .option_title {
	    color: #ccc;
	    -webkit-box-flex: 3; 
	    -ms-flex: 3;
	    flex: 3; 
	    width: 60%;
	}
	.option_title_id{
		color: #ccc;
	    -webkit-box-flex: 1; 
	    -ms-flex: 1;
	    flex: 1; 
	    width: 30%;
	}
    .option_content{
     	color: #999
    }
    .option_last{
    	border: 0 none;
    }
  .HU_id{
  	text-align: center;
  	margin-top: 30px;
  	color: #333;
  }
  .Hu_Id{
  	display: block;
  	text-align: center;
  	margin-top: 30px;
  	color: #666
  }    
  .HU_size{
  	display: -webkit-box;
  	-webkit-box-orient: vertical;
  	-webkit-line-clamp: 3;
  	overflow: hidden;
  }
  .Asa_btutton{
  	position: fixed;
  	bottom: 60px;
  	right:30px;
  	z-index: 6666
  }
 .Asa_dele .operation_btn,.Asa_remark .operation_btn,.Asa_duty .operation_btn{
  	display: block;
  	margin: 0 auto;
  	margin-top: 10px;
  }
  .save{
	margin-top: 22px;
	margin-bottom:15px;
  }

  .duty_Id{
  	width: 100%;
  	text-align: center;
  	display: block;
  	margin-top: 20px;
  	color: #666
  }
  .DCU_ipt,.MEU_ipt{
  	margin-top:10px;
  }
  .DCU_btn .operation_btn,.MEU_btn .operation_btn{
  	display: block;
  	margin: 10px 0 10px 10px;
  }
  .opt_ipt {
	    position: relative;
	    font-size: 14px;
	    width: 40%;
	}
	.opt_ipt  .el-input__inner {
	    height: 31px;
	    text-align: center;
	}
	.opt_ipt_id {
	    -webkit-box-flex: 3;
	    -ms-flex: 3;
	    flex: 3;
	    width: 70%;
	    height: 65px;
	}
	
	.opt_line{
		line-height: 15px;
	}
	.relevance_size {
	    width: 100%;
	    text-align: center;
	    height: 31px;
	    justify-content: center;
	    line-height: 31px;
	    border-bottom: 1px solid #dfe6ec;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	}
	.relevance_size .el-input__inner{
	    height: 31px;
	}
	.opt_ipt_id .el-textarea__inner {
		height: 62px;
	}
	.rel_ipt {
	    -webkit-box-flex: 19;
	    -ms-flex: 4;
	    flex: 19;
	}
	.rel_btn {
	    margin-left: 10%;
	    line-height: 13px;
	}
	.arl_over{
		height: 248px;
		overflow: auto;
		border: none;
	}
	.arl_over .el-collapse-item__header {
	    height: 31px;
	    line-height: 31px;
	    padding-left: 2px;
	    font-size: 13px;
	    letter-spacing: -1px;
	}
	.arl_over .el-collapse-item__content {
	    padding: 5px 8px;
	    font-size: 12px;
	}
	/*.arl_over> el-collapse-item >div:nth-child(odd) {
		background-color: #EFF2F7;
	}*/
	.arl_over .el_none .el-collapse-item__header {
		display: none;
	}
	.arl_over .el-collapse-item__header__arrow {
	    margin-right: 2px;
	}
</style>