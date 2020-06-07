import React, { Component } from 'react'
import { Table, Button, Divider, Pagination } from 'antd'
import { getFoods } from '@/actions/foodlist'
import { connect } from 'react-redux'
import './style.less'

export default
@connect(
  (state) => {
    return {
      foodData: state.foodlist.foodData,
    }
  },
  {
    getFoods,
  }
)
class Foods extends Component {
  state = {
    current: 1,
  }
  componentDidMount() {
    this.props.getFoods(0)
  }
  onChange = (page, pageSize) => {
    this.props.getFoods(page * 10)
    this.setState({
      current: page,
    })
  }
  columns = [
    { title: '食品名称', dataIndex: 'name', key: 'name' },
    { title: '食品介绍', dataIndex: 'description', key: 'description' },
    { title: '评分', dataIndex: 'rating', key: 'rating' },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: (text, record) => (
        <span>
          <Button>编辑</Button>
          <Divider type="vertical" />
          <Button type="danger">删除</Button>
        </span>
      ),
    },
  ]
  render() {
    const { foodData } = this.props
    return (
      <div>
        <Table
          columns={this.columns}
          pagination={false}
          expandedRowRender={(record) => (
            <ul className="row-food">
              <li>
                <span>食品名称</span>
                {record.name}
              </li>
              <li>
                <span>餐馆名称</span>
                {record.name}
              </li>
              <li>
                <span>食品ID</span>
                {record.key}
              </li>
              <li>
                <span>餐馆ID</span>
                {record.name}
              </li>
              <li>
                <span>食品介绍</span>
                {record.description}
              </li>
              <li>
                <span>餐馆地址</span>
                {record.address}
              </li>
              <li>
                <span>食品评分</span>
                {record.rating}
              </li>
              <li>
                <span>食品分类</span>
                {record.category}
              </li>
              <li>
                <span>月销量</span>
                {record.rating_count}
              </li>
            </ul>
          )}
          dataSource={foodData instanceof Array ? foodData : []}
        />
        <Pagination
          defaultCurrent={1}
          total={500}
          pageSize={10}
          current={this.state.current}
          onChange={(page, pageSize) => this.onChange(page, pageSize)}
        />
      </div>
    )
  }
}
