import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ username, password });
  };

  const loginContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0', // Color de fondo
  };


  const loginFormStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    marginBottom: '15px',
    padding: '8px',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    backgroundColor: '#f50057',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px',
    cursor: 'pointer',
  };
  

  return (
    
    <div style={loginContainerStyle}>
      <div style={loginFormStyle}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
