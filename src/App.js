/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import Contact from './components/views/Contact/Contact';
import { Login } from './components/views/Login/Login';
import { Product } from './components/views/Product/Product';
import { CartPage } from './components/views/CartPage/CartPage';
import { SummaryPage } from './components/views/SummaryPage/SummaryPage';
import { NotFound } from './components/views/NotFound/NotFound';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/product/:_id`} component={Product} />
          <Route exact path={`${process.env.PUBLIC_URL}/cart`} component={CartPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/summary`} component={SummaryPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/logout`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/auth/google/callback`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
          <Route exact path={`${process.env.PUBLIC_URL}*`} component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };
