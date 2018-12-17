import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './styles.scss';

import Layout from './hoc/layout';
import Home from './components/Home';
import RegisterLogin from './components/Register_login';
import Register from './components/Register_login/Register';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/register_login" exact component={RegisterLogin} />

        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>

  )
}

export default Routes;