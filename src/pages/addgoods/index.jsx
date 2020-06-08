import React, { Component } from 'react'
import {
  Form,
  Select,
  Input,
  message,
  Icon,
  Upload,
  Radio,
  InputNumber,
  Button,
} from 'antd'
import { getFoods } from '@/actions/addgoods'
import { connect } from 'react-redux'
import './style.less'

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
      foodsType: state.addgoods.foodsType,
    }
  },
  {
    getFoods,
  }
)
class AddGoods extends Component {
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
    this.props.getFoods()
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
          <Form.Item label="食品种类" hasFeedback>
            {getFieldDecorator('city', {
              rules: [
                { required: true, message: 'Please select your country!' },
              ],
            })(
              <Select placeholder="请选择">
                {this.props.foodsType.map((v) => {
                  return (
                    <Option key={v.id} value={v.title}>
                      {v.title}
                    </Option>
                  )
                })}
              </Select>
            )}
          </Form.Item>

          <Form.Item label="食品名称">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入食品名称' }],
            })(<Input placeholder="请输入食品名称" />)}
          </Form.Item>

          <Form.Item label="食品活动">
            {getFieldDecorator('slogan')(<Input />)}
          </Form.Item>

          <Form.Item label="食品详情">
            {getFieldDecorator('detail')(<Input />)}
          </Form.Item>

          <Form.Item label="上传食品照片">
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

          <Form.Item label="食品特点" hasFeedback>
            {getFieldDecorator('category')(
              <Select placeholder="请选择">
                <Option value="新品">新品</Option>
                <Option value="招牌">招牌</Option>
              </Select>
            )}
          </Form.Item>

          <Form.Item label="食品规格">
            {getFieldDecorator('radio-group')(
              <Radio.Group>
                <Radio value="单规格">单规格</Radio>
                <Radio value="多规格">多规格</Radio>
              </Radio.Group>
            )}
          </Form.Item>

          <Form.Item label="包装费">
            {getFieldDecorator('delivery', { initialValue: 0 })(
              <InputNumber min={0} max={100} />
            )}
          </Form.Item>

          <Form.Item label="价格">
            {getFieldDecorator('price', { initialValue: 20 })(
              <InputNumber min={0} max={1000} />
            )}
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 7 }}>
            <Button type="primary" htmlType="submit">
              确认添加食品
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
