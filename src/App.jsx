import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import LoginPage from './component/LoginPage/LoginPage'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
