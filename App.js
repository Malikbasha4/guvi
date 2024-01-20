import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <PrivateRoute path="/profile" component={Profile} isLoggedIn={isLoggedIn} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default App;
