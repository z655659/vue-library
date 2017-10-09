<template>
	<div id="ARLlist">
		<div id="treeMap">
			<li v-for="item in table1" @click='change1(item.arl_id)'>&nbsp&nbsp&nbsp&nbsp{{item.title}}</li>
		</div>
		<div id="list">
			
		    <div v-show="Map">
			<div class="LTM">
				<el-button @click="toList">列表</el-button>
				<el-button @click="toMap">关系图</el-button>
			</div>
		    <div v-show="Maptree" id="Maptree">
				
		    </div>
		    <div v-if="Maplist">
		      <el-table :data="tabledata1"  style="width: 100%">
		           <el-table-column prop="arl_id" label="要件ID" >
		           </el-table-column>
		           <el-table-column prop="from_info" label="転記してきた要件" >
		           </el-table-column>
		           <el-table-column prop="status" label="状態">
		           </el-table-column>
		           <el-table-column prop="trigger" label="トリガー" >
		           </el-table-column>
		           <el-table-column prop="action" label="動作" >
		           </el-table-column>
		            <el-table-column label="ARL操作"   fixed="right" width="180">
		               <template scope="props">
			              <el-button  size="small" @click="showDiv1(props.$index)">HU</el-button>
			              <el-button  size="small" @click="check(props.$index)">查</el-button>
			               <el-button size="small" @click="TARL(props.$index)">转</el-button>
		               </template>
		           </el-table-column>
		       
		         </el-table>
		
		
		        <!-- HU要件定义 -->
		        <el-collapse  accordion @change='change2($event)'>
		          <el-collapse-item v-for="item_two in table2" :title="item_two.title" :key="item_two.title" :name="item_two.hu_id">
		            <el-table :data="tabledata2" style="width: 100%">
		               <el-table-column prop="dcu_status" label="DCU状態" >
		               </el-table-column>
		               <el-table-column prop="dcu_trigger" label="DCUトリガー" >
		               </el-table-column>
		               <el-table-column prop="dcu_action" label="DCU動作">                
		               </el-table-column>
		               <el-table-column prop="meu_status" label="MEU状態">
		               </el-table-column>
		               <el-table-column prop="meu_trigger" label="MEUトリガー" >               
		               </el-table-column>   
		               <el-table-column prop="meu_action" label="MEU動作">
		               </el-table-column>
		               <el-table-column prop="unique_id" label="unique_id">
		               </el-table-column>
		               <el-table-column label="HU操作"  fixed="right" width="180">
		               <template scope="props">
		                   <el-button  size="small" @click="editClick1(item_two.hu_id)">TAGL</el-button>		                   		                   
		                   <el-button size="small" @click="dele1(item_two.hu_id,item_two.arl_id)">删</el-button>
		                </template>
		                </el-table-column>
		               </el-table>
		           </el-collapse-item>
		       </el-collapse>
		       </el-collapse-item>
			</el-collapse>
			</div>
			</div>
			 <el-dialog title="转交ARL责任人" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
			  <el-form :model="form">
			    
			    <el-form-item label="选择责任人" :label-width="formLabelWidth">
			      <el-select v-model="form.user_id" placeholder="请选择责任人">
			        <el-option
					      v-for="item in members"
					      :key="item.user_id"
					      :label="item.user_name"
					      :value="item.user_id">
					  </el-option>
				  </el-select>
			    </el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click="dialogFormVisible = false">取 消</el-button>
			    <el-button type="primary" @click="Tf">确 定</el-button>
			  </div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default{
	data(){
		return {
			tabledata1:[],
			tabledata2:[],
			table1:[],
			table2:[],
			cate_id: '',
			Maptree:false,
			Maplist:false,
			Map:false,
			data:'',
			s_arl:'',
			s_hu:'',

			Maptree:{},
			// myechart:

			members:[],
			dialogFormVisible: false,
	        form: {
	          arl:'',
	          user_id:'',
	        },
	        formLabelWidth: '120px',
		}


	},
	
	mounted(){

		this.huo()
		this.change1(window.sessionStorage.getItem('ARLId'))
		this.drawLine();
},
	computed: {
		getUserIcons(){
		return this.$store.state.user_data
		}
	},
	watch: {
		getUserIcons(val){

			window.sessionStorage.setItem('b',val)
			this.cate_id = window.sessionStorage.getItem('b');
			this.huo()
		},
		'$route' (to, from) {
		  //刷新参数放到这里里面去触发就可以刷新相同界面了
		  console.log(2222222222222222)
			this.cate_id = window.sessionStorage.getItem('b');
			this.huo()
		},

	},
	methods:{
		huo(){
			// console.log('huo')
			var self = this
			if(this.cate_id + '/2000/1'!= ""){
				// axios.get(this.Ip+'/ARLSummary/' + window.localStorage.getItem('b') + '/' + self.page_size + '/' + self.page_number)
				 axios.get(this.Ip+'/ARLSummary/' + window.sessionStorage.getItem('b') + '/2000/1')
					.then(res => {
						self.table1=res.data.content;
						// console.log(res)
					})

				}
		},
		
		TARL(index){

			this.form.arl=this.tabledata1[index].arl_id;
			this.dialogFormVisible=true;	
			axios.get(this.Ip+"/AllUsers")
			.then(res=>{
				this.members = res.data.content;
			})
		},
		Tf(){
			axios.post(this.Ip+"/ARLAssignUser",this.form)
			this.dialogFormVisible=false;
			// console.log("111")
		},
		change1:function(event){
			var self=this;

			this.Map=true;
			this.Maplist=true;
			this.Maptree=false;

			if(event!=""){
				window.sessionStorage.setItem('ARLId',event)
				axios.get(this.Ip+'/ARLContent/'+window.sessionStorage.getItem('ARLId'))
					.then(res => {
						this.tabledata1 = []
						this.tabledata1.push(res.data.content);
						// console.log(this.Ip+'/ARLContent/'+window.sessionStorage.getItem('ARLId'))
						// console.log(res,"event",window.sessionStorage.getItem('ARLId'))
					})
				axios.get(this.Ip+'/ARLSubHu/' + window.sessionStorage.getItem('ARLId'))
					.then(res => {
						this.table2=res.data.content
					})
			}
			this.drawLine();
		},
		change2:function(event){
			if(event != ""){
			axios.get(this.Ip+'/HUContent/'+ event)
				.then(res => {
					this.tabledata2 = []
					this.tabledata2.push(res.data.content);
				})
			// axios.get(this.Ip+'/HuSubDef/'+ event)
			// 	.then(res => {
			// 		this.table3=res.data.content;
			// 	})
			}
		},
		dele1:function(hu_id,arl_id){
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
	         	confirmButtonText: '确定',
	         	cancelButtonText: '取消',
			   	type: 'danger'
			        }).then(() => {	
        		   		axios.get(this.Ip+"/HuDelete/"+hu_id).then((res) => {

    		   			axios.get(this.Ip+'/ARLSubHu/'+ arl_id)
    		   				.then(res => {
    		   					this.table2 = [];
    		   					this.table2=res.data.content;
    		   				})	
        	  		})
			     })
		},
		
		showDiv1(index){
			this.data = this.tabledata1[index].arl_id
			this.$router.push({name:'HU_compile',params:{ARL_id:this.data}})

		},
		editClick1(id){
			this.$router.push({name:'TAGL_definition',params:{HU_id: id}})  
		},		
		check(index) {
			this.data = this.tabledata1[index].arl_id
			this.$router.push({name: 'Component2',params:{ARL_id: this.data}})
		},

		toMap(){
			this.Maptree=true;
			this.Maplist=false;
			this.drawLine();

		},

		toList(){
			this.Maplist=true;
			this.Maptree=false;
		},

		drawLine:function(){
			var Maptree = document.getElementById("Maptree")
			var myechart= this.$echarts.init(Maptree);
				myechart.setOption({
					 title: {
			                text: "ARL",
			                textStyle:{
			                	color:"#999"
			                },
			                left:"10",
			                subtext:"ID:10.42.57.54"
			            },
			            tooltip: {},
					    animationDurationUpdate: 1500,
					    animationEasingUpdate: 'quinticInOut',
					    series : [
					        {
					            type: 'graph',
					            layout: 'none',
					            symbolSize: 50,
					            roam: true,
					            label: {
					                normal: {
					                    show: true,
					                    position:'top',
					                }
					            },
					            edgeSymbol: ['circle', 'arrow'],
					            edgeSymbolSize: [4, 10],
					            edgeLabel: {
					                normal: {
					                    textStyle: {
					                        fontSize: 20
					                    }
					                }
					            },
					            data: [
					            		{"name": "ARL","x":0,"y":333,}, 
										{"name": "HUID:10.42.57.54.0","x":200,"y":166}, 
										{"name": "新建","x":200,"y":498},
										{"name": "HUID:10.42.57.54.1","x":200,"y":333}, 
										{"name": "TAGLID:10.42.57.54.0.0","x":400,"y":166},
										{"name": "TAGLID:10.42.57.54.1.1","x":400,"y":333},
										{"name": "ALSID:10.42.57.54.0.0.0","x":600,"y":166},
										{"name": "ALSID:10.42.57.54.1.1.1","x":600,"y":333},
								],
					            links: [
					            	{"source": "ARL","target": "HUID:10.42.57.54.0",}, 
									{"source": "HUID:10.42.57.54.0","target": "TAGLID:10.42.57.54.0.0"}, 
									{"source": "TAGLID:10.42.57.54.0.0","target": "ALSID:10.42.57.54.0.0.0"}, 
									{"source": "HUID:10.42.57.54.1","target": "TAGLID:10.42.57.54.1.1"},
									{"source": "TAGLID:10.42.57.54.1.1","target": "ALSID:10.42.57.54.1.1.1"}, 
									{"source": "ARL","target": "HUID:10.42.57.54.1",},
									{"source": "ARL","target": "新建",}
								],
					            lineStyle: {
					                normal: {
					                    opacity: 0.9,
					                    width: 2,
					                    curveness: 0
					                }
					            }
					        }
					    ]
				});
				axios.get("../assets/data.json").then((res)=>{
				
					mychart.setOption({
						title: {
				                text: "ARL",
				                
				                subtext:"ID:10.42.57.54"
				            },
				      	    series : [
						        {
						            
						            data: res.data.nodes,
						            links: res.data.links,
						                
						            // data: data.nodes.map(function (node) {
						            //        var arl ="ARLID";
						            //        var hu = "HUID";
						            //        var def ="TAGLdefID";
						            //        var als = "TAGLalsID"
						            //        var name = [];
						            //        
						            //           name = arl+node.arl;
						            //           name = name+hu+node.hu;
						            //        
						            //         
						            //           return {
						            //             x: node.x,
						            //             y: node.y,
						            //             name: node.name,
						            //         };
						            //     }),
						            // links: data.links.map(function (link) {
						            //         return {
						            //             source: link.source,
						            //             target: link.target
						            //         };
						            //     }),
						            
						        }
						    ]
					})
				})
				var self = this
				myechart.on('click',function(ps){
					if (ps.componentType === 'markPoint') {
				        // 点击到了 markPoint 上
				        if (ps.seriesIndex === 1) {
				            // 点击到了 index 为 1 的 series 的 markPoint 上。
				        }
				    }
				    else if (ps.componentType === 'series') {
				        if (ps.seriesType === 'graph') {
				            if (ps.dataType === 'edge') {
				                // 点击到了 graph 的 edge（边）上。
				            }
				            else if(ps.name.slice(0,3)=='ARL'){
				     			console.log(self.s_arl) 
				     			console.log(ps.name.slice(0,3))    
				                self.$router.push({name:'HU_compile',params:{ARL_id:this.s_arl}})
				            }
				            else if(ps.name.slice(0,2)=='HU'){
				                self.$router.push({name:'HU_compile',params:{ARL_id:this.s_arl}})
				            }
				            else if(ps.name.slice(0,2)=='新建'){
				                self.$router.push({name:'HU_compile',params:{ARL_id:this.s_arl}})
				            }
				            else if(ps.name.slice(0,4)=='TAGL'){
				            	// console.log(ps.name.substr(7,13))
				            	var hu = ps.name.substr(7,13)
				            	self.$router.push({name:'TAGL_definition',params:{HU_id:hu}})
				            }
				            else{
								
				            }
				        }
				    }
				});
		}

			
	

	}
}
</script>

<style scoped>
#ARLlist{
	position: relative;
	/*top: 50px;*/
	width: 100%;
	/*padding-top: 50px;*/
}
#treeMap{
	position: absolute;
	top: 0;
	left: 0;
	width: 200px;
	height: 800px;
	overflow: scroll;

}
#Maptree{
	position: absolute;
	top: 35px;
	left: 10px;
	right: 0;
	width: 700px;
	height: 500px;


}
#list{
	position: absolute;
	left: 200px;
	right: 0;
	height: auto;
}
.Map{
	display: none;
}
 li{
	list-style: none;
	cursor: pointer;
	height: 40px;
	line-height: 40px;
	/*border: 1px solid red;*/
	background-color: white;
}
li:hover{
	list-style: none;
	cursor: pointer;
	/*height: 40px;
	line-height: 40px;*/
	/*border: 1px solid red;*/
	background-color: #f9fafc;
}
.LTM{
	background-color: white;
}

</style>
