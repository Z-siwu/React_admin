import React,{Component} from 'react'
import {Card,Form,Select,InputNumber,Input,Steps,Button,Icon,Table,Divider,message,Checkbox} from 'antd'
import {reqSpecParam} from '../../../api'
import './add-upd.less'
/* import { SKU } from 'zent'
import 'zent/css/sku.css' */

const { Option } = Select;
const Item = Form.Item
const { Step } = Steps;
const InputGroup = Input.Group;
const steps = [
  {
    title: '编辑基本信息',
    content: 'First-content',
  },
  {
    title: '编辑商品详情',
    content: 'Second-content',
  },
  {
    title: '完成',
    content: 'Last-content',
  },
]
  
const dataSource = []
const columns = []
  //group
const group = []
  
/* 路由 */
class AddUpd extends Component{
  state = {
    loading: true,
    spec_params: [], 
  }
  
  getSpecParam = async () => {
    this.setState({loading: true})
    const result = await reqSpecParam()
    this.setState({loading: false})
    if(result.status){
      const spec_params = result.data
      console.log(spec_params)
      this.setState({
        spec_params
      })       
    }else{      
      message.error('获取规格组列表失败')
    }
  }

  //异步请求
  componentDidMount(){
    this.getSpecParam()
  }


  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const {getFieldDecorator} = this.props.form
    console.log(this.props.form.getFieldsValue())
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  handleSubmit = () => {

  }
  /* fetchSKUTree = () => {
    return new Promise(resolve => {
      resolve(skuTree);
    });
  }

  fetchSKU = () => {
    return new Promise(resolve => {
      resolve(sku);
    });
  } */
  //选中规格名
  groupSpec = (text,record,index) => {
    //group[index]
    console.log(text)
    console.log(record)
    console.log(index)
    //console.log(index)
  }


  render(){
    const {getFieldDecorator} = this.props.form //表单
    const {spec_params,loading,current } = this.state; //当前步骤
    
    const formItemLayout = { //布局
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const formItemLayout1 = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 22 },
      },
    };
    const formItemLayout2 = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
    };
    
    return(
      <Card title="添加商品" bordered={false}>
        <Steps current={current} size="small">
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">
          <Form onSubmit={this.handleSubmit} {...formItemLayout}>
          <div style={{background:'#f8f8f8',padding:'10px',margin:'10px 0',fontWeight:'700'}}>
            基本信息
          </div>

            <Item label="商品名">
            {
              getFieldDecorator('name',{
              })(
            <Input placeholder="商品标题长度至少3个字，最长50个汉字" />
              )
            }
            </Item>
            <Item label="商品编号">
            {
              getFieldDecorator('no',{
              })(
            <Input placeholder="商品标题长度至少3个字，最长50个汉字" />
              )
            }
            </Item>
            <Item label="所属分类">
            {
              getFieldDecorator('cateogry_id',{
              })(
            <Input placeholder="类名" />
              )
            }
            </Item>
            
          <div style={{background:'#f8f8f8',padding:'10px',margin:'10px 0',fontWeight:'700'}}>
            价格库存
          </div> 
          <Item {...formItemLayout1} label="商品规格">
            <Card type="inner" className="card_sku_group">
              <div>
              <div>
                  <div className="sku_group_spec">
                    <span>规格名:</span>
                    <div className="f-c" style={{flex: '1 1 0%'}}>          
                      <Select className="ml-10" style={{ width: '150px' }} 
                      onChange={(text, record,index) => this.groupSpec(text, record,index)}>
                        <Option value="面板" key="0">面板</Option>
                        <Option value="底座" key="1">底座</Option>
                        <Option value="尺寸" key="2">尺寸</Option>
                      </Select>
                      <Checkbox className="ml-10">添加规格图片</Checkbox>
                    </div>
                    <a style={{lineHeight:'1'}}>
                      <Icon type="close-circle"/>
                    </a> 
                  </div>
                  <div className="sku_group_param">
                    <span style={{flexShrink: 0,lineHeight: '30px'}}>规格值:</span>
                    <div className="flex" style={{flex: '1 1 0%',flexWrap:'wrap'}}>
                      <div className="mb-10 sku_group_param_item"> 
                        <Select className="ml-10" style={{ width: '150px' }}>
                        <Option value="手绘白">手绘白</Option>
                          <Option value="繁星黑">繁星黑</Option>
                          <Option value="原谅绿">原谅绿</Option>
                        </Select>
                        <a href="javascript:void(0)" className="sku_group_param_del">
                          <Icon type="close-circle" style={{fontSize: '15px'}} theme="twoTone"/>
                        </a>
                      </div>
                      <div className="mb-10 sku_group_param_item">
                        <Select className="ml-10" style={{ width: '150px' }}>
                          <Option value="手绘白">手绘白</Option>
                          <Option value="繁星黑">繁星黑</Option>
                          <Option value="原谅绿">原谅绿</Option>
                        </Select>
                        <a href="javascript:void(0)" className="sku_group_param_del">
                          <Icon type="close-circle" style={{fontSize: '15px'}} theme="twoTone"/>
                        </a>
                      </div>
                      <Button icon="plus" className="mb-10 ml-10" style={{flexShrink: '0'}}>添加规格值</Button>
                    </div> 
                  </div>
                </div>
                
              </div>
              <div className="btn_sku_add_group">
                <Button type="primary">添加商品规格</Button>
              </div>
            </Card>
          </Item>
          <Item {...formItemLayout1} label="规格明细">
            <Table dataSource={dataSource} 
            columns={columns} 
            bordered 
            footer={()=>('Footer')/* (text,record,index)=>(
              <div>
                批量设置:
                <InputGroup compact size="small">
                  <Input style={{ width: '80px' }} placeholder="市场价"/>
                  <Button size="small">设置</Button>
                </InputGroup>
                <InputGroup compact size="small">
                  <Input style={{ width: '80px' }} placeholder="市场价"/>
                  <Button size="small">设置</Button>
                </InputGroup>
              </div>
            ) */}
            />
          </Item>
          <Item {...formItemLayout2} label="价格">
            {
              getFieldDecorator('jiage',{
              })(
                <Input addonBefore="￥"/>
              )
            }
          </Item>
          <Item {...formItemLayout2} label="划线价">
            {
              getFieldDecorator('huaxian',{
              })(
                <Input addonBefore="￥"/>
              )
            }
          </Item>
          <Item {...formItemLayout2} label="库存">
            {
              getFieldDecorator('kucun',{
                initialValue:100
              })(
                <InputNumber min={0} style={{width: '100%'}}/>
              )
            }
          </Item>
          
          </Form>
        </div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              <Icon type="save" />
              <span>保存，并下一步</span>
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              <Icon type="save" />
              <span>保存，并下一步</span>
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              <Icon type="check" />
              <span>完成</span>
            </Button>
          )}
        </div>
      </Card>
    )
  }
}

export default Form.create()(AddUpd)