import React from 'react';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import LogoutPage from './components/LogoutPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GiveClothes from './components/GiveClothes';

// // json-server --watch database.json

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/LoginPage' component={LoginPage} />
          <Route path='/RegistrationPage' component={RegistrationPage} />
          <Route path='/LogoutPage' component={LogoutPage} />
          <Route path='/GiveClothes' component={GiveClothes} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
