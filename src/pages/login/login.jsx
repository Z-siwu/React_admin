import React,{ Component } from "react"
import './login.less'
import { Form, Icon, Input, Button } from 'antd';
import {reqCateogryTree} from '../../api'
import {message} from 'antd'

const Item = Form.Item
/* 
登录的路由组件
*/
class Login extends Component{

  handleSubmit = (event)=>{
    event.preventDefault();
    const form = this.props.form
    //const values = form.getFieldsValue()
    form.validateFields(async(err, values) => {
      if (!err) {
        /* const {username,password} = values
        reqLogin({username,password}) */
        const response = await reqCateogryTree()
        console.log('请求成功',response)
        message.success('登录成功')
        this.props.history.replace('/')
      }else{
        console.log('检验失败!')
      }
    });
  }

  render(){
    const form = this.props.form
    const {getFieldDecorator} = form

    return(
      <div className="login">
        <header className="login-header">
          斯巴达家居: 后台管理系统
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />,
              )}
            </Item>
            <Item> 
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
          </Button>
            </Item>
          </Form>
        </section>
      </div>
    )
  }
}

/* 
包装Form组件生成一个新组件
新组件会向Form组件传递一个对象属性：form
-----------
高阶函数
  a.接受函数类型的参数
  b.返回值是函数
常见：
  a.定时器：setTimeout()/setInterval()
  b.Promise: Promise(()=>{})then(value=>{},reason=>{})
  c.数组遍历相关的方法：forEach()/filter()/map()/reduce()/find()等
  d.函数对象的bind()
  e.Form.create()()/getFieldDecorator()()
高阶函数更新动态，更具扩展性
高阶组件
本质就是一个函数
接收一个组件(被包装组件)，返回一个新的组件(包装组件)，包装组件会向被包装组件传入特定属性
作用：扩展组件的功能
高阶组件也是高阶函数
*/

const WrapLogin = Form.create()(Login)
export default WrapLogin


/* 
async 和 await
1.作用
  简化promise对象的使用：不用再使用then()来指定成功/失败的回调函数
  以同步编码方式(没有回调函数)实现异步流程
2.哪里写await?
  在返回promise的表达式左侧写await：不想要promise，想要promise异步执行的成功的value数据
3.哪里写async?
  await所在函数(就近原则)定义的左侧写async
*/