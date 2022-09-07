<template>
    <div :style="{ height: fullHeight }">
        <div class="img_box">
            <img src="../assets/images/login.png" style="width: 100%; height: 100%;" />
        </div>
        <div>
            <form :model="form" status-icon :rules="rules" ref="form" class="login_container">
                <h3 class="login_title">动物房管理系统</h3>
                <div class="username">
                    <span>账号</span>
                    <input type="input" prop="username" v-model="form.username" auto-complete="off" placeholder="请输入账号">
                </div>
                <div class="password">
                    <span>密码</span>
                    <input type="password" prop="password" v-model="form.password" auto-complete="off"
                        placeholder="请输入密码">
                </div>
            </form>
        </div>

        <button type="primary" @click="login" class="login_submit">登录</button>

        <div class="account">
            <a href="#">注册账号</a>
            <a href="#">忘记密码</a>
        </div>

        <div class="copyright">
            <p>
                <a href="#">帮助</a>
                <a href="#">隐私</a>
                <a href="#">条款</a>
            </p>
            <div class="dlkj">
                CopyRight
                @
                杭州鼎澜科技有限公司
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            fullHeight: '',
            fullWigth: '',
            form: {

            },
            rules: {
                username: [
                    { required: true, message: "请输入账号", trigger: "blur" },
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                ]
            },
            password: '',
            username: ''
        }
    },
    mounted() {
        window.screenWidth = document.documentElement.clientWidth
        window.screenHeight = document.documentElement.clientHeight
        this.fullHeight = window.screenHeight + 'px'
        this.fullWigth = window.screenWidth + 'px'
    },
    methods: {
        login() {
            if (this.form.password === 'password' && this.form.username === 'admin') {
                this.$message.success("登陆成功")
                this.$router.push({ path: '/home' })
            } else {
                this.$message.error('账户或密码错误')
            }
        }
    }
}
</script>

<style lang="less" scoped>
.img_box {
    box-shadow: 10px 5px 5px #bdbdbd;
}

.login_container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .username,
    .password {
        margin: 0 auto;

        span {
            font-size: calc(100vw * 40 / 1920);
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        }

        input {
            border: 1px solid black;
            width: 350px;
            height: 45px;
            margin-bottom: 25px;
            margin-left: 30px;
            font-size: calc(100vw * 28 / 1920);
            padding-left: 10px;
        }
    }


}

.login_submit {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 130px;
    height: 40px;
    border-radius: 10px;
    background-color: #0E186B;
    color: white;
    font-size: calc(100vw * 28 / 1920);
    letter-spacing: 10px;
    text-indent: 10px;
}

.account {
    display: flex;
    justify-content: center;

    a {
        text-decoration: none;
        color: black;
        margin: 10px;
    }

}

.login_title {
    margin: 20px auto;
    margin-bottom: 50px;
    font-size: calc(100vw * 80 / 1920);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: #0E186B;
}

.copyright {
    p {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        // margin-bottom: 20px;

        a {
            font-size: calc(100vw * 20 / 1920);
            color: rgb(0, 0, 0);
            margin: 0 5px;
            text-decoration: none;
        }
    }

    .dlkj {
        font-size: calc(100vw * 20 / 1920);
        color: rgb(0, 0, 0);
        display: flex;
        justify-content: center;
        margin-bottom: 30px;

        .iconfont {
            font-size: calc(100vw * 18 / 1920);
        }
    }
}
</style>