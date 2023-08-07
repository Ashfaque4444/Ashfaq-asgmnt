
import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const usenavigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    alert('login successful');
    localStorage.setItem('name', username); 
   usenavigate('/dashboard');
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p className="error">{errorMessage}</p>
    </div>
  );
}

export default Login;