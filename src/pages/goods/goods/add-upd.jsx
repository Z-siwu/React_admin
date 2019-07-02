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
  
let dataSource = []
let columns = []
  //group
//const groupData = []
  
/* 路由 */
class AddUpd extends Component{
  state = {
    loading: true,
    spec_params: [], 
    groups: [], //规格组
    current: 0,
    groupData: [],
    //columns:[],
    //dataSource: []
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
    /* this.state = {
      current: 0,
    }; */
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
  handleChangSpec = (event,key) => { 
    this.state.groups[key] = 
    {
      showParam: true,
      paramIndex:[
        {
          showValue:true
        }
      ]
    }
    this.setState({groups:this.state.groups})
    this.state.groupData[key] = {
      spec: event,
      index:key
    }
    this.setState({groupData:this.state.groupData})

    console.log(this.state.groupData)
    //console.log(this.state.groups[key].paramIndex.length)
  }
  
  //添加商品规格
  handleAddGroup = () => {
    let count = this.state.groups.length
    this.state.groups[count] = 
    {
      showParam:false
    }
    this.setState({groups:this.state.groups})
    
    //console.log(this.state.groups)
  }
  //移除商品规格
  handleCancelGroup = (key) => {
    //console.log(key)
    this.state.groups.splice(key,1)
    //console.log(this.state.groups)

    //this.setState({groups:this.state.groups})
  }
  //添加规格值
  handleAddParam = (key) => {
    let paramIndex = this.state.groups[key].paramIndex
 
    paramIndex[paramIndex.length] = {
      showValue:true
    }
    this.setState({groups:this.state.groups})
    //console.log(this.state.groups)
  }
  //选择规格值
  handleChangParam = (event,index,key) => {
    if(this.state.groupData[index].param == undefined){
      this.state.groupData[index].param  = []
    }
    this.state.groupData[index].param[key] = event 
    this.setState({groupData:this.state.groupData})
    //console.log(this.state.groupData)
    //---------------------------------------
    //获取规格名长度
    let group_cunt = this.state.groupData.length
    //获取规格值
    let paramArr = new Array()
    this.state.groupData.forEach((item,m)=>{
      paramArr[m] = item.param
    })
    //笛卡儿积
    const result = paramArr.reduce((last, el) => {
      const arr = [];
      last.forEach(e1 => {
        el.forEach(e2 => {
          arr.push(e1 + "," + e2)
        })
      })
      return arr
    });
    //拆分为数组
    let skus=[]
    result.forEach((list,m)=>{
      skus[m] = list.split(",");
    })
    
    //动态填充表格
    //let dataSource = new Array()
    skus.forEach((sku,m) => {
      dataSource[m] = {key: m}
      sku.forEach((item,n)=>{
        dataSource[m][n] = item
      }) 
    })

    //表头
    if(group_cunt){
      this.state.groupData.forEach((item,m) => {
        columns[m] = {
          title: item.spec,
          dataIndex: item.index,
          key:item.index,
        }
      })
    }
    columns[group_cunt] = {
      title: '市场价（元）',
      width: 100,
      render:(text,record,index)=>(
        <InputNumber min={0} size="small"/>
      )
    }
    columns[group_cunt+1] = {
      title: '销售价（元）',
      width: 100,
      render:(text,record,index)=>(
        <InputNumber min={0} size="small"/>
      )
    }
    columns[group_cunt+2] = {
      title: '库存',
      width: 100,
      render:(text,record,index)=>(
        <InputNumber min={1} defaultValue={100} size="small"/>
      )
    }
    columns[group_cunt+3] = {
      title: 'SKU',
      width: 120,
      render:(text,record,index)=>(
        <Input size="small"/>
      )
    }
    columns[group_cunt+4] = {
      title: '编码',
      width: 120,
      render:(text,record,index)=>(
        <Input size="small"/>
      )
    } 
    //this.setState({columns})
  }

  render(){
    const {getFieldDecorator} = this.props.form //表单
    const {spec_params,loading,current,groups } = this.state; //当前步骤
    //console.log(showGroup) 
    //console.log(columns)
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

    const showParams = (paramIndex,index)=>{
      //console.log(paramIndex)
        if(paramIndex != undefined){
          return(
            paramIndex.map((param,key) => (
              <div className="mb-10 sku_group_param_item" key={key}> 
                <Select className="ml-10" style={{ width: '150px' }}
                onChange={event => this.handleChangParam(event,index,key)}>
                  <Option value="手绘白">手绘白</Option>
                  <Option value="繁星黑">繁星黑</Option>
                  <Option value="原谅绿">原谅绿</Option>
                </Select>
                <a href="javascript:void(0)" className="sku_group_param_del">
                  <Icon type="close-circle" style={{fontSize: '15px',visibility:'hidden'}}
                   theme="twoTone"/>
                </a>
              </div>
            ))
          )
        } 
        
    }
    
    
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
              {groups.map((item,key) => (
                  <div key={key}>
                    <div className="sku_group_spec">
                      <span>规格名:</span>
                      <div className="f-c" style={{flex: '1 1 0%'}}>          
                        <Select className="ml-10" style={{ width: '150px' }} 
                        onChange={event => this.handleChangSpec(event,key)}>
                          <Option value="面板" key="0">面板</Option>
                          <Option value="底座" key="1">底座</Option>
                          <Option value="尺寸" key="2">尺寸</Option>
                          <Option value="材质" key="3">材质</Option>
                        </Select>
                        <Checkbox className="ml-10">添加规格图片</Checkbox>
                      </div>
                      <a style={{lineHeight:'1'}} 
                        href="javascript:void(0);" onClick={()=>this.handleCancelGroup(key)}>
                        <Icon type="close-circle" />
                      </a> 
                    </div>
                    <div className="sku_group_param">
                      <span style={{flexShrink: 0,lineHeight: '30px'}}>规格值:</span>
                      <div className="flex" style={{flex: '1 1 0%',flexWrap:'wrap'}}
                      style={{display:item.showParam?'block':'none'}}>
                      
                        {showParams(item.paramIndex,key)}
                        <Button icon="plus" className="mb-10 ml-10" 
                        style={{flexShrink: '0'}} onClick={() => this.handleAddParam(key)}>添加规格值</Button>
                      </div> 
                    </div>
                  </div>
                ))
              }
              </div>
              <div className="btn_sku_add_group">
                <Button type="primary" onClick={() => this.handleAddGroup()}>添加商品规格</Button>
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