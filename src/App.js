import React, { useState, useMemo } from 'react';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import LogoutPage from './components/LogoutPage';
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GiveClothes from './components/GiveClothes';
import { UserContext } from './components/UserContext';
// // json-server --watch database.json



function App() {
  const [value, setValue] = useState([])
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue])
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/RegistrationPage' component={RegistrationPage} />
          <Route path='/LogoutPage' component={LogoutPage} />
          <UserContext.Provider value={providerValue}>
            <Switch>
              <Route path='/LoginPage' component={LoginPage} />
              <Route path='/GiveClothes' component={GiveClothes} />
              <Route component={PageNotFound} />
            </Switch>
          </UserContext.Provider>


        </Switch>
      </HashRouter>

    </>
  );
}

export default App;
