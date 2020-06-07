import React, { Component } from 'react'
import './style.less'

export default class Explain extends Component {
  render() {
    return (
      <div className="explain">
        <p>node-elm后台管理系统</p>
        <p>第一次登陆的用户自动注册成为普通管理员</p>
        <p>普通管理员可以添加，修改信息</p>
        <p>超级管理员可以删除信息</p>
      </div>
    )
  }
}
