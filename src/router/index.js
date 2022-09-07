import Vue from 'vue'
import VueRouter from 'vue-router';
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('../views/login')), 'login');
const manage = r => require.ensure([], () => r(require('../views/manage')), 'manage');
const home = r => require.ensure([], () => r(require('../views/home')), 'home');
const usermanage = r => require.ensure([], () => r(require('../views/usermanage')), 'usermanage');
const cagemanage = r => require.ensure([], () => r(require('../views/cagemanage')), 'cagemanage');
const register = r => require.ensure([], () => r(require('../views/register')), 'register')


import cageinfo from '../views/cageinfo'
import feedingcage from '../views/common/feedingcage'
import breedingcage from '../views/common/breedingcage'
import experimentcage from '../views/common/experimentcage'
import cageentry from '../views/cageentry'
import expmouse from '../views/expmouse'
import matingtask from '../views/matingtask'
import tasklist from '../views/tasklist'
import transfertask from '../views/transfertask'
import disuse from '../views/disuse'

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		children: [{
			path: '/home',
			component: home
		},
		{
			path: '/cageinfo',
			component: cageinfo,
			name: 'cageinfo',
			meta: ['笼位信息'],
		},{
			path: '/usermanage',
			component: usermanage,
			meta: ['用户中心','用户权限管理'],
		},{
			path: '/cagemanage',
			component: cagemanage,
			meta: ['用户中心','笼位信息管理'],
		}]
	},{
		path: '/register',
		component: register,
	},
	{
		path: '/feedingcage',
		component: feedingcage
	},
	{
		path: '/breedingcage',
		component: breedingcage
	},
	{
		path: '/experimentcage',
		component: experimentcage
	},
	{
		path: '/cageentry',
		component: cageentry
	},
	{
		path:'/expmouse',
		component:expmouse
	},
	{
		path:'/matingtask',
		component:matingtask
	},
	{
		path:'/tasklist',
		component:tasklist
	},
	{
		path:'/transfertask',
		component:transfertask
	},
	{
		path:'/disuse',
		component:disuse
	}
]

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
	return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
	mode: 'hash',
	routes,
})
