import React,{Component} from 'react'
import {Icon} from 'antd'

/* 头部的组件 */
export default class Header extends Component{

  /* toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }; */

  render(){
    return(
      <div>
        {/* <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        /> */}
      </div>
    )
  }
}