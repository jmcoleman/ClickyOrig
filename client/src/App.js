import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";
import Footer from "./components/Footer";
import gameImages from "./gameImages.json";
import "./App.css";

class App extends Component {

  ///////////////////////////
  // handle state
  ///////////////////////////

  // load the images from the json array
  state = {
    gameImages: gameImages,
    selectedImages: [],
    currentImage: null,
    gameScore: 0,
    topScore: 0
  };

  ///////////////////////////////////////////
  // Functions
  ///////////////////////////////////////////

  // Shuffles array in place. ES6 version.  @param {Array} 
  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // chooseGameImage = id => {
  //   // Filter this.state.gameImages for gameImages with an id not equal to the id selected
  //   const gameImages = this.state.gameImages.filter(gameImage => gameImage.id !== id);

  //   // Set this.state.gameImages equal to the new gameIages array
  //   this.setState({ gameImages });
  // };

  /////////////////////////////
  // methods to update state
  /////////////////////////////
  changeGameScore = () => {
    this.setState((prevState, props) => {
      return { gameScore: parseInt(prevState.gameScore,10) + 1}
    })
  }

  changeTopScore = () => {
    this.setState((prevState, props) => {
      return { topScore: parseInt(prevState.topScore,10) + 1}
    })
  }

  changeShuffledImages = () => {
    this.setState((prevState, props) => {
      const shuffledGameImages = this.shuffle(prevState.gameImages);

      return { gameImages: shuffledGameImages}
    })
  }

  changeSelectedImages = () => {
    this.setState((prevState, props) => {
      // return this.setState({ selectedImages: [...this.state.selectedImages, props.id] })
      return this.setState({ selectedImages: [...prevState.selectedImages, props.id] })
    })
  }

  isGameOver = () => {
    let gameOver=false;

    // game is over when an item has been selected before
    
    return gameOver;
  }

  /////////////////////////////
  // event handlers
  /////////////////////////////
  handleImageSelected = (i) => {
    this.changeGameScore();
    this.changeSelectedImages(i.id);

    // if game is over, check for top score
    if (this.isGameOver()) {
      // if this is the top score, set it
      if (this.state.gameScore > this.state.topScore) {
        this.changeTopScore(this.state.gameScore);
      }
    }

    //reshuffle images
    this.changeShuffledImages();
  }

  /////////////////////////////
  // React methods
  /////////////////////////////

  componentDidMount() {
    const shuffledGameImages = this.shuffle(this.state.gameImages);

    this.setState({gameImages: shuffledGameImages})
  }

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
              // chooseGameImage={this.chooseGameImage}
              id={gameImage.id}
              key={gameImage.id}
              name={gameImage.name}
              image={gameImage.image}
              onClick={this.handleImageSelected.bind(this)}
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
