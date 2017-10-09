<template>
	<div id="myWorkChildren2">
		<div class="Asa_content" v-for="(item,index) in list">
			<!-- 查看ARL -->
			<div class="Asa_arl fl">
				<h4 class="arl_size" title="ARL要件转记">HU要件转记</h4>
				<p class="ARL_msg"><span class="ARL_msg_title">HU-ID:</span><span>{{arlc_Data[0].arl_id}}</span></p>
				<el-button type="text" size="small" class="arl_btn" @click="examine_hu(index)">查看</el-button>
			</div>
			<!-- HU -->
			<div class="Asa_Hu fl">
				<h4 class="arl_size" title="HU_unique_ID">unique_ID</h4>
				<span class="Hu_Id"><span class="HU_size" >{{index}}</span></span>
			</div>
			<!-- 模块 -->
			<div class="Asa_moudel fl">
				<h4 class="arl_size" title="TAGL-PF">TAGL-PF</h4>
<!-- 				<el-button type="text" size="small" class="arl_btn" @click="HU_moudel = true">H/U以外のＭＭ部品</el-button>
				<el-button type="text" size="small" class="arl_btn" @click="other_moudel = true">他部署設計部品(部品名は参考)</el-button> -->
				<p class="tagl_size"><span>DCU/MEU</span></p>
				<p class="tagl_msg">
					<span>状态:</span>
					<el-input type="textarea" class="opt_ipt2" :rows="2"></el-input>
				</p>
				<p class="tagl_msg">
					<span>tigger:</span>
					<el-input type="textarea" class="opt_ipt2" :rows="2"></el-input>
				</p>
				<p class="tagl_msg">
					<span>動作:</span>
					<el-input type="textarea" class="opt_ipt2" :rows="2"></el-input>
				</p>
			</div>
			<!-- 责任分担 -->
			<div class="Asa_duty fl">
				<h4 class="arl_size" title="责任分担">责任分担</h4>
				<el-button type="text" size="small" class="operation_btn" @click="examine(index)">查看/添加DCU</el-button>
				<el-button type="text" size="small" class="operation_btn" @click="examine_MEU(index)">查看/添加MEU</el-button>
				<span class="duty_Id">ID: <span class="duty_size" :title="item.hu_id">
				<el-input  class="opt_ipt" v-model="item.hu_category_id"  @blur="itp_blur(index)"></el-input>
				</span></span>
			</div>
			
			<!-- 备考 -->
			<div class="Asa_remark fl">
				<h4 class="arl_size" title="备注">其他</h4>
				<el-button type="text" size="small" class="operation_btn" @click="texTarea(index)">备考</el-button>
				<el-button type="text" size="small" class="operation_btn" @click="literature(index)">参考文献</el-button>
				<el-button type="text" size="small" class="operation_btn">日付</el-button>
				<el-button type="text" size="small" class="operation_btn">更改理由</el-button>
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
			<el-button  class="arl_btn" @click="save()">保存</el-button>
			<el-button  class="arl_btn" @click="add()">添加</el-button>
			<el-button  class="arl_btn" @click="back()">返回</el-button>
			<el-button  class="arl_btn" @click="save_back()">保存返回</el-button>
		</div>
		<el-dialog title="添加DCU" :visible.sync="DCU_flag" :modal-append-to-body="false">
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
				<el-button  size="small" class="operation_btn fr" @click='DCU_back(index)'>返回</el-button>
			</p>
		</el-dialog>
		<el-dialog title="添加MEU" :visible.sync="MEU_flag" :modal-append-to-body="false">
			<p class="DCU_size">
				<h5 class="fl">動作 :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="meu_action" v-model="meu_action"  class="DCU_ipt"></el-input>
			</p>
			<p class="DCU_size">
				<h5 class="fl">状態 :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="meu_status" v-model="meu_status"  class="DCU_ipt"></el-input>
			</p>
			<p class="DCU_size">
				<h5 class="fl">トリガー :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="meu_trigger" v-model="meu_trigger"  class="DCU_ipt"></el-input>
			</p>
			<p class="DCU_btn">
				<el-button  size="small" class="operation_btn fr" @click='MEU_dele()'>删除</el-button>
				<el-button  size="small" class="operation_btn fr" @click='MEU_save()'>保存</el-button>
				<el-button  size="small" class="operation_btn fr" @click='MEU_back()'>返回</el-button>
			</p>
		</el-dialog>
		<el-dialog title="备考" :visible.sync="flag" :modal-append-to-body="false" >
			<el-input
			  type="textarea" :rows="10" placeholder="请输入内容"
			  v-model="remark">
			</el-input>
			<el-button class="save fr" @click="texTareasave()">保存</el-button>
		</el-dialog>
		<el-dialog title="機能配置を判断したエビデンス" :visible.sync="literature_flag" :modal-append-to-body="false" >
			<p class="DCU_size">
				<h2 class="fl">001 システム仕様書 :</h2>
				<h5 class="fl">章　Chapter/Sectionor ページ番号 Page No :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="sys_spec_chapter" v-model="sys_spec_chapter"  class="DCU_ipt" ></el-input>
			</p>
			<p class="DCU_size">
				<h2 class="fl">003 共通アプリ・AVC-LAN仕様書 :</h2>
				<h5 class="fl">章　Chapter/Sectionor ページ番号 Page No :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="common_chapter" v-model="common_chapter"  class="DCU_ipt" ></el-input>
				<h5 class="fl">シーケンス仕様Sequence spec. :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="common_seq_spec" v-model="common_seq_spec"  class="DCU_ipt" ></el-input>
				<h5 class="fl">シーケンス番号Sequence No. :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="common_seq_no" v-model="common_seq_no"  class="DCU_ipt" ></el-input>
				<h5 class="fl">コマンドガイドCommand guide :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="common_cmd_guide" v-model="common_cmd_guide"  class="DCU_ipt" ></el-input>
				<h5 class="fl">OPC :</h5>
				<el-input  type="textarea" :rows="2" :placeholder="common_opc" v-model="common_opc"  class="DCU_ipt" ></el-input>
			</p>
			<p class="DCU_size">
				<h2 class="fl">318 DCU-MEU間連携仕様書 DCU-MEU interaction spec. :</h2>
				<h5 class="fl">機能配置・機能仕様Function location and spec.</h5>
				<el-input  type="textarea" :rows="2" :placeholder="inter_loc_spec" v-model="inter_loc_spec"  class="DCU_ipt" ></el-input>
				<h5 class="fl">章　Chapter/Sectionor ページ番号 Page No</h5>
				<el-input  type="textarea" :rows="2" :placeholder="inter_chapter" v-model="inter_chapter"  class="DCU_ipt" ></el-input>
			</p>
			<p class="DCU_size">
				<h2 class="fl">その他資料 Other document. </h2>
				<h5 class="fl">ドキュメント名※トヨタ仕様の場合は仕様番号も記載する事</h5>
				<el-input  type="textarea" :rows="2" :placeholder="other_chapter" v-model="other_chapter"  class="DCU_ipt" ></el-input>
				<h5 class="fl">章　Chapter/Sectionor ページ番号 Page No</h5>
				<el-input  type="textarea" :rows="2" :placeholder="other_doc" v-model="other_doc"  class="DCU_ipt" ></el-input>
			</p>
			<el-button class="save fr" @click="literaturesave()">保存</el-button>
		</el-dialog>
		<el-dialog title="查看" :visible.sync="arl_check" class="el_c" :modal-append-to-body="false">
		   <el-table :data="arlc_Data" border style="width: 100%;">
		      <el-table-column prop="arl_id" label="ARLID">
		      </el-table-column>
		      <el-table-column prop="detail" label="詳細">
		      </el-table-column>
		      <el-table-column prop="from_info" label="転記してきた要件">
		      </el-table-column>
		      <el-table-column prop="memo" label="備考、不明点">
		      </el-table-column>
		      <el-table-column prop="status" label="状態">
		      </el-table-column>
		      <el-table-column prop="trigger" label="トリガー">
		      </el-table-column>
		      <el-table-column prop="action" label="動作">
		      </el-table-column>
			</el-table>
		</el-dialog>
		<el-dialog title="H/U以外のＭＭ部品" :visible.sync="HU_moudel" class="ed_hm" :modal-append-to-body="false">
			 <el-table :data="HUm_Data" border style="width: 100%; margin: auto;" max-height="250">
			    <el-table-column fixed prop="hu_key" label="hu_key" width="200">
			    </el-table-column>
			    <el-table-column prop="hu_value" label="hu_value" width="601">
			       <template scope="scope">
			       <el-input placeholder="请输入内容"></el-input>
			      </template>
			    </el-table-column>
			    <el-table-column fixed="right" label="移除" width="100">
			      <template scope="scope">
			      	<el-button type="primary" class="rel_btn" @click="edhm_del(index)">-</el-button> 
			      </template>
			    </el-table-column>
			  </el-table>
			  <el-button class="save fr" @click="humsave()">保存</el-button>
		</el-dialog>
		<el-dialog title="H/U以外のＭＭ部品" :visible.sync="other_moudel" class="ed_hm"  :modal-append-to-body="false">
			 <el-table :data="otherm_Data" border style="width: 100%; margin: auto;" max-height="250">
			    <el-table-column fixed prop="other_key" label="other_key" width="200">
			    </el-table-column>
			    <el-table-column prop="other_value" label="other_value" width="601">
			       <template scope="scope">
			       <el-input placeholder="请输入内容"></el-input>
			      </template>
			    </el-table-column>
			    <el-table-column fixed="right" label="移除" width="100">
			      <template scope="scope">
			      	<el-button type="primary" class="rel_btn" @click="edothm_del(index)">-</el-button> 
			      </template>
			    </el-table-column>
			  </el-table>
			  <el-button class="save fr" @click="othmsave()">保存</el-button>
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
				activeNames: ['1'],
				arl_id:this.$route.params.ARL_id,
				literature_index:0,
				literature_flag:false,
				sys_spec_chapter:'',
				common_chapter:'',
				common_seq_spec:'',
				common_seq_no:'',
				common_cmd_guide:'',
				common_opc:'',
				inter_loc_spec:'',
				inter_chapter:'',
				other_chapter:'',
				other_doc:'',
				state:'',
				arl_check: false,
				arlc_Data: [{
					arl_id:'',
					small_category:'',
					detail:'',
					from_info:'',
					status:'',
					trigger:'',
					action:''
				}],
		        HU_moudel: false,
		        other_moudel: false,
		        HUm_Data: [{
		          hu_key: '01.遠隔ディスプレイ(WVGA Display)',
		          hu_value: ''
		        },
		        {
		          hu_key: '02.Remote Touch I/F',
		          hu_value: ''
		        },
		        {
		          hu_key: '03.Satellite SW',
		          hu_value: ''
		        },
		        {
		          hu_key: '04.DCM',
		          hu_value: ''
		        },
		        {
		          hu_key: '05.Microphone',
		          hu_value: ''
		        },
		        {
		          hu_key: '06.Step1 AMP',
		          hu_value: ''
		        },
		        {
		          hu_key: '07.Step3 AMP',
		          hu_value: ''
		        },
		        {
		          hu_key: '08 SP',
		          hu_value: ''
		        },
		        {
		          hu_key: '09.RSE',
		          hu_value: ''
		        },
		        {
		          hu_key: '10.I/F BOX',
		          hu_value: ''
		        },	
		        {
		          hu_key: '11. USB Adapter',
		          hu_value: ''
		        },
		        {
		          hu_key: '12Radio ANT',
		          hu_value: ''
		        },
		        {
		          hu_key: '13XM ANT',
		          hu_value: ''
		        },
		        {
		          hu_key: '14DAB ANT',
		          hu_value: ''
		        },
		        {
		          hu_key: '15.DTV ANT',
		          hu_value: ''
		        },
		        {
		          hu_key: '16.GPS ANT',
		          hu_value: ''
		        },
		        {
		          hu_key: '17. DSRC/ETC',
		          hu_value: ''
		        },
		        {
		          hu_key: '18. Clock',
		          hu_value: ''
		        },
		        {
		          hu_key: '19. Rear Controller',
		          hu_value: ''
		        },
		        {
		          hu_key: '20. ITS-ECU',
		          hu_value: ''
		        }],
		        otherm_Data:[{
		            other_key: '20. Meter',
		          	other_value: ''
		        },{
		            other_key: '21. HUD',
		          	other_value: ''
		        },{
		            other_key: '22. Steering Swith',
		          	other_value: ''
		        },{
		            other_key: '23. Rear Camera',
		          	other_value: ''
		        },{
		            other_key: '24. Camera ECU',
		          	other_value: ''
		        },{
		            other_key: '25. Clock',
		          	other_value: ''
		        },{
		            other_key: '26 Body ECU',
		          	other_value: ''
		        },{
		            other_key: '27. Air Controller',
		          	other_value: ''
		        }],
			ARL_id: ''
			}
		},
		created:function(){
				axios.get(this.Ip+'/ARLContent/'+window.sessionStorage.getItem('sion_Id'))
					.then(res => {
						this.arlc_Data[0].arl_id=res.data.content.arl_id
						this.arlc_Data[0].detail=res.data.content.detail
						this.arlc_Data[0].from_info=res.data.content.from_info
						this.arlc_Data[0].memo=res.data.content.memo
						this.arlc_Data[0].status=res.data.content.status
						this.arlc_Data[0].trigger=res.data.content.trigger
						this.arlc_Data[0].action=res.data.content.action
				})
				if(typeof(this.$route.params.ARL_id) == 'string'){
				window.sessionStorage.setItem('sion_Id',this.$route.params.ARL_id)				
				axios.get(this.Ip+'/ARLSubHu/'+window.sessionStorage.getItem('sion_Id'))
					.then(res => {
						this.list=res.data.content;
						console.log(res)
					})
				}else{
					axios.get(this.Ip+'/ARLSubHu/'+window.sessionStorage.getItem('sion_Id'))
					.then(res => {
						this.list=res.data.content;
					})
				}		
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
			edhm_del:function(index, rows){
				this.HUm_Data.splice(index, 1);
			},
			edothm_del:function(index, rows){
				this.otherm_Data.splice(index, 1);
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
				this.DCU_flag = !this.DCU_flag

			},
			DCU_dele(index){
				this.DCU_flag = !this.DCU_flag
				this.list[this.index].dcu_action='-'
				this.list[this.index].dcu_status='-'
				this.list[this.index].dcu_trigger='-'
			},
			DCU_back(){
				this.DCU_flag = !this.DCU_flag
			},
			examine_MEU(index){
				this.index_meu=index
				this.MEU_flag = !this.MEU_flag
				this.meu_action=this.list[this.index_meu].meu_action
				this.meu_status=this.list[this.index_meu].meu_status
				this.meu_trigger=this.list[this.index_meu].meu_trigger
			},
			// MEU_compile(index){
			// 	this.MEU_disabled = !this.MEU_disabled
			// },
			MEU_save(index){
				this.list[this.index_meu].meu_action=this.meu_action
				this.list[this.index_meu].meu_status=this.meu_status
				this.list[this.index_meu].meu_trigger=this.meu_trigger
				this.MEU_flag = !this.MEU_flag
			},
			MEU_dele(index){
				this.list[this.index_meu].meu_action='-'
				this.list[this.index_meu].meu_status='-'
				this.list[this.index_meu].meu_trigger='-'
				this.MEU_flag = !this.MEU_flag
			},
			MEU_back(index){
				this.MEU_flag = !this.MEU_flag
			},
			literature(index){
				this.literature_index=index;
				this.literature_flag = !this.literature_flag
				this.sys_spec_chapter=this.list[this.literature_index].sys_spec_chapter
				this.common_chapter=this.list[this.literature_index].common_chapter
				this.common_seq_spec=this.list[this.literature_index].common_seq_spec
				this.common_seq_no=this.list[this.literature_index].common_seq_no
				this.common_cmd_guide=this.list[this.literature_index].common_cmd_guide
				this.common_opc=this.list[this.literature_index].common_opc
				this.inter_loc_spec=this.list[this.literature_index].inter_loc_spec
				this.inter_chapter=this.list[this.literature_index].inter_chapter
				this.other_chapter=this.list[this.literature_index].other_chapter
				this.other_doc=this.list[this.literature_index].other_doc
			},
			literaturesave(){
				this.list[this.literature_index].sys_spec_chapter=this.sys_spec_chapter
				this.list[this.literature_index].common_chapter=this.common_chapter
				this.list[this.literature_index].common_seq_spec=this.common_seq_spec
				this.list[this.literature_index].common_seq_no=this.common_seq_no
				this.list[this.literature_index].common_cmd_guide=this.common_cmd_guide
				this.list[this.literature_index].common_opc=this.common_opc
				this.list[this.literature_index].inter_loc_spec=this.inter_loc_spec
				this.list[this.literature_index].inter_chapter=this.inter_chapter
				this.list[this.literature_index].other_chapter=this.other_chapter
				this.list[this.literature_index].other_doc=this.other_doc
				this.literature_flag = !this.literature_flag
			},
			itp_blur(index){
				var state_= this
				if(this.list[index].hu_category_id==0){
					this.$confirm('确定将状态ID更新为0吗？', '提示', {
					          confirmButtonText: '确定',
					          cancelButtonText: '取消',
					          type: 'warning'
					        }).then(() => {
					          state_.list[index].hu_category_id=0
					          this.$message({
					            message: '更新成功'
					          });
					        }).catch(() => {
								  state_.list[index].hu_category_id=""      
					        });
				}
				if(this.list[index].hu_category_id==3){
					this.$confirm('确定将状态ID更新为3吗？', '提示', {
					          confirmButtonText: '确定',
					          cancelButtonText: '取消',
					          type: 'warning'
					        }).then(() => {
					          state_.list[index].hu_category_id=3   
					          this.$message({
					            message: '更新成功'
					          });
					        }).catch(() => {
								  state_.list[index].hu_category_id=""     
					  });
				}
			},
			translate(event){
				this.$confirm('确定翻译吗？', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {
				          this.$message({
				            message: '翻译成功'
				          });
				        }).catch(() => {
							this.$message({
							  message: '翻译取消'
						});      
				});
			},
			recognize(index){
				this.$confirm('确定更改该状态？', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {
				          this.$message({
				            message: '更改成功'
				          });
				        }).catch(() => {
							this.$message({
							  message: '更改取消'
						});      
				});
			},
			back(){
				this.$router.go(-1)
			},
			save_back(){
				this.$router.go(-1)
			},
			add(){
				var item={};
				item=JSON.parse(JSON.stringify(item))
				item.dcu_action="-"
				item.dcu_status="-"
				item.dcu_trigger="-"
				item.meu_action="-"
				item.meu_status="-"
				item.meu_trigger="-"
				item.common_chapter="未確認"
				item.common_cmd_guide="未確認"
				item.common_opc="未確認"
				item.common_seq_no="未確認"
				item.common_seq_spec="未確認"
				item.inter_chapter="未確認"
				item.inter_loc_spec="未確認"
				item.sys_spec_chapter="未確認"
				item.system_conf=""
				item.amp="0"
				item.dsrc="0"
				item.dcm="0"
				item.rse="0"
				item.touch_pad="0"
				item.separate_disp="0"
				item.hu_category_id=""
				item.rel_requirement=""
				item.remark="-"
				var msg =this.list;
				msg.push(item)
				this.list = [];
				this.list = msg;
				this.$message('添加成功');
			},
			save(){
				// console.log(this.list)
			},
			examine_hu(){
				this.arl_check=!this.arl_check
			},
			humsave(){
				this.HU_moudel=!this.HU_moudel
			},
			othmsave(){
				this.other_moudel=!this.other_moudel
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
	.Asa_arl{
		width:18%;
		height:300px;
		border: 1px solid #dfe6ec;
	}
	.Asa_Hu{
		width:10%;
		height:300px;
		border: 1px solid #dfe6ec;
	}
	.Asa_moudel{
		width:20%;
		height:300px;
		border: 1px solid #dfe6ec;
	}
	.Asa_duty{
		width:20%;
		height:300px;
		border: 1px solid #dfe6ec;
	}
	.Asa_remark{
		width:15%;
		height:300px;
		border: 1px solid #dfe6ec;
	}
	.Asa_remark_2{
		width:12%;
		height:300px;
		border: 1px solid #dfe6ec;
	}
	.Asa_dele{
		width:17%;
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
		/*height: 62px;*/
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
	h5{
		width: 100%;
		margin-top: 20px;
	}
	#myWorkChildren2 .el_c .el-dialog--small{
		width: 57.6%;
		/*height: 22%;*/
	}
	#myWorkChildren2 .ed_hm .el-dialog--small{
		/*height: 41%;*/
	}
	.ARL_msg{
		margin: 5px 0 0 5px;
		font-size: 12px;
		height: 16px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.ARL_msg_title{
		font-weight: bold;
	}
	.tagl_size{
		font-size: 12px;
		font-weight: bold;
		padding:5px;
	}
	.tagl_msg{
		font-size: 12px;
		font-weight: bold;
		width:100%;
		/*line-height: 36px;*/
	}
	.tagl_msg>span{
		/*width: 100px;*/
		display: block;
		/*margin: 10px;*/
		line-height: 16px;
	}
</style>