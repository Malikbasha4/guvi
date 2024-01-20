import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const history = useHistory();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    history.push('/profile');
  };

  return (
    <div className="container">
      <img src="./download1.png" alt="Logo" className="logo" />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account yet? <Link to="/signup">Sign Up</Link>.</p>
      <p>Forgot your password? <Link to="/profile">Reset Password</Link>.</p>
    </div>
  );
};

export default Login;
