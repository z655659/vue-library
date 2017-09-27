<!-- <template>
<div>
-->
<!-- <ul class="info_list"> 
<template v-for="item in content">
<div>
<li v-on:click='increment' v-bind:id="item.arl_id">
要件ID:{{item.arl_id}}
{{item.sub_id}}
<button >H/U数量</button>{{item.HU_num}}
<button >关联要件分析式样书数量</button>{{item.func_anaylize_num}}
<button >关联要件定义书数量</button>{{item.func_def_num}}
<button v-bind:id="item.arl_id" v-on:click='nb'>新建</button>
<button @click.stop='send' v-bind:id="item.arl_id">xiangxi</button>
</li>
<li class="no_1" >
{{item.from_info}} 
</li>
</div>
</template>
</ul> -->
<template>
	
	<div>
		<el-table :data="tabledata" border style="width: 100%">
			<el-table-column fixed prop="definition_id" label="TAGL要件定義ID" width="250">
			</el-table-column>
			<el-table-column prop="unique_id" label="ユニークID" width="200">
			</el-table-column>
			<el-table-column prop="pf_trigger" label="リガー" width="680">
			</el-table-column>	
			<el-table-column fixed="right" label="操作" width="200">
				<template scope="scope">
					<el-button @click.stop="send(scope.$index)" type="text" size="small">查看ALS</el-button>
	        
				</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<span class="demonstration"></span>
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="page_number" :page_sizes="[10, 20,]" :page_size="10" layout="sizes, prev, pager, next" :total="total">
			</el-pagination>
		</div>
	</div>

</template>

<!-- </div>
</template> -->

<script>
	import axios from 'axios';
	import bus from '../../../assets/js/event'
	// import pagination from 'pagination';
	export default {
		data() {
			return {
				tabledata: [],
				category_id: '',
				page_size: 10,
				page_number: 1,
				total:'',
				data: '',
				arl_id: '',
				data2: '',
				data3: ''
			}
		},
		mounted() {
			// console.log()
//			console.log(1111111111111111111111111111111)
//			this.category_id = this.$store.state.user_data
			this.huo()
//			var self = this
//			bus.$on('one', function() {
//				axios.get('http://192.168.10.13:5000/ARLSummary/' + window.localStorage.getItem('b') + '/' + self.page_size + '/' + self.page_number)
//					.then(res => {
//						//debugger
//						console.log(res.data.content, '这是获取页面1的列表')
//						self.tabledata = res.data.content;
//					})
//			})
		},
		methods: {
			//加载component1 页面时 ， 触发的方法
			huo() {
				var self = this
				axios.get('http://192.168.10.13:5000/AnalysisSummary/' + window.localStorage.getItem('b') + '/' + self.page_size + '/' + self.page_number)
					.then(res => {
						//debugger
						console.log(res.data.content, '这是获取页面1的列表')
						self.tabledata = res.data.content;
						self.total = res.data.total_count;
					})
			},
			//点击事件触发send方法，跳转到component2页面
			send(index){
              this.data = this.tabledata[index].hu_def_id,
              this.data2 = this.tabledata[index].definition_id,
              this.data3 = this.tabledata[index].un_id,
              this.$router.push({name: 'FComponent10',params: {HU_id: this.data,DEF_id: this.data2,UN_id: this.data3,}});
     		},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.page_size = val;
				axios.get('http://192.168.10.13:5000/AnalysisSummary/' + window.localStorage.getItem('b') + '/' + this.page_size + '/' + this.page_number)
					.then(res => {
						this.tabledata = res.data.content;
					})
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.page_number = val;
				axios.get('http://192.168.10.13:5000/AnalysisSummary/' + window.localStorage.getItem('b') + '/' + this.page_size + '/' + this.page_number)
					.then(res => {
						this.tabledata = res.data.content;
					})
			},
		},
		computed: {
			getUserIcons() {
				return this.$store.state.user_data
			}
		},
		watch: {
			getUserIcons(val){
				this.category_id = val;
				this.huo()
			}
		}
	}
</script>

<style scoped>

</style>