import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd'
import { getLogin } from '@/actions/login'
import { connect } from 'react-redux'
import './style.less'

export default
@connect(
  (state) => {
    return {}
  },
  {
    getLogin,
  }
)
@Form.create()
class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.getLogin(values)
        message.info('登录成功')
        this.props.history.replace('/')
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login-page">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h1>elm后台管理系统</h1>
          <Form.Item>
            {getFieldDecorator('user_name', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(<Input placeholder="用户名" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(<Input type="password" placeholder="密码" />)}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
          <div className="login-foot">
            <p>温馨提示：</p>
            <p>未登录过的新用户，自动注册</p>
            <p>注册过的用户可凭账号密码登录</p>
          </div>
        </Form>
      </div>
    )
  }
}
