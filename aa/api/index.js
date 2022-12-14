/*
包含n个接口请求函数的模块
*/
import ajax  from "./ajax";
const BASE_URL = 'http://localhost:4000'
// 1.根据经纬度获取位置详情
// export function reqAddress(geohash){
//     ajax(`/position/${geohash}`)
// }
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

// 2.获取食物分类列表
export const reqFoodTypes = () => ajax('/index_category')

// 3.根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})

// 4.根据经纬度和关键字搜索商铺列表
export const reqSearchShop = ({geohash,keyword}) => ajax('/search_shop',{geohash,keyword})

// 5.获取一次性验证码

// 6.用户名密码登录
export const reqPwdLogin = ({name,pwd,captcha}) => ajax('login_pwd',{name,pwd,captcha},'POST')

// 7.发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})

// 8.手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')

// 9.根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')

// 10.用户登出
export const reqLogout = () => ajax(BASE_URL + '/logout')