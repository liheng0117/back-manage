import React, { Component } from 'react'
import { getUsers } from '@/actions/userlist'
import { connect } from 'react-redux'
import { Table, Pagination } from 'antd'
import './style.less'

export default
@connect(
  (state) => {
    return {
      userData: state.userlist.userData,
    }
  },
  {
    getUsers,
  }
)
class Userlist extends Component {
  state = {
    current: 1,
  }
  componentDidMount() {
    this.props.getUsers(0)
  }
  onChange = (page, pageSize) => {
    this.props.getUsers(page * 10)
    this.setState({
      current: page,
    })
  }
  columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '注册日期',
      dataIndex: 'registe_time',
      key: 'registe_time',
    },
    {
      title: '用户姓名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '地址',
      dataIndex: 'city',
      key: 'city',
    },
  ]
  render() {
    const { userData } = this.props
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={userData instanceof Array ? userData : []}
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
