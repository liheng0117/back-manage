import React, { Component } from 'react'
import { getShop } from '@/actions/shoplist'
import { connect } from 'react-redux'
import { Table, Divider, Button, Pagination } from 'antd'
import './style.less'

export default
@connect(
  (state) => {
    return {
      shopData: state.shoplist.shopData,
    }
  },
  {
    getShop,
  }
)
class Shoplist extends Component {
  state = {
    current: 1,
  }
  onChange = (page, pageSize) => {
    this.props.getShop(page * 10)
    this.setState({
      current: page,
    })
  }
  componentDidMount() {
    this.props.getShop(0)
  }
  columns = [
    {
      title: '店铺名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '店铺地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '店铺介绍',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="link">Link</Button>
          <Divider type="vertical" />
          <Button type="link">Delete</Button>
        </span>
      ),
    },
  ]
  render() {
    const { shopData } = this.props
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={shopData instanceof Array ? shopData : []}
          pagination={false}
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
