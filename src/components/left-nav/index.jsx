import React,{Component} from 'react'
import {Menu, Icon} from 'antd'
import './index.less'

const { SubMenu } = Menu;
/* 左侧导航的组件 */
export default class LeftNav extends Component{
  

  render(){
    return(
      <div className="left-nav">
        <div className="logo" />
          <Menu
          defaultSelectedKeys={['2']}
          defaultOpenKeys={['1']}
          mode="inline"
          theme="dark" 
        >{/* inlineCollapsed={this.state.collapsed} */}
          
          <SubMenu
            key="1"
            title={
              <span>
                <Icon type="mail" />
                <span>仪表盘</span>
              </span>
            }
          >
            <Menu.Item key="2">分析页</Menu.Item>
            <Menu.Item key="3">监控页</Menu.Item>
          </SubMenu>
          <SubMenu
            key="goods"
            title={
              <span>
                <Icon type="appstore" />
                <span>商品管理</span>
              </span>
            }
          >
            <Menu.Item key="goods1">商品列表</Menu.Item>
            <Menu.Item key="goods2">分类管理</Menu.Item>
            <Menu.Item key="goods3">模型管理</Menu.Item>
            <Menu.Item key="goods4">规格管理</Menu.Item>
            <Menu.Item key="goods5">参数管理</Menu.Item>
            {/* <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu> */}
          </SubMenu>
          <SubMenu
            key="promotion"
            title={
              <span>
                <Icon type="appstore" />
                <span>促销管理</span>
              </span>
            }
          >
            <Menu.Item key="promotion1">优惠券</Menu.Item>
            <Menu.Item key="promotion2">贵宾券</Menu.Item> 
          </SubMenu>
          <SubMenu
            key="order"
            title={
              <span>
                <Icon type="appstore" />
                <span>订单管理</span>
              </span>
            }
          >
            <Menu.Item key="order1">订单列表</Menu.Item>
            <Menu.Item key="order2">评论管理</Menu.Item>
          </SubMenu>
          <SubMenu
            key="resource"
            title={
              <span>
                <Icon type="appstore" />
                <span>资源</span>
              </span>
            }
          >
            <Menu.Item key="9">文件管理</Menu.Item>
            <SubMenu key="resource1" title="Submenu">
              <Menu.Item key="resource1-1">文件列表</Menu.Item>
              <Menu.Item key="resource1-2">文件分类</Menu.Item>
            </SubMenu>
            <Menu.Item key="10">图片管理</Menu.Item>
            <SubMenu key="resource2" title="Submenu">
              <Menu.Item key="resource2-1">图片列表</Menu.Item>
              <Menu.Item key="resource2-2">图片分类</Menu.Item>
            </SubMenu>
          </SubMenu>
          
        </Menu>
      </div>
    )
  }
}
