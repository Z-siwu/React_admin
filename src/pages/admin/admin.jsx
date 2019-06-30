import React,{ Component } from "react"
import {Redirect,Route,Switch} from 'react-router-dom'
import {Layout} from 'antd'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import Home from '../home/analysis/analysis'

import Goods from '../goods/goods/goods'
import Category from '../goods/category/category'
import Model from '../goods/model/model'
import Spec from '../goods/spec/spec'

import User from '../setting/user/user'
import Role from '../setting/role/role'

//import memoryUtils from '../../utils/memoryUtils'
//import {Redirect} from 'react-router-dom'

const {Footer,Sider,Content} = Layout
/* 
后台管理的路由组件
*/
export default class Admin extends Component{
  render(){
    /* const user = memoryUtils.user
    if(!user || !user._id){
      return <Redirect to='/login' />
    } */
    /* let state = {
      collapsed: false,
    }; */
  
    /*  */

    return(
      <Layout style={{height: '100vh'}}>
        <Sider>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header>
            Header
          </Header>
          <Content style={{padding: '24px',zoom: '1'}}>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/goods/list' component={Goods}/>
              <Route path='/goods/category' component={Category}/>
              <Route path='/goods/model' component={Model}/>
              <Route path='/goods/spec' component={Spec}/>
              <Route path='/setting/role' component={Role}/>
              <Route path='/setting/user' component={User}/>
              <Redirect to='/home'/>
            </Switch>
          </Content>
          <Footer style={{textAlign:'center'}}>
            <span style={{color:'rgba(0,0,0,.45)',fontSize: '14px'}}>© 2017 东莞市斯巴达家居有限公司 版权所有 粤ICP备17095734号-1</span>
          </Footer>
        </Layout>
      </Layout>
    )
  }
}