import React,{Component} from 'react'
import {Menu, Icon} from 'antd'
import {Link,withRouter} from 'react-router-dom'
import menuList from '../../config/menuConfig'
import './index.less'

const { SubMenu } = Menu;
/* 左侧导航的组件 */
class LeftNav extends Component{ 

  getMenuNodes = (menuList) =>{
    const path = this.props.location.pathname

    return menuList.reduce((pre,item)=>{
      if(!item.children){
        pre.push((
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        ))
      }else{
        const cItem = item.children.find(cItem => cItem.key === path)
        if(cItem) this.openkey = item.key
        
        pre.push((
          <SubMenu 
            key={item.key}
            title={
              <span>
              <Icon type={item.icon} />
              <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuNodes(item.children)}
          </SubMenu>
        ))
      }
      return pre
    },[])
  }

  //在第一次render()前执行一次
  //为第一次render()准备数据(必须同步的)
  componentWillMount(){
    this.menuNodes = this.getMenuNodes(menuList)
  }

  render(){
    const path = this.props.location.pathname
    const openkey = this.openkey
    return(
      <div className="left-nav">
        <div className="logo" />
          <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[openkey]}
          mode="inline"
          theme="dark" 
        >{/* inlineCollapsed={this.state.collapsed} */}
          
        { 
          this.menuNodes
        } 
          
        </Menu>
      </div>
    )
  }
}

export default withRouter(LeftNav)