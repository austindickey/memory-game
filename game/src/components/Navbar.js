import React from "react"

const logo = {
  backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/logo.png?raw=true)',
  height: 70,
  width: 324,
  backgroundRepeat: "no-repeat"
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="logo" href="/">
        <div role="img" style={logo}></div>
      </a>
    </nav>
  )
}

export default Navbar