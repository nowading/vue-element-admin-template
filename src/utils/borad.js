// 对于axios二次封装

import axios from 'axios';

// 创建axios实例
const uidRequest = axios.create({
    baseURL: Glods.uidUrl,
    // 代表请求超时的时间
    timeout: 5000,
});

uidRequest.interceptors.request.use(
    // config:配置对象，对象里有一个属性很重要，header请求头
    config => {
        return config;
    },
    error => {
        return Promise.reject(error)
});

// 获取数据之前
// 相应拦截器
uidRequest.interceptors.response.use((res)=>{
    // 成功回调函数
    console.log("res.data", res.data)
    return res.data;
}, (error)=>{
    // 响应失败回调函数
    // return Promise.reject(new error('fail'))
    return Promise.reject(error.response)
});

export default uidRequest;
