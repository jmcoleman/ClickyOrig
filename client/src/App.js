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
    selectedImageIds: [],
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
  changeShuffledImages = () => {
    this.setState((prevState, props) => {
      const shuffledGameImages = this.shuffle(prevState.gameImages);

      return { gameImages: shuffledGameImages}
    })
  }

  /////////////////////////////
  // event handlers
  /////////////////////////////
  handleImageSelected = (e, curentImageId) => {
    console.log(curentImageId);

    this.setState( (prevState, props) => ({
      selectedImageIds: [...prevState.selectedImageIds, curentImageId],
      gameScore: parseInt(prevState.gameScore,10) + 1,
    }))

    // if image has already been selected, game is over
    if (this.state.selectedImageIds.includes(curentImageId)) {
      console.log("Choosen before!");

      // reset the selected images to be empty and the game score to 0
      this.setState( (prevState, props) => ({
        selectedImageIds: [],
        gameScore: 0,
      }))
    } else {
      // set the top score if the current score beats it
      this.setState( (prevState, props) => ({
        topScore: prevState.gameScore >= prevState.topScore ? prevState.gameScore : prevState.topScore
      }))
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
              onClick={ e => this.handleImageSelected(e, gameImage.id)}
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
