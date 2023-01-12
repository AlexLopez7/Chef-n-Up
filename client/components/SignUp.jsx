import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    console.log('sign up button clicked')
    navigate('/recipe');
  }

  return (
    <form className="signup">
      <h2>Sign Up</h2>
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

      <button onClick={handleSubmit}>Sign Up</button>
    </form>
  )
}

export default SignUp;