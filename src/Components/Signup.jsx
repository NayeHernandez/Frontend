import React, { useState } from 'react';

const Register = ({ handleRegister }) => {
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
    handleRegister({ username, password });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0', // Color de fondo
    fontFamily: 'Arial, sans-serif',
    color: 'black', // Color del texto
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    maxWidth: '300px',
  };

  const inputStyle = {
    width: '100%',
    margin: '5px 0',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    margin: '10px 0',
    padding: '8px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#0077be', // Color de fondo para el botón
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Register</h2>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
