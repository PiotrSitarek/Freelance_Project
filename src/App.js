import React from 'react';
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
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

          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
