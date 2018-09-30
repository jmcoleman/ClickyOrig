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
    gameImages
  };

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
          gameScore={0}
          topScore={0}
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
