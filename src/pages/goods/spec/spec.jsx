import React,{Component} from 'react'
import {Card,Table,Icon,Divider, message} from 'antd'
import {reqSpecTree} from '../../../api'

/* 路由 */
export default class Spec extends Component{
  state = {
    loading: false,
    specs: [],
  }

  //初始化表列
  initColumns = () =>{
    this.loading = true;
    this.columns = [
      {
        title: '序号',        
        width:80,        
        render:(text,record,index)=>`${index+1}`
        
      },
      {
        title: '规格名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '显示名',
        dataIndex: 'display_name',
        key: 'sort',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:0;">
              <Icon type="form" /> 
              <span>编辑</span>
            </a>
            <Divider type="vertical" />
            <a href="javascript:0;">
              <Icon type="delete" /> 
              <span>删除</span>
            </a>
          </span>
        ),
      },
    ];
  }

  //为第一次render准备数据
  componentWillMount(){
    this.initColumns()
  }

  getSpecs = async () => {
    this.setState({loading: true})
    const result = await reqSpecTree()
    this.setState({loading: false})
    if(result.status){
      const specs = result.data
      this.loading = false;
      this.setState({
        specs
      })      
      //message.error('获取分类列表失败')
    }else{      
      this.loading = false;
      message.error('获取规格列表失败')
    }
  }

  //异步请求
  componentDidMount(){
    this.getSpecs()
  }

  render(){
    const {specs,loading} = this.state   
    

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
      <Card title="规格列表" bordered={false}> 
        <Table 
          columns={this.columns} 
          dataSource={specs} 
          rowSelection={rowSelection} 
          rowKey='id'
          loading={loading}
          pagination={{defaultPageSize:5,showQuickJumper:true}}
        />
      </Card>
    )
  }
}