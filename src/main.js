import Vue from 'vue';
import Vuex from 'vuex'
import App from './App';
import router from './router';
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)

Vue.prototype.$ajax = axios
Vue.prototype.$echarts = echarts
Vue.prototype.Ip = 'http://192.168.10.13:5000'

let store = new Vuex.Store({
	state: {
		user_data:''
	},
	mutations: {
		
	}
})

new Vue({
	el: '#app',
	render:h=>h(App),
	router,
	store
});
