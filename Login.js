import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account yet? <Link to="/signup">Sign Up</Link>.</p>
      <p>Forgot your password? <Link to="/profile">Reset Password</Link>.</p>
    </div>
  );
};

export default Login;
