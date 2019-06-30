import React,{Component} from 'react'
import {Card,Table,Button,Icon,Divider, message,Modal} from 'antd'
import {reqCategoryTree,reqAddCategory,reqUpdCategory} from '../../../api'
import AddForm from './add-form'
import UpdForm from './upd-form'

/* 路由 */
export default class Category extends Component{
  state = {
    loading: true,
    categorys: [],
    showStatus: 0,//控制是否显示模态框 不显示[0]、添加[1]、更新[2]
  }

  //初始化表列
  initColumns = () =>{
    this.columns = [
      {
        title: '类名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '排序',
        dataIndex: 'sort',
        key: 'sort',
      },
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

  getCategorys = async () => {
    this.setState({loading: true})
    const result = await reqCategoryTree()
    this.setState({loading: false})
    if(result.status){
      const categorys = result.data
      this.setState({
        categorys
      })      
      //message.error('获取分类列表失败')
    }else{      
      message.error('获取分类列表失败')
    }
  }

  //异步请求
  componentDidMount(){
    this.getCategorys()
  }

  //添加分类
  addCategory = () => {
    
  }
  //编辑分类
  updCategory = async () => {
    //1.隐藏模态框
    this.setState({
      showStatus: 0
    })
    //清除输入数据
    this.form.resetFields()
    //2.发请求更新
    const result = await reqUpdCategory(this.form.getFieldsValue)
    if(result.status){
      //3.重新显示列表
      this.getCategorys()
    }
    
  }
  //取消模态框
  handleCancel = () => {
    this.form.resetFields()
    this.setState({
      showStatus:0
    })
  }

  //显示添加的确认框
  showAdd = () => {
    this.setState({
      showStatus: 1
    })
  }

  //显示添加的确认框
  showUpd = (record) => { 
    //console.log(record)
    this.category = record
    this.setState({
      showStatus: 2
    })
  }

  getMapCategory = (categorys) => {
    let categoryTree
    return categorys.map(item => { 
      if(!item.children){
        categoryTree = {
          title: item.name,
          value: item.id,
          key: item.id,
        }
      }else{
        categoryTree = {
          title: item.name,
          value: item.id,
          key: item.id,
          children: this.getMapCategory(item.children)
        }        
      }
      return categoryTree;
    })
  }

  

  render(){
    const {categorys,loading,showStatus} = this.state
    const category = this.category
    const categoryTree = this.getMapCategory(categorys)
    //Card右侧
    const extra = (
      <Button type="primary" onClick={this.showAdd}>
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
      <Card title="分类列表" bordered={false} extra={extra}> 
        <Table 
          columns={this.columns} 
          rowSelection={rowSelection} 
          dataSource={categorys} 
          rowKey='id'
          loading={loading}
          defaultExpandedRowKeys={[1,2]}
        />

        <Modal
          title="添加分类"
          visible={showStatus === 1}
          onOk={this.addCategory}
          onCancel={this.handleCancel}
        > 
        <AddForm categoryTree={categoryTree} />
        </Modal>

        <Modal
          title="编辑分类"
          visible={showStatus === 2}
          onOk={this.updCategory}
          onCancel={this.handleCancel}
        > 
        <UpdForm categoryTree={categoryTree} category={category} 
          setForm={(form) => {this.form = form}} 
        />
        </Modal>

      </Card>
    )
  }
}