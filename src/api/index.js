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


//商品分类管理
//获取树形结构分类数据
export const reqCategoryTree = ()=> ajax('/pjjp/category/tree');
//添加分类
export const reqAddCategory = (data)=> ajax('/pjjp/category/add',data,'POST');
//更新分类
export const reqUpdCategory = (data)=> ajax('/pjjp/category/upd',data,'POST');

//商品规格管理
//获取规格数据
export const reqSpecTree = ()=> ajax('/pjjp/spec');
//添加规格
export const reqAddSpec = (data)=> ajax('/pjjp/spec/add',data,'POST');
//更新规格
export const reqUpdSpec = (data)=> ajax('/pjjp/spec/upd',data,'POST');

//商品规格选项
//获取规格选项数据
export const reqParamTree = ()=> ajax('/pjjp/param');
//添加规格选项
export const reqAddParam = (data)=> ajax('/pjjp/param/add',data,'POST');
//更新规格选项
export const reqUpdParam = (data)=> ajax('/pjjp/param/upd',data,'POST');

// 获取规格组
export const reqSpecParam = ()=> ajax('/pjjp/spec_param');

//商品
//获取商品数据
export const reqGoods = ()=> ajax('/pjjp/goods');
//添加商品
export const reqAddGoods = (data)=> ajax('/pjjp/goods/add',data,'POST');
//更新商品
export const reqUpdGoods = (data)=> ajax('/pjjp/goods/upd',data,'POST');
