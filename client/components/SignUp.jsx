import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    const user = {username, password};

    console.log('sign up button clicked')
    // navigate('/recipe');
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(data => data.json())
    .then(user => console.log(user))
    .catch(err => console.log(err));
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