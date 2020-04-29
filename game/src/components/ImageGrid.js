import React from "react"
import Container from "./Container"

const images = {
    thor: {
      backgroundImage: 'url(https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/thor.jpg?raw=true)',
      height: 200,
      backgroundRepeat: "no-repeat"
    }
  }

function ImageGrid() {
    return (
      <Container>
          <div className="imageGrid">
            <div role="img" style={images.thor}></div>
          </div>
      </Container>
    )
  }
  
  export default ImageGrid