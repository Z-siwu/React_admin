import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Login from './pages/login/login';
import Admin from './pages/admin/admin';

/* 应用的根组件 */
export default class App extends Component{

  handleClick = ()=>{
    //message.success('点击')
  }
/* <Button type="primary" onClick={this.handleClick}>Primary</Button> */
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>       
      </BrowserRouter>
    )
  }
}