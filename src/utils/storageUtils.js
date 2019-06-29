/* 进行local数据存储管理的工具模块 */

const THKEN_KEY = 'thken_key'
export default {
  //保存user
  saveUser(user){
    //localStorage.setItem(THKEN_KEY,JSON.stringify(user))
    //store.set(THKEN_KEY,user)
  }

  //读取user
  getUser(){
    //return JSON.parse(localStorage.getItem(THKEN_KEY)||'{}')
    //store.get(THKEN_KEY) || {}
  }

  //删除user
  removeUser(){
    //localStorage.reomveItem(THKEN_KEY)
    //store.remove(THKEN_KEY)
  }
}