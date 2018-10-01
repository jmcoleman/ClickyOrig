import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";
import Footer from "./components/Footer";
import gameImages from "./gameImages.json";
import "./App.css";

class App extends Component {
  // Setting this.state.gameImages to the gameImages json array
  state = {
    gameImages: gameImages,
    gameScore: 0,
    topScore: 0
  };

  componentDidMount() {
    const shuffledGameImages = this.shuffle(this.state.gameImages);

    this.setState({gameImages: shuffledGameImages})
  }
  
  ///////////////////////////////////////////
  // Shuffles array in place. ES6 version
  // @param {Array} 
  ///////////////////////////////////////////
  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  chooseGameImage = id => {
    // Filter this.state.gameImages for gameImages with an id not equal to the id selected
    const gameImages = this.state.gameImages.filter(gameImage => gameImage.id !== id);
    // Set this.state.gameImages equal to the new gameIages array
    this.setState({ gameImages });
  };

  // Map over this.state.gameImages and render a GameCard component for each gameImage object
  render() {
    return (
      <div>
        <Header
          gameScore={this.state.gameScore}
          topScore={this.state.topScore}
        >
          Clicky Game
        </Header>
        <Jumbotron
            message={''}
        >
        </Jumbotron>
        <Wrapper>
          {this.state.gameImages.map(gameImage => (
            <GameCard
              chooseGameImage={this.chooseGameImage}
              id={gameImage.id}
              key={gameImage.id}
              name={gameImage.name}
              image={gameImage.image}
            />
          ))}
        </Wrapper>
        <Footer
          year={2018}
        >
          Clicky Game
        </Footer>
      </div>
    );
  }
}

export default App;
