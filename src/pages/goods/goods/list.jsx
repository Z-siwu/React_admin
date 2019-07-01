import React,{Component} from 'react'
import {Card,Select,Input,Button,Icon,Table,Divider,message} from 'antd'
import {reqGoods} from '../../../api'

const Option = Select.Option
/* 路由 */
export default class List extends Component{

  state = {
    loading: true,
    goods: [],
  }

  //初始化表列
  initColumns = () =>{
    this.columns = [
      {
        title: '序号',        
        width:80,        
        render:(text,record,index)=>`${index+1}`
        
      },
      {
        title: '商品名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '编码',
        dataIndex: 'spu_no',
        key: 'spu_no',
      },
      {
        title: '分类',
        dataIndex: 'category',
        key: 'category',
      },
      {
        title: '销售价',
        dataIndex: 'sell_price',
        key: 'sell_price',
      },
      {
        title: '促销价',
        dataIndex: 'market_price',
        key: 'market_price',
      },
      /* {
        title: '库存',
        dataIndex: 'sort',
        key: 'sort',
      }, */
      {
        title: '上架',
        dataIndex: 'is_saleable',
        key: 'is_saleable',
      },
      /* {
        title: '模型',
        dataIndex: 'is_saleable',
        key: 'is_saleable',
      }, */
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;" onClick={() => this.showUpd(record)}>编辑</a>
            <Divider type="vertical" />
            <a href="javascript:;">删除</a>
          </span>
        ),
      },
    ];
  }

  //为第一次render准备数据
  componentWillMount(){
    this.initColumns()
  }

  getGoods = async () => {
    this.setState({loading: true})
    const result = await reqGoods()
    this.setState({loading: false})
    if(result.status){
      const goods = result.data
      this.setState({
        goods
      })      
      //message.error('获取分类列表失败')
    }else{      
      message.error('获取分类列表失败')
    }
  }

  //异步请求
  componentDidMount(){
    this.getGoods()
  }
  
  render(){
    const {goods,loading} = this.state 

    //Card右侧
    const extra = (
      <Button type="primary" onClick={() => this.props.history.push('/goods/list/add_upd')}>
        <Icon type="plus" />
        添加
      </Button>
    )

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    return(
      <Card title="商品列表" bordered={false} extra={extra}> 
        <Table 
          columns={this.columns} 
          rowSelection={rowSelection} 
          dataSource={goods} 
          rowKey='id'
          loading={loading}
          defaultExpandedRowKeys={[1]}
        />
      </Card>
    )
  }
}