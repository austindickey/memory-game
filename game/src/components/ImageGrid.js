import React from "react"
import Container from "./Container"
import Scores from "./Scores"

const images = [
    {
        id: 1,
        name: "Black Panther",
        backgroundImage: 'https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/black-panther.jpg?raw=true'
    },
    {
        id: 2,
        name: "Black Widow",
        backgroundImage: 'https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/black-widow.jpg?raw=true'
    },
    {
        id: 3,
        name: "Captain America",
        backgroundImage: 'https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/captain-america.jpg?raw=true'
    },
    {
        id: 4,
        name: "Doctor Strange",
        backgroundImage: 'https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/doctor-strange.jpg?raw=true'
    },
    {
        id: 5,
        name: "Hawkeye",
        backgroundImage: 'https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/hawkeye.jpg?raw=true'
    },
    {
        id: 6,
        name: "Hulk",
        backgroundImage: 'https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/hulk.jpg?raw=true'
    },
    {
        id: 7,
        name: "Iron Man",
        backgroundImage: 'https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/iron-man.jpg?raw=true'
    },
    {
        id: 8,
        name: "Maria Hill",
        backgroundImage: 'https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/maria-hill.jpg?raw=true'
    },
    {
        id: 9,
        name: "Nick Fury",
        backgroundImage: 'https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/nick-fury.jpg?raw=true'
    },
    {
        id: 10,
        name: "Phil Coulson",
        backgroundImage: 'https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/phil-coulson.jpg?raw=true'
    },
    {
        id: 11,
        name: "Spiderman",
        backgroundImage: 'https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/spiderman.jpg?raw=true'
    },
    {
        id: 12,
        name: "Thor",
        backgroundImage: 'https://github.com/austindickey/memory-game/blob/master/game/public/img/superheros/thor.jpg?raw=true'
    }
]

class ImageGrid extends React.Component {
    state = {
        current: 0,
        best: 0
    }

    increaseScore = () => {
        this.setState({ current: this.state.current + 1 })

        if (this.state.current >= this.state.best) {
            this.setState({ best: this.state.current + 1 })
        }
    }

    render() {
        return (
            <Container>
                <Scores current={this.state.current} best={this.state.best}></Scores>
                <div id="imageGrid">

                    {images.map(item => (
                        <img className="superheroPic" src={item.backgroundImage} alt="No Pic" key={item.id} onClick={this.increaseScore}></img>
                    ))}
                    
                </div>
            </Container>
        )
    }
}

export default ImageGrid