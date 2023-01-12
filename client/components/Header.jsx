import React from "react"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id = 'header'>
      <Link to='/recipe' style={{ textDecoration: 'none' }}>
        <h1>Chef'n Up</h1>
      </Link>
    </div>
  )
}

export default Header;