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
  
       <el-table :data="tabledata" border style="width: 100%">
        <el-table-column fixed prop="arl_id" label="ARL-Id" width="130">
        </el-table-column>
        <el-table-column prop="hu_id" label="HU-Id" width="140">
        </el-table-column>
        <el-table-column prop="func_anaylize_num" label="要件分析式样书的数量" width="150">
        </el-table-column>
        <el-table-column prop="func_def_num" label="要件定义书的数量" width="150">
        </el-table-column>
        <el-table-column prop="HU_num" label="HU式样书的数量" width="150">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="350">
      	  <template scope="scope">
	        <el-button @click.stop="send(scope.$index)" type="text" size="small">查看H/U</el-button>
	        <el-button @click.stop="sendDEF(scope.$index)" type="text" size="small">查看要件DEF</el-button>
	        <el-button @click="newDEF(scope.$index)"type="text" size="small">新增要件EDF</el-button>
        </template>
    	</el-table-column>
  </el-table>

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
             category_id:'6-51-77-333-1317',
             page_size:10,
             page_number:1,
             component2_content: {},
             data: '',
             data2: '',
             data3: '',
             ARL_id:this.$route.params.ARL_id, 
         	}
     	},
       	created(){
       		var self = this
       		// bus.$on('one',function(){
			    axios.get('http://192.168.10.13:5000/ARLSubHu/'+this.ARL_id)
      		.then(res=>{
      			//debugger
      			// console.log(res)       
      			self.tabledata = res.data.content;

       		})

			
    
       	 },
     	methods:{
     		send(index){
              this.data = this.tabledata[index].hu_id
              this.data2 = this.tabledata[index].arl_id,
              this.data3 = this.tabledata[index].un_id,
              this.$router.push({name: 'Component6',params: {HU_id: this.data,ARL_id: this.data2,UN_id: this.data3,}});
     		},
        sendDEF(index){
              this.data = this.tabledata[index].hu_id
              this.$router.push({name: 'DEFlist',params: {HU_id: this.data}});
        },
        newDEF(index){
              console.log(110110);
               // bus.$emit('Six',this.content1111[0].arl_id)
        },
     		

     				
     	}


    }
</script>

<style scoped>
/*@import url("//unpkg.com/element-ui@1.4.4/lib/theme-default/index.css");*/



</style>

