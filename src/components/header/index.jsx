import React,{Component} from 'react'
import {Avatar,PageHeader,Icon} from 'antd'
import {withRouter} from 'react-router-dom'
import menuList from '../../config/menuConfig'
import './index.less'

/* 头部的组件 */
class Header extends Component{

  /* toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }; */
  getTitle = () => {
    const path = this.props.location.pathname
    let title
    menuList.forEach(item => {
      if(item.key === path){
        title = item.title
      }else if(item.children){
        const cItem = item.children.find(cItem => cItem.key === path)
        if(cItem){
          title = cItem.title
        }
      }
    })
    return title
  }

  render(){
    const title = this.getTitle()
    return(
      <div className="layout-header">
        <div className="layout-header-top">
          <div className="left">
            <Icon
              className="trigger"
              type={'menu-unfold'}
              style={{ fontSize: '20px'}}
            />
          </div>
          <div className="right">
            <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
          </div>
        </div>
        <PageHeader onBack={() => null} title={title} subTitle="This is a subtitle"/>
        {/* <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        /> */}
      </div>
    )
  }
}

export default withRouter(Header)