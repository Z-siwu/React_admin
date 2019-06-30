import React,{Component} from 'react'
import {Form,Input,TreeSelect} from 'antd'
import PropTypes from 'prop-types'

/* 编辑分类的form组件 */

const Item = Form.Item
class UpdForm extends Component{ 
  //检查类型
  static propTypes = {
    category: PropTypes.object.isRequired,
    categoryTree: PropTypes.array.isRequired,
    setForm: PropTypes.func.isRequired
  }

  componentWillMount(){
    this.props.setForm(this.props.form)
  }   

  onChange = value => {
    console.log(value)
  }

  render(){
    const {getFieldDecorator} = this.props.form
    const {category,categoryTree} = this.props

    return (
      <Form>        
        <Item>
          {
            getFieldDecorator('name',{
              initialValue: category.name
            })(
          <Input placeholder="类名" />
            )
          }
        </Item>
        <Item>
          {
            getFieldDecorator('parent_id',{
              initialValue: category.parent_id
            })(
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

export default Form.create()(UpdForm)