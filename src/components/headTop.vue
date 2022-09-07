<template>
    <div class="header_container">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
		</el-breadcrumb>
		<el-dropdown menu-align='start' @command="handlecommand">
			<img src="../assets/img/avator.jpg" class="avator">
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="/usermanage">用户中心</el-dropdown-item>
				<el-dropdown-item command="/">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
    </div>
</template>

<script>
    export default {
		methods: {
			handlecommand(command){
				this.$router.push({path: command})
			}
		}
    }
</script>

<style lang="less">
	@import '../style/mixin';

	.header_container{
		background-color: rgb(207, 207, 207);
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
		width: 82.3%;
		float: left;
		position: absolute;
    	top: 0;
	}
	.avator{
		.wh(36px, 36px);
		border-radius: 50%;
		margin-right: 37px;
	}
	.el-dropdown-menu__item{
        text-align: center;
    }

	.el-breadcrumb-item{
		color:black;
	}
</style>
