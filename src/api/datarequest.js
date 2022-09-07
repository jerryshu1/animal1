import axios from 'axios'
const requests = axios.create({
    //配置对象
    //基础路径
    baseURL:"http://47.96.164.104:30001",
    //请求超时的时间为5s
    timeout:40000,
});

//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些使其np
requests.interceptors.request.use((config)=>{
    //config:配置对象，对象里面有一个属性很重要，headers请求头
    return config;
});

// requests.interceptors.response.use((res)=>{
//     //响应成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些使其
//     return res.data;
// })
//响应拦截器
requests.interceptors.response.use((res)=>{
    //响应成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些使其
    return {code: res.status,
        data:res.data};
}, (error) => {
    console.log(error)
    // if (error.request.status){
    //     switch (error.response.status) {
    //         case 400:
    //             alert('请求失败')
    //         case 401:
    //             alert('登录过期，请重新登录')
    //             break;
    //         default:
    //             Message({
    //                 message: error.response.data.message,
    //                 duration: 1500,
    //                 forbidClick: true
    //             });
    //     }
    // }
});
export default requests