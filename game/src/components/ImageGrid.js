import React from "react"
import Container from "./Container"

const images = {
    blackPanther: {
      backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/black-panther.jpg?raw=true)',
      height: 200,
      width: 200,
      margin: 15,
      backgroundRepeat: "no-repeat",
      border: "5px solid #000"
    },
    blackWidow: {
        backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/black-widow.jpg?raw=true)',
        height: 200,
        width: 200,
        margin: 15,
        backgroundRepeat: "no-repeat",
        border: "5px solid #000"
    },
    captainAmerica: {
        backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/captain-america.jpg?raw=true)',
        height: 200,
        width: 200,
        margin: 15,
        backgroundRepeat: "no-repeat",
        border: "5px solid #000"
    },
    doctorStrange: {
        backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/doctor-strange.jpg?raw=true)',
        height: 200,
        width: 200,
        margin: 15,
        backgroundRepeat: "no-repeat",
        border: "5px solid #000"
    },
    hawkeye: {
        backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/hawkeye.jpg?raw=true)',
        height: 200,
        width: 200,
        margin: 15,
        backgroundRepeat: "no-repeat",
        border: "5px solid #000"
    },
    hulk: {
        backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/hulk.jpg?raw=true)',
        height: 200,
        width: 200,
        margin: 15,
        backgroundRepeat: "no-repeat",
        border: "5px solid #000"
    },
    ironMan: {
        backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/iron-man.jpg?raw=true)',
        height: 200,
        width: 200,
        margin: 15,
        backgroundRepeat: "no-repeat",
        border: "5px solid #000"
    },
    mariaHill: {
        backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/maria-hill.jpg?raw=true)',
        height: 200,
        width: 200,
        margin: 15,
        backgroundRepeat: "no-repeat",
        border: "5px solid #000"
    },
    nickFury: {
        backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/nick-fury.jpg?raw=true)',
        height: 200,
        width: 200,
        margin: 15,
        backgroundRepeat: "no-repeat",
        border: "5px solid #000"
    },
    philCoulson: {
        backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/phil-coulson.jpg?raw=true)',
        height: 200,
        width: 200,
        margin: 15,
        backgroundRepeat: "no-repeat",
        border: "5px solid #000"
    },
    spiderman: {
        backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/spiderman.jpg?raw=true)',
        height: 200,
        width: 200,
        margin: 15,
        backgroundRepeat: "no-repeat",
        border: "5px solid #000"
    },
    thor: {
        backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/thor.jpg?raw=true)',
        height: 200,
        width: 200,
        margin: 15,
        backgroundRepeat: "no-repeat",
        border: "5px solid #000"
    }
  }

function ImageGrid() {
    return (
      <Container>
          <div id="imageGrid">
            <div role="img" style={images.blackPanther}></div>
            <div role="img" style={images.blackWidow}></div>
            <div role="img" style={images.captainAmerica}></div>
            <div role="img" style={images.doctorStrange}></div>
            <div role="img" style={images.hawkeye}></div>
            <div role="img" style={images.hulk}></div>
            <div role="img" style={images.ironMan}></div>
            <div role="img" style={images.mariaHill}></div>
            <div role="img" style={images.nickFury}></div>
            <div role="img" style={images.philCoulson}></div>
            <div role="img" style={images.spiderman}></div>
            <div role="img" style={images.thor}></div>
          </div>
      </Container>
    )
  }
  
  export default ImageGrid