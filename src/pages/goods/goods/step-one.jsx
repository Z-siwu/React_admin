import React,{Component} from 'react'
import {Form,Input,TreeSelect} from 'antd'

/* 步骤1的组件 */

const Item = Form.Item
class StepOne extends Component{ 
  

  /* onChange = value => {
    console.log(value)
  } */

  render(){
    const {getFieldDecorator} = this.props.form
    const {categoryTree} = this.props    
    return (
      <Form>        
        <Item>
          {
            getFieldDecorator('name',{
              //initialValue: ''
            })(
          <Input placeholder="类名" />
            )
          }
        </Item>
        <Item>
          {
            getFieldDecorator('parent_id')(
              <TreeSelect
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              treeData={categoryTree}
              placeholder="请选择"
              treeDefaultExpandAll
              onChange={this.onChange}
              >
              </TreeSelect>
            )
          }          
        </Item>
      </Form>
    )
  }
}

export default Form.create()(StepOne)