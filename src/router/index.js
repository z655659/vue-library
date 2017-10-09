import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
 		//登录注册页面
 		{
 			path: '/login',
 			component: resolve => require(['../components/login'],resolve),
 			name: 'Login'
 		},
 		{
 			path: '/homepage',
 			component: resolve => require(['../components/homePage'],resolve),
			name: 'HomePage',
			children: [
				{
					path: '/homepage/mywork',
					component: resolve => require(['../components/myWork/myWork'],resolve),
					name: 'Mywork',
					children: [
						{
							path: '/homepage/mywork/list',
							component: resolve => require(['../components/myWork/List'],resolve),
							name: 'List'
						},
						{
							path: '/homepage/mywork/HU_compile',
							component: resolve => require(['../components/myWork/HU_compile'],resolve),
							name: 'HU_compile'
						},
						{
							path: '/homepage/mywork/component2',
							component: resolve => require(['../components/myWork/component2'],resolve),
							name: 'component2'
						},{
							path: '/homepage/mywork/TAGL_definition',
							component: resolve => require(['../components/myWork/TAGL_definition'],resolve),
							name: 'TAGL_definition'
						},
					]
				},
				{
					path: '/homepage/ARL',
					component: resolve => require(['../components/myWork/myWork'],resolve),
					name: 'ARL'
				},
				{
					path: '/homepage/USER',
					component: resolve => require(['../components/myWork/USER'],resolve),
					name: 'USER'
				},
			]
 		},
 		{
 			path: '*',
 			redirect: { name:'Login'}
 		}
  ]
})
