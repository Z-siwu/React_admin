import React,{Component} from 'react'
import {Card,Form,Select,InputNumber,Input,Steps,Button,Icon,Table,Divider,message,Checkbox} from 'antd'
import {reqSpecParam} from '../../../api'
import './add-upd.less'
/* import { SKU } from 'zent'
import 'zent/css/sku.css' */

const { Option } = Select;
const Item = Form.Item
const { Step } = Steps;

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
  ];

  /* const skuTree = [
    {
      id: 10740,
      text: '颜色',
    },
    {
      id: 40732,
      text: '尺寸',
    },
  ];
  
  const sku = [
    {
      id: 3,
      text: '蓝色',
    },
    {
      id: 10,
      text: '红色',
    },
    {
      id: 30,
      text: '土豪金',
    },
    {
      id: 137,
      text: '黑色',
    },
    {
      id: 138,
      text: '灰色',
    },
  ]; */

  
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
        sm: { span: 18 },
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
            <Input placeholder="商品名" />
              )
            }
            </Item>
            
          <div style={{background:'#f8f8f8',padding:'10px',margin:'10px 0',fontWeight:'700'}}>
            SKU价格库存
          </div>
          <Item {...formItemLayout1} label="商品规格">
            {/* <SKU
              showSKULabel
              onFetchGroup={this.fetchSKUTree}
              onFetchSKU={this.fetchSKU}
            /> */}
            <Card type="inner" className="card_sku_group">
              {/*  extra={} */}
              <div>
                <div className="sku_group_spec">
                  
                  <span>规格名:</span>
                  <div className="f-c" style={{flex: '1 1 0%'}}>
                    <Select className="ml-10" defaultValue="lucy" style={{ width: '150px' }}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Checkbox onChange={''} className="ml-10">添加规格图片</Checkbox>
                  </div>
                  <a style={{lineHeight:'1'}}>
                    <Icon type="close-circle"/>
                  </a> 
                </div>
                <div className="sku_group_param">
                  <span>规格值:</span>
                  <div className="flex" style={{flex: '1 1 0%',flexWrap:'wrap'}}>
                    <div className="mr-10 mb-10 sku_group_param_item">
                      <Select className="ml-10" defaultValue="lucy" style={{ width: '150px' }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                          Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                      </Select>
                    </div>
                    <Button icon="plus" className="mb-10" style={{flexShrink: '0',float:'left'}}>添加规格值</Button>
                  </div>
                </div>
                <div className="but_sku_add_group">
                  <Button type="primary">添加商品规格</Button>
                </div>
              </div>
            </Card>
          </Item>
          <Item {...formItemLayout1} label="规格明细">
            
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