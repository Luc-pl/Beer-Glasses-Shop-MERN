/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Login } from './components/views/Login/Login';
import { Product } from './components/views/Product/Product';
import { CartPage } from './components/views/CartPage/CartPage';
import { Summary } from './components/views/Summary/Summary';
import { NotFound } from './components/views/NotFound/NotFound';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/product/:_id`} component={Product} />
          <Route exact path={`${process.env.PUBLIC_URL}/cart`} component={CartPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/summary`} component={Summary} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/logout`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}*`} component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };
