import React, { Component } from 'react'
import { getAdmin } from '@/actions/adminlist'
import { connect } from 'react-redux'
import { Table, Pagination } from 'antd'
import './style.less'

export default
@connect(
  (state) => {
    return {
      adminData: state.adminlist.adminData,
    }
  },
  {
    getAdmin,
  }
)
class Admin extends Component {
  state = {
    current: 1,
  }
  componentDidMount() {
    this.props.getAdmin(0)
  }
  onChange = (page, pageSize) => {
    this.props.getAdmin(page * 10)
    this.setState({
      current: page,
    })
  }
  columns = [
    {
      title: '姓名',
      dataIndex: 'user_name',
      key: 'user_name',
    },
    {
      title: '注册日期',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: '地址',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: '权限',
      dataIndex: 'admin',
      key: 'admin',
    },
  ]
  render() {
    const { adminData } = this.props
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={adminData instanceof Array ? adminData : []}
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
