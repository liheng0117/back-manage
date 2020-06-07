import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { Link } from 'react-router-dom'
import './style.less'

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1776886_ptbgvlboqif.js', // 在 iconfont.cn 上生成
})
const { SubMenu } = Menu
const { Content, Sider } = Layout
const breadcrumbNameMap = {
  '/manage': '首页',
  '/manage/userList': '数据管理 / 用户列表',
  '/manage/shopList': '数据管理 / 商品列表',
  '/manage/foodList': '数据管理 / 食品列表',
  '/manage/orderList': '数据管理 / 订单列表',
  '/manage/adminList': '数据管理 / 管理员列表',
  '/manage/visitor': '图表 / 用户分布',
  '/manage/edit': '编辑 / 文本编辑',
  '/manage/adminSet': '设置 / 管理员设置',
  '/manage/addShop': '添加数据 / 添加商铺',
  '/manage/addGoods': '添加数据 / 添加商品',
  '/manage/explain': '说明 / 说明',
}

export default class LayoutPage extends Component {
  render() {
    const { location } = this.props
    const pathSnippets = location.pathname.split('/').filter((i) => i)
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      )
    })
    return (
      <div className="layout-page">
        <Layout>
          <Layout>
            <Sider width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['0']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key="0">
                  <Link to="/manage">
                    <MyIcon type="iconshouyex" />
                    首页
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <MyIcon type="iconcafe" />
                      数据管理
                    </span>
                  }
                >
                  <Menu.Item key="1">
                    <Link to="/manage/userList">用户列表</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/manage/shopList">商家列表</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/manage/foodList">食品列表</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/manage/orderList">订单列表</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/manage/adminList">管理员列表</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <MyIcon type="iconjia1" />
                      添加数据
                    </span>
                  }
                >
                  <Menu.Item key="6">
                    <Link to="/manage/addShop">添加商铺</Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <Link to="/manage/addGoods">添加商品</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <MyIcon type="iconshoucang" />
                      图表
                    </span>
                  }
                >
                  <Menu.Item key="8">
                    <Link to="/manage/visitor">用户分布</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <MyIcon type="icontubiao09" />
                      编辑
                    </span>
                  }
                >
                  <Menu.Item key="9">
                    <Link to="/manage/edit">文本编辑</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub6"
                  title={
                    <span>
                      <MyIcon type="iconshezhi2" />
                      设置
                    </span>
                  }
                >
                  <Menu.Item key="10">
                    <Link to="/manage/adminSet">管理员设置</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub7"
                  title={
                    <span>
                      <MyIcon type="icon-shuoming" />
                      说明
                    </span>
                  }
                >
                  <Menu.Item key="11">
                    <Link to="/manage/explain">说明</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                {extraBreadcrumbItems}
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}
