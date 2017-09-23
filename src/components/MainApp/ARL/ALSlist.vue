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
        <el-table-column fixed prop="definition_id" label="DEF-Id" width="130">
        </el-table-column>
        <el-table-column prop="definition_id" label="anaylize_id" width="150">
        </el-table-column>
        <el-table-column prop="func_anaylize_num" label="要件分析式样书的数量" width="150">
        </el-table-column>
        <el-table-column prop="func_def_num" label="要件定义书的数量" width="150">
        </el-table-column>
        
        <el-table-column fixed="right" label="操作" width="200">
      	  <template scope="scope">
	        <el-button @click.stop="send(scope.$index)" type="text" size="small">查看ALS</el-button>
	        <!-- <el-button @click.stop="sendALS(scope.$index)" type="text" size="small">查看要件ALS</el-button> -->
	        
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
             HU_id:this.$route.params.HU_id, 
         	}
     	},
       	created(){
       		var self = this
       		// bus.$on('one',function(){
			    axios.get('http://192.168.10.13:5000/HuSubDef/'+this.HU_id)
      		.then(res=>{
      			//debugger
      			// console.log(res)       
      			self.tabledata = res.data.content;

       		})

			
    
       	 },
     	methods:{
     		send(index){
              this.data = this.tabledata[index].hu_def_id,
              this.data2 = this.tabledata[index].definition_id,
              this.data3 = this.tabledata[index].un_id,
              this.$router.push({name: 'Component10',params: {HU_id: this.data,DEF_id: this.data2,UN_id: this.data3,}});
     		},
        	sendALS(index){
              this.data = this.tabledata[index].definition_id
              this.$router.push({name: 'ALSlist',params: {DEF_id: this.data}});
        	},
        	newALS(index){
              console.log(110110);
               // bus.$emit('Six',this.content1111[0].arl_id)
        	},
     		

     				
     	}


    }
</script>

<style scoped>
/*@import url("//unpkg.com/element-ui@1.4.4/lib/theme-default/index.css");*/



</style>



