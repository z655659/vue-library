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
          <el-table-column fixed prop="arl_id" label="ARL-Id" width="150">
          </el-table-column>
          <el-table-column prop="sub_id" label="SUB-Id" width="100">
          </el-table-column>
          <el-table-column prop="from_info" label="転記してきた要件" width="680">
          </el-table-column>
          <el-table-column prop="func_anaylize_num" label="要件分析式样书的数量" width="150">
          </el-table-column>
          <el-table-column prop="func_def_num" label="要件定义书的数量" width="150">
          </el-table-column>
          <el-table-column prop="HU_num" label="HU式样书的数量" width="150">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
        <template scope="scope">
          <el-button @click.stop="send(scope.$index)" type="text" size="small">查看</el-button>
          <el-button @click="sendHU(scope.$index)" type="text" size="small">查看H/U</el-button>
          <el-button @click="newHU(scope.$index)" type="text" size="small">新增HU</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="page_number"
        :page_sizes="[10, 20,]"
        :page_size="10"
        layout="sizes, prev, pager, next"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>

  


<!--   </div>
</template> -->

<script>
import axios from 'axios';
import bus from '../../../assets/js/event'
// import pagination from 'pagination';
    export default {
        data () {
         return {
             tabledata:[],
             category_id:'',
             page_size:10,
             page_number:1,
             component2_content: {},
             data: '',
         	}
     	},
       	mounted(){
          // console.log()
       		var self = this
       		bus.$on('one',function(){
			       axios.get('http://192.168.10.13:5000/ARLSummary/'+window.localStorage.getItem('b')+'/'+self.page_size+'/'+self.page_number)
      		  .then(res=>{
      			//debugger
      			console.log(res.data.content,'这是获取页面1的列表')       
      			self.tabledata = res.data.content;
       		   })
          })
       	},
     	methods:{
     		send(index){
              this.data = this.tabledata[index].arl_id
              this.$router.push({name: 'Component2',params: {ARL_id: this.data}});
     		},
        sendHU(index){
              this.data = this.tabledata[index].arl_id
              
              this.$router.push({name: 'HUlist',params: {ARL_id: this.data}});
        },
        newHU(index){
              this.data = this.tabledata[index].arl_id
              this.$router.push({name: 'Component6_new',params: {ARL_id: this.data}});
        },
        handleSizeChange(val) {
              console.log(`每页 ${val} 条`);
              this.page_size = val;
              axios.get('http://192.168.10.13:5000/ARLSummary/'+window.localStorage.getItem('b')+'/'+this.page_size+'/'+this.page_number)
              .then(res=>{     
                this.tabledata = res.data.content;
                })
        },
        handleCurrentChange(val) {
              console.log(`当前页: ${val}`);
              this.page_number = val;
              axios.get('http://192.168.10.13:5000/ARLSummary/'+window.localStorage.getItem('b')+'/'+this.page_size+'/'+this.page_number)
              .then(res=>{     
                this.tabledata = res.data.content;
                })
        },
      },
    }
</script>

<style scoped>




</style>
