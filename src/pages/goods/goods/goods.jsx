import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import AddUpd from './add-upd'
import Detail from './detail'
import List from './list'
/* 路由 */
export default class Goods extends Component{
  render(){
    return( 
      <Switch>1
        <Route path='/goods/list' component={List} exact/> {/* 路径完全匹配 */}
        <Route path='/goods/list/detail' component={Detail} />
        <Route path='/goods/list/add_upd' component={AddUpd} />
        <Redirect to='/goods/list'/>
      </Switch>
    )
  }
}