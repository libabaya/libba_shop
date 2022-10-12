/* 
ajax请求函数模块
返回值:promise对象(异步返回的数据是:response.data)
*/
import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        // 执行异步请求
        let promise
        if (type === 'GET') {
            //准备url，query 参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + "=" + data[key] + "&";
            })
            if (dataStr !== "") {
                //截取掉最后一个&
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = dataStr + "?" + dataStr;
            }
            promise = axios.get(url);
        } else {
            promise = axios.post(url, data);
        }


        promise.then(function (response) {
            // 成功调用resolve
            resolve(response.data)
        }).catch(function (error) {
            // 失败调用reject
            reject(error)
        })
    })
}