import React from "react"

function Scores(props) {
  return (
    <div className="scores">
      <p>Current Score: {props.current} | Best Score: {props.best}</p>
    </div>
  )
}

export default Scores