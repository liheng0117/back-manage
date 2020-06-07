import React, { Component } from 'react'
import {
  Form,
  Input,
  Button,
  Select,
  Switch,
  InputNumber,
  TimePicker,
  Upload,
  Icon,
  message,
} from 'antd'
import { getCity } from '@/actions/addshop'
import { connect } from 'react-redux'
import './style.less'

const format = 'HH:mm'
const { Option } = Select
function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

export default
@Form.create({})
@connect(
  (state) => {
    return {
      hotCity: state.addshop.hotCity,
    }
  },
  {
    getCity,
  }
)
class AddShop extends Component {
  state = {
    loading: false,
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
        })
      )
    }
  }
  componentDidMount() {
    this.props.getCity()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    const { imageUrl } = this.state
    return (
      <div>
        <Form
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 10 }}
          onSubmit={this.handleSubmit}
        >
          <Form.Item label="店铺名称">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入店铺名称' }],
            })(<Input placeholder="请输入店铺名称" />)}
          </Form.Item>

          <Form.Item label="详细地址" hasFeedback>
            {getFieldDecorator('city', {
              rules: [
                { required: true, message: 'Please select your country!' },
              ],
            })(
              <Select placeholder="请选择城市">
                {this.props.hotCity.map((v) => {
                  return (
                    <Option key={v.latitude} value={v.name}>
                      {v.name}
                    </Option>
                  )
                })}
              </Select>
            )}
          </Form.Item>

          <Form.Item label="联系电话">
            {getFieldDecorator('tel', {
              rules: [{ required: true, message: '请输入联系电话' }],
            })(<Input placeholder="请输入联系电话" />)}
          </Form.Item>

          <Form.Item label="店铺简介">
            {getFieldDecorator('Introduction')(<Input />)}
          </Form.Item>

          <Form.Item label="店铺标语">
            {getFieldDecorator('slogan')(<Input />)}
          </Form.Item>

          <Form.Item label="店铺分类" hasFeedback>
            {getFieldDecorator('category')(
              <Select placeholder="请选择">
                <Option value="餐馆1">餐馆1</Option>
                <Option value="餐馆2">餐馆2</Option>
                <Option value="餐馆3">餐馆3</Option>
                <Option value="餐馆4">餐馆4</Option>
              </Select>
            )}
          </Form.Item>

          <Form.Item label="店铺特点">
            {getFieldDecorator('switch')(
              <div className="switch-span">
                <span>品牌保证</span> <Switch defaultChecked />
                <span>准时达</span> <Switch defaultChecked />
                <br />
                <span> 新店开业</span> <Switch defaultChecked />
                <span>外卖保</span> <Switch defaultChecked />
                <br />
                <span>蜂鸟专送</span> <Switch defaultChecked />
                <span>开发票</span> <Switch defaultChecked />
              </div>
            )}
          </Form.Item>

          <Form.Item label="配送费">
            {getFieldDecorator('delivery', { initialValue: 2 })(
              <InputNumber min={1} max={10} />
            )}
          </Form.Item>

          <Form.Item label="起送费">
            {getFieldDecorator('lowDelivery', { initialValue: 20 })(
              <InputNumber min={20} max={100} />
            )}
          </Form.Item>

          <Form.Item label="营业时间">
            <Form.Item style={{ display: 'inline-block' }}>
              {getFieldDecorator('start')(
                <TimePicker format={format} placeholder="起始时间" />
              )}
            </Form.Item>
            <span style={{ display: 'inline-block', padding: '0 10px' }}></span>
            <Form.Item style={{ display: 'inline-block' }}>
              {getFieldDecorator('end')(
                <TimePicker format={format} placeholder="结束时间" />
              )}
            </Form.Item>
          </Form.Item>

          <Form.Item label="上传店铺头像">
            {getFieldDecorator('update', {
              valuePropName: 'update',
            })(
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            )}
          </Form.Item>

          <Form.Item label="优惠活动" hasFeedback>
            {getFieldDecorator('discount')(
              <Select placeholder="请选择">
                <Option value="满减优惠">满减优惠</Option>
                <Option value="优惠大酬宾">优惠大酬宾</Option>
                <Option value="新用户立减">新用户立减</Option>
                <Option value="进店领劵">进店领劵</Option>
              </Select>
            )}
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 7 }}>
            <Button type="primary" htmlType="submit">
              立即创建
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
