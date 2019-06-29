/* 
包含应用中所有接口请求函数的模块
每个函数的返回值都是promise
 */
import ajax from './ajax';
//const BASE = 'http://www.spartan-home.com'

//登录
export const reqLogin = (data)=> ajax('/login',data,'POST');

//添加用户
export const reqAddUser = ()=> ajax('/manage/user/add');


//分类管理
export const reqCateogryTree = ()=> ajax('/api/v1/pjjp/category/tree');