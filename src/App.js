import React from 'react';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import LoginPage from './components/LoginPage/LoginPage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import LogoutPage from './components/LogoutPage/LogoutPage';
import { HashRouter, Switch, Route } from "react-router-dom";
import GiveClothes from './components/GiveClothes/GiveClothes';
import AdminPanel from './components/AdminPanel/AdminPanel'
// // json-server --watch database.json
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/RegistrationPage' component={RegistrationPage} />
        <Route path='/LogoutPage' component={LogoutPage} />
        <Route path='/LoginPage' component={LoginPage} />
        <Route path='/GiveClothes' component={GiveClothes} />
        <Route path='/AdminPanel' component={AdminPanel} />
        <Route component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
