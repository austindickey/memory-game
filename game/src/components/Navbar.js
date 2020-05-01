import React from "react"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="logo" href="/">
        <img src={window.location.origin + "/img/logo.png"} alt="Logo"/>
      </a>
    </nav>
  )
}

export default Navbar