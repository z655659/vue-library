import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '../components/login'
import MainApp from '../components/mainApp'
import ARL from '../components/MainApp/ARL'
import HU from '../components/MainApp/HU'
import dingyi from '../components/MainApp/dingyi'
import fenxi from '../components/MainApp/fenxi'
import Component1 from '../components/MainApp/ARL/component1'
import Component2 from '../components/MainApp/ARL/component2'
import Component3 from '../components/MainApp/ARL/component3'
import Component4 from '../components/MainApp/ARL/component4'
import Component4_new from '../components/MainApp/ARL/component4_new'
import HUlist from '../components/MainApp/ARL/HUlist'
import DEFlist from '../components/MainApp/ARL/DEFlist'
import ALSlist from '../components/MainApp/ARL/ALSlist'
import Component6 from '../components/MainApp/ARL/component6'
import Component6_new from '../components/MainApp/ARL/component6_new'
import Component10 from '../components/MainApp/ARL/component10'
import Component10_new from '../components/MainApp/ARL/component10_new'

//import Component11 from '../components/MainApp/HU/component11'

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
			name: 'MainApp',
			//设置二级路由
			children: [
				//ARL页面
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
							path: '/MainApp/ARL/4-new',
							component: resolve => require(['../components/MainApp/ARL/component4_new'],resolve),
							name: 'Component4_new'
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
							path: '/MainApp/ARL/6-new',
							component: resolve => require(['../components/MainApp/ARL/component6_new'],resolve),
							name: 'Component6_new'
						},
						{
							path: '/MainApp/ARL/7',
							component: resolve => require(['../components/MainApp/ARL/DEFlist'],resolve),
							name: 'DEFlist'
						},
						{
							path: '/MainApp/ARL/8',
							component: resolve => require(['../components/MainApp/ARL/ALSlist'],resolve),
							name: 'ALSlist'
						},
						{
							path: '/MainApp/ARL/10',
							component: resolve => require(['../components/MainApp/ARL/component10'],resolve),
							name: 'Component10'
						},
						{
							path: '/MainApp/ARL/10-new',
							component: resolve => require(['../components/MainApp/ARL/component10_new'],resolve),
							name: 'Component10_new'
						}
					]
				},
			// H/U页面
				{
					path: '/MainApp/HU',
					component: resolve => require(['../components/MainApp/HU'],resolve),
					name: 'HU',
					children: [
						{
							path: '/MainApp/HU/1',
							component: resolve => require(['../components/MainApp/HU/component11'],resolve),
							name: 'Component11'
						},
						{
							path: '/MainApp/HU/4',
							component: resolve => require(['../components/MainApp/HU/component4'],resolve),
							name: 'HComponent4'
						},
						{
							path: '/MainApp/HU/4-new',
							component: resolve => require(['../components/MainApp/HU/component4_new'],resolve),
							name: 'HComponent4_new'
						},
						{
							path: '/MainApp/HU/6',
							component: resolve => require(['../components/MainApp/HU/component6'],resolve),
							name: 'HComponent6'
						},
						{
							path: '/MainApp/HU/6-new',
							component: resolve => require(['../components/MainApp/HU/component6_new'],resolve),
							name: 'HComponent6_new'
						},
						{
							path: '/MainApp/HU/7',
							component: resolve => require(['../components/MainApp/HU/DEFlist'],resolve),
							name: 'HDEFlist'
						},
						{
							path: '/MainApp/HU/8',
							component: resolve => require(['../components/MainApp/HU/ALSlist'],resolve),
							name: 'HALSlist'
						},
						{
							path: '/MainApp/HU/10',
							component: resolve => require(['../components/MainApp/HU/component10'],resolve),
							name: 'HComponent10'
						},
						{
							path: '/MainApp/HU/10-new',
							component: resolve => require(['../components/MainApp/HU/component10_new'],resolve),
							name: 'HComponent10_new'
						}
					]
				},
			//要件定义页面
				{
					path: '/MainApp/dingyi',
					component: resolve => require(['../components/MainApp/dingyi'],resolve),
					name: 'dingyi',
					children:[
						{
							path: '/MainApp/dingyi/1',
							component: resolve => require(['../components/MainApp/dingyi/component11'],resolve),
							name: 'DComponent11'
						},
						{
							path: '/MainApp/dingyi/4',
							component: resolve => require(['../components/MainApp/dingyi/component4'],resolve),
							name: 'DComponent4'
						},
						{
							path: '/MainApp/dingyi/4-new',
							component: resolve => require(['../components/MainApp/dingyi/component4_new'],resolve),
							name: 'DComponent4_new'
						},
						{
							path: '/MainApp/dingyi/8',
							component: resolve => require(['../components/MainApp/dingyi/ALSlist'],resolve),
							name: 'DALSlist'
						},
						{
							path: '/MainApp/dingyi/10',
							component: resolve => require(['../components/MainApp/dingyi/component10'],resolve),
							name: 'DComponent10'
						},
						{
							path: '/MainApp/dingyi/10-new',
							component: resolve => require(['../components/MainApp/dingyi/component10_new'],resolve),
							name: 'DComponent10_new'
						}
					]
				},
			//要件分析页面
				{
					path: '/MainApp/fenxi',
					component: resolve => require(['../components/MainApp/fenxi'],resolve),
					name: 'fenxi',
					children:[
						{
							path: '/MainApp/fenxi/1',
							component: resolve => require(['../components/MainApp/fenxi/component11'],resolve),
							name: 'FComponent11'
						},					
						
						{
							path: '/MainApp/fenxi/10',
							component: resolve => require(['../components/MainApp/fenxi/component10'],resolve),
							name: 'FComponent10'
						},
						{
							path: '/MainApp/fenxi/10-new',
							component: resolve => require(['../components/MainApp/fenxi/component10_new'],resolve),
							name: 'FComponent10_new'
						}
					]
				},
				//登陆管理
				{
					path: '/MainApp/USER',
					component: resolve => require(['../components/MainApp/USER'],resolve),
					name: 'USER',
					children: [
						{
							path: '/MainApp/USER/usermanage',
							component: resolve => require(['../components/MainApp/USER/usermanage'],resolve),
							name: 'Usermanage'
						},
						{
							path: '/MainApp/USER/groupmanage',
							component: resolve => require(['../components/MainApp/USER/groupmanage'],resolve),
							name: 'Groupmanage'
						}
					]
				},
			]
		},
		{
			path: '*',
			redirect: { name: 'Login' }
		}
	]
});
