import React from "react"
import Container from "./Container"
import Scores from "./Scores"
import {images} from "./Superheros"

const shuffle = require('shuffle-array')

let chosenPics = []

class ImageGrid extends React.Component {
    state = {
        current: 0,
        best: 0
    }

    picClick = (event) => {
        const picId = event.target.id
        
        if (chosenPics.includes(picId)) {
            // Loss Logic
            chosenPics = []
            this.setState({ current: 0 })
        } else {
            // Win Logic
            chosenPics.push(picId)
            this.setState({ current: this.state.current + 1 })

            if (this.state.current >= this.state.best) {
                this.setState({ best: this.state.current + 1 })
            }
        }

        shuffle(images)
    }

    render() {
        return (
            <Container>
                <Scores current={this.state.current} best={this.state.best}></Scores>
                <div id="imageGrid">

                    {/* Mapping images array */}
                    {images.map(item => (
                        <img className="superheroPic" src={window.location.origin + item.pic} alt="Superhero Pic" key={item.id} id={item.id} onClick={this.picClick}></img>
                    ))}
                    
                </div>
            </Container>
        )
    }
}

export default ImageGrid