import React, { Component } from 'react'
import { Table, Pagination } from 'antd'
import { getOrder } from '@/actions/orderlist'
import { connect } from 'react-redux'
import './style.less'

export default
@connect(
  (state) => {
    return {
      orderData: state.orderlist.orderData,
    }
  },
  {
    getOrder,
  }
)
class Order extends Component {
  state = {
    current: 1,
  }
  componentDidMount() {
    this.props.getOrder(0)
  }
  onChange = (page, pageSize) => {
    this.props.getOrder(page * 10)
    this.setState({
      current: page,
    })
  }
  columns = [
    { title: '订单ID', dataIndex: 'unique_id', key: 'unique_id' },
    { title: '总价格', dataIndex: 'total_amount', key: 'total_amount' },
    {
      title: '订单状态',
      dataIndex: 'status_bar.title',
      key: 'status_bar.title',
    },
  ]
  render() {
    const { orderData } = this.props
    return (
      <div>
        <Table
          columns={this.columns}
          pagination={false}
          expandedRowRender={(record) => (
            <ul className="row-food">
              <li>
                <span>用户名</span>
                {record.restaurant_name}
              </li>
              <li>
                <span>店铺名称</span>
                {record.time_pass}
              </li>
              <li>
                <span>收货地址</span>
                {record.key}
              </li>
              <li>
                <span>店铺ID</span>
                {record.id}
              </li>
              <li>
                <span>店铺地址</span>
                {record.restaurant_id}
              </li>
            </ul>
          )}
          dataSource={orderData instanceof Array ? orderData : []}
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
