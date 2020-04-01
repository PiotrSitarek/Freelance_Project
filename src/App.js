import React from 'react';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import LoginPage from './components/LoginPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/LogIn' component={LogIn}/> 
          <Route path='/Register' component={Register}/> buttony Zaloguj i załóż konto */}
          <Route path='/LoginPage' component={LoginPage} />

          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
