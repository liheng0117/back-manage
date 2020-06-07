import Loadable from '../components/Loadable'

const LayoutPage = Loadable(() => import('@@/LayoutPage'))
const Manage = Loadable(() => import('@/pages/manage'))
const Login = Loadable(() => import('@/pages/login'))
const Userlist = Loadable(() => import('@/pages/userlist'))
const Shoplist = Loadable(() => import('@/pages/shoplist'))
const Foodlist = Loadable(() => import('@/pages/foodlist'))
const Orderlist = Loadable(() => import('@/pages/orderlist'))
const Adminlist = Loadable(() => import('@/pages/adminlist'))
const Visitor = Loadable(() => import('@/pages/visitor'))
const Edit = Loadable(() => import('@/pages/edit'))
const Adminset = Loadable(() => import('@/pages/adminset'))
const Addshop = Loadable(() => import('@/pages/addshop'))
const Addgoods = Loadable(() => import('@/pages/addgoods'))
const Explain = Loadable(() => import('@/pages/explain'))

export {
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
  Addshop,
  Addgoods,
  Explain,
}
