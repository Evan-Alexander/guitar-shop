import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './styles.css';

import Layout from './hoc/layout';
import Auth from './hoc/Auth';

// Public Routes
import Home from './components/Home';
import RegisterLogin from './components/Register_login';
import Register from './components/Register_login/Register';
import Shop from './components/Shop';
import ProductDetail from './components/Product';

import ResetUser from './components/Reset_user';
import ResetPassword from './components/Reset_user/reset_password';

// Authenticated Routes
import UserDashboard from './components/User';
import AddProduct from './components/User/Admin/add_product';
import ManageCategories from './components/User/Admin/manage_categories';
import UserCart from './components/User/cart';
import UpdateProfile from './components/User/update_profile';
import ManageSite from './components/User/Admin/manage_site';

import PageNotFound from './components/utils/page_not_found';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)} />
        <Route path="/user/cart" exact component={Auth(UserCart, true)} />
        <Route path="/user/user_profile" exact component={Auth(UpdateProfile,true)}/>
        
        <Route path="/admin/add_product" exact component={Auth(AddProduct, true)} />
        <Route path="/admin/manage_categories" exact component={Auth(ManageCategories, true)} />
        <Route path="/admin/site_info" exact component={Auth(ManageSite, true)} />

        <Route path="/reset_password/:token" exact component={Auth(ResetPassword, false)} />
        <Route path="/reset_user" exact component={Auth(ResetUser, false)} />
 
        <Route path="/product_detail/:id" exact component={Auth(ProductDetail, null)} />
        <Route path="/register" exact component={Auth(Register, false)} />
        <Route path="/register_login" exact component={Auth(RegisterLogin, false)} />
        <Route path="/shop" exact component={Auth(Shop, null)} />
        <Route path="/" exact component={Auth(Home, null)} />
        <Route component={Auth(PageNotFound)} />
      </Switch>
    </Layout>

  )
}

export default Routes;