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
    e.preventDefault(); // Prevents the default form submission behavior

    // Perform login logic (replace this with your actual authentication logic)
    // For demonstration purposes, we'll consider a successful login
    onLogin();
    history.push('/profile'); // Redirect to the profile page
  };

  return (
    <div className="container">
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
