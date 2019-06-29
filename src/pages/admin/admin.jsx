import React,{ Component } from "react"
import {Layout,Menu,Icon} from 'antd'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
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
    let state = {
      collapsed: false,
    };
  
    /*  */

    return(
      <Layout style={{height:'100%'}}>
        <Sider>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}