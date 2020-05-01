import React from "react"
import Container from "./Container"
import Scores from "./Scores"

const shuffle = require('shuffle-array')

const images = [
    {
        id: 1,
        name: "Black Panther",
        pic: "/img/superheros/black-panther.jpg"
    },
    {
        id: 2,
        name: "Black Widow",
        pic: "/img/superheros/black-widow.jpg"
    },
    {
        id: 3,
        name: "Captain America",
        pic: "/img/superheros/captain-america.jpg"
    },
    {
        id: 4,
        name: "Doctor Strange",
        pic: "/img/superheros/doctor-strange.jpg"
    },
    {
        id: 5,
        name: "Hawkeye",
        pic: "/img/superheros/hawkeye.jpg"
    },
    {
        id: 6,
        name: "Hulk",
        pic: "/img/superheros/hulk.jpg"
    },
    {
        id: 7,
        name: "Iron Man",
        pic: "/img/superheros/iron-man.jpg"
    },
    {
        id: 8,
        name: "Maria Hill",
        pic: "/img/superheros/maria-hill.jpg"
    },
    {
        id: 9,
        name: "Nick Fury",
        pic: "/img/superheros/nick-fury.jpg"
    },
    {
        id: 10,
        name: "Phil Coulson",
        pic: "/img/superheros/phil-coulson.jpg"
    },
    {
        id: 11,
        name: "Spiderman",
        pic: "/img/superheros/spiderman.jpg"
    },
    {
        id: 12,
        name: "Thor",
        pic: "/img/superheros/thor.jpg"
    }
]

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