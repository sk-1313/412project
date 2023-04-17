// LoginPage.js
import React from 'react';

function LoginPage(props) {
  const { onCreateAccountClick } = props;

  const handleLoginClick = () => {
    // Handle login logic
  }

  return (
    <div className="login-page">
      <h1>Photo Sharing App</h1>
      <div className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="login-btn" onClick={handleLoginClick}>Login</button>
      </div>
      <button className="create-account-btn" onClick={onCreateAccountClick}>Create Account</button>
    </div>
  );
}

export default LoginPage;