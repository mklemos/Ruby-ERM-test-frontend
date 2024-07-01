// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountList from './components/AccountList';
import ProductList from './components/ProductList';
import { getCsrfToken } from './axiosConfig';

const App = () => {
  useEffect(() => {
    getCsrfToken();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/accounts" component={AccountList} />
        <Route path="/products" component={ProductList} />
      </Switch>
    </Router>
  );
};

export default App;
