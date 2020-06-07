import React, { Component } from 'react'
import './style.less'

export default class AdminSet extends Component {
  render() {
    return (
      <div className="adminSet">
        <h2>管理员信息</h2>
        <div>
          <p>姓名：</p>
          <p>注册时间：</p>
          <p>管理员权限：</p>
          <p>管理员ID：</p>
          <p>管理员头像：</p>
        </div>
      </div>
    )
  }
}
