import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import axios from 'axios'
//import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(ElementUI)

Vue.prototype.$ajax = axios

let store = new Vuex.Store({
	state: {
		user_data:''
	},
	mutations: {
		
	}
})

//let store = new Vuex.Store({
//state: {
//  dataId: '',
//  data: {},
//  detaildata: '',
//  adddata: {}
//},
//mutations: {
//  getDataid(state){
//    console.log(event.currentTarget.id)
//    state.dataId = event.currentTarget.id      
//    console.log(state.dataId)
//    axios.get('http://192.168.10.13:5000/ARLSummary/'+state.dataId+'/20/1')
//    .then(function(res){
//        state.data = res.data.content;
//        console.log(state.data)
//    })
//  },
//  getDetail(state){
//    state.dataildata = event.currentTarget.id
//    axios.get('http://192.168.10.13:5000/ARLContent/'+state.dataildata)
//    .then(function(res){
//      state.adddate = res;
//    })
//  }
//  
//}
//})

new Vue({
	el: '#app',
	render:h=>h(App),
	router,
	store
});
// vuex: vuex是vue项目的仓库(store), 用于状态(state)存储和改变(mutition)