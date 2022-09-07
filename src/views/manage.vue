<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
			<el-col style="min-height: 100%; background-color: #bcbcbc; width: 16%;">
				<el-menu class="AsideMenu" :default-active="defaultActive" style="min-height: 100%">
					<el-menu-item class="title" @click="gohome">动物房管理系统</el-menu-item>
					<el-submenu  index="2" style="max-height: 500px; overflow-y:auto">
						<el-menu-item class="firstMenu" slot="title"><i class="el-icon-menu"></i>笼位信息</el-menu-item>
						<el-menu-item class="secondMenu" v-for="data in cagelist" :index="data.id" :key="data.id" @click="gowhere(data)">{{ data.name }}</el-menu-item>
					</el-submenu>
					<el-submenu index="3" style="max-height: 500px; overflow-y:auto">
						<el-menu-item class="firstMenu" slot="title"><i class="el-icon-menu"></i>用户中心</el-menu-item>
						<el-menu-item class="secondMenu" v-for="data in userlist" :index="data.id" :key="data.id"
							@click="gowhere(data)">{{ data.name }}</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import store from '@/store'
export default {
	name: 'manage',
	data() {
		return {
			cagelist: [
				{
					name: '1号房A架A面',
					id: '001'
				},
				{
					name: '1号房B架A面',
					id: '002'
				},
				{
					name: '1号房B架J面',
					id: '003'
				}
			],
			userlist: [
				{
					name: '用户权限管理',
					id: 'usermanage'
				},
				{
					name: '笼位信息管理',
					id: 'cagemanage'
				},
				
			]
		}
	},
	computed: {
		defaultActive: function () {
			// return this.$route.path.replace('/manage', '/manage');
		}
	},
	methods: {
		gowhere(data) {
			if (data.name === '用户权限管理' || data.name === '笼位信息管理' || data.name === '测试界面') {
				this.$router.push(data.id)
			} else {
				// this.$route.meta.push(data.name)
				// console.log(this.$route)
				this.$router.push({ path: 'cageinfo', query: data })
			}
		},
		gohome(){
			this.$router.push({path: '/home'})
		}
	}
}
</script>


<style lang="less" scoped>
@import '../style/mixin.less';

.AsideMenu{
	.title{
		font-size:20px;
		font-weight:600;
		text-align: center;
	}
	.firstMenu{
		// margin-left: -30px;
	}
	.secondMenu{
		text-align: center;
		// float: right;
	}

}



</style>
