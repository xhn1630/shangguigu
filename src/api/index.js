/*暴露多个接口*/
//先引入ajax
import ajax from "./ajax"

// (数据已经崩,不做)[1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情)<br/>
export const reqAddress = (geohash)=>ajax("/position/${geohash}")
// [2、获取食品分类列表](#2 获取食品分类列表)<br/>
export const reqFoodTypes = ()=>ajax("/index_category")
// [3、根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude,latitude)=>ajax("/shops",{longitude,latitude})
// [4、根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表)<br/>
export const reqAddress = (geohash,keyword)=>ajax("/search_shops",{geohash,keyword})
// [5、获取一次性验证码](#5 获取一次性验证码)<br/>
export const reqAddress = ()=>ajax()
// [6、用户名密码登陆](#6 用户名密码登陆)<br/>
export const reqAddress = ()=>ajax()
// [7、发送短信验证码](#7 发送短信验证码)<br/>
export const reqAddress = ()=>ajax()
// [8、手机号验证码登陆](#8 手机号验证码登陆)<br/>
export const reqAddress = ()=>ajax()
// [9、根据会话获取用户信息](#9 根据会话获取用户信息)<br/>
export const reqAddress = ()=>ajax()
// [10、用户登出](#10 用户登出)<br/>
export const reqAddress = ()=>ajax()
