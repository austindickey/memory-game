import React from "react"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Logo
      </a>

      <div className="scores">
        <ul>
          <li>Current Score: </li>
          <li>Best Score: </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar