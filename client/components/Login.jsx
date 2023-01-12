import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    console.log('sign in button clicked', username, password)
    navigate('/recipe');
  }

  function redirectSignup(e) {
    e.preventDefault()
    console.log('redirect to sign up page')
    navigate('/signup');
  }

  return (
    <form className="login">
      <h2>Sign In</h2>
      <label>Username</label>
      <input 
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      <label>Password</label>
      <input 
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button onClick={handleSubmit}>Sign In</button>
      <button onClick={redirectSignup}>Sign Up</button>
    </form>
  )
}

export default Login;