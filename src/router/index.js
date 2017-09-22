import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '../components/login'
import MainApp from '../components/mainApp'
import ARL from '../components/MainApp/ARL'
import HU from '../components/MainApp/HU'
import Component1 from '../components/MainApp/ARL/component1'
import Component2 from '../components/MainApp/ARL/component2'
import Component3 from '../components/MainApp/ARL/component3'
import Component4 from '../components/MainApp/ARL/component4'
import Component6 from '../components/MainApp/ARL/component6'
import HUlist from '../components/MainApp/ARL/HUlist'
import DEFlist from '../components/MainApp/ARL/DEFlist'
export default new VueRouter({
	routes:[
	//登录页面
		{
			path: '/login',
			component: resolve => require(['../components/login'],resolve),
			name: 'Login'
		},
		//主体页面
		{
			path:'/MainApp',
			component: resolve => require(['../components/mainApp'],resolve),
			name: MainApp,
			//设置二级路由
			children: [
				//ARL
				{
					path: '/MainApp/ARL',
					component: resolve => require(['../components/MainApp/ARL'],resolve),
					name: 'ARL',
					children: [
						{
							path: '/MainApp/ARL/1',
							component: resolve => require(['../components/MainApp/ARL/component1'],resolve),
							name: 'Component1'
						},
						{
							path: '/MainApp/ARL/2',
							component: resolve => require(['../components/MainApp/ARL/component2'],resolve),
							name: 'Component2'
						},
						{
							path: '/MainApp/ARL/3',
							component: resolve => require(['../components/MainApp/ARL/component3'],resolve),
							name: 'Component3'
						},
						{
							path: '/MainApp/ARL/4',
							component: resolve => require(['../components/MainApp/ARL/component4'],resolve),
							name: 'Component4'
						},
						{
							path: '/MainApp/ARL/5',
							component: resolve => require(['../components/MainApp/ARL/HUlist'],resolve),
							name: 'HUlist'
						},
						{
							path: '/MainApp/ARL/6',
							component: resolve => require(['../components/MainApp/ARL/component6'],resolve),
							name: 'Component6'
						},
						{
							path: '/MainApp/ARL/8',
							component: resolve => require(['../components/MainApp/ARL/DEFlist'],resolve),
							name: 'DEFlist'
						}

					]
				},
			// H/U
				{
					path: '/MainApp/HU',
					component: resolve => require(['../components/MainApp/HU'],resolve),
					name: 'HU'
				}
			]
		},
		{
			path: '*',
			redirect: { name: 'Login' }
		}
	]
});
