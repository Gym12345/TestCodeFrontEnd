// LoginComponent.js
import React, { useState } from 'react';

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();
    alert(`Logging in with:  ${username} ${password}`);
    try {
      const response = await fetch('http://localhost:8090/Gymapp/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Handle successful login here, e.g., redirect user to dashboard
      alert('Login successful');
    } catch (error) {
      alert('Login failed. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginComponent;
