// CreateAccountPage.js
import React from 'react';

function CreateAccountPage(props) {
  const { onLoginClick } = props;

  const handleCreateAccountClick = () => {
    // Handle create account logic
  }

  return (
    <div className="create-account-page">
      <h1>Create Account</h1>
      <div className="create-account-form">
        <div className="form-group">
          <label htmlFor="first-name">First Name:</label>
          <input type="text" id="first-name" name="first-name" />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="create-account-btn" onClick={handleCreateAccountClick}>Submit</button>
      </div>
      <button className="login-btn" onClick={onLoginClick}>Back to Login</button>
    </div>
  );
}

export default CreateAccountPage;