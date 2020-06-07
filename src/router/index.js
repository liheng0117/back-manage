import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import {
  Manage,
  Login,
  LayoutPage,
  Userlist,
  Shoplist,
  Foodlist,
  Orderlist,
  Adminlist,
  Visitor,
  Edit,
  Adminset,
  Addgoods,
  Addshop,
  Explain,
} from './assembly'

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <LayoutPage {...this.props}>
            <Switch>
              <Route exact path="/manage" component={Manage} />
              <Route exact path="/manage/userList" component={Userlist} />
              <Route exact path="/manage/shopList" component={Shoplist} />
              <Route exact path="/manage/foodList" component={Foodlist} />
              <Route exact path="/manage/orderList" component={Orderlist} />
              <Route exact path="/manage/adminList" component={Adminlist} />
              <Route exact path="/manage/adminSet" component={Adminset} />
              <Route exact path="/manage/addShop" component={Addshop} />
              <Route exact path="/manage/addGoods" component={Addgoods} />
              <Route exact path="/manage/explain" component={Explain} />
              <Route exact path="/manage/visitor" component={Visitor} />
              <Route exact path="/manage/edit" component={Edit} />
              <Redirect exact path="/" to="/manage" />
            </Switch>
          </LayoutPage>
        </Switch>
      </BrowserRouter>
    )
  }
}
