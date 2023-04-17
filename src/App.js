// App.js
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import CreateAccountPage from './CreateAccountPage';
import './App.css';

function App() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const handleCreateAccountClick = () => {
    setIsLoginPage(false);
  }

  const handleLoginClick = () => {
    setIsLoginPage(true);
  }

  return (
    <div className="App">
      {isLoginPage ? (
        <LoginPage onCreateAccountClick={handleCreateAccountClick} />
      ) : (
        <CreateAccountPage onLoginClick={handleLoginClick} />
      )}
    </div>
  );
}

export default App;
