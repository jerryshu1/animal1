<template>
    <div :style="{ height: fullHeight }">
        <head-top></head-top>
        <div style="height: 20%;"></div>
        <div style="height: 50%; margin-left: 35%;">
            <img src="../assets/images/home.png" style="height: 100%;" />
        </div>
        <div>
            <h3 class="login_title">欢迎使用动物房管理系统</h3>
        </div>
    </div>
</template>

<script>
    
	import headTop from '../components/headTop.vue'
    import { getmicsinfo } from '@/api/data'

    export default {
        data() {
            return {
                fullHeight: '',
            }
        },
    	components: {
    		headTop,
    	},
        mounted() {
            window.screenHeight = document.documentElement.clientHeight
            this.fullHeight = window.screenHeight + 'px'
            getmicsinfo().then((res) => {
                if (res.code === 200){
                    this.$store.commit('savemiceinfo', res.data.data)
                }

            })
        },
    }
</script>

<style lang="less" scoped>
	@import '../style/mixin.less';

    .login_title {
        // margin: 10px auto;
        margin-bottom: 50px;
        font-size: calc(100vw * 60 / 1920);
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        color: #0E186B;
        margin-left: 30%;
    }
</style>