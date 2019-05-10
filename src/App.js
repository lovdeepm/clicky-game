import React, { Component } from "react";
import FriendCard from "./components/Friendscard/Friends";
import images from "./images.json";
import "./App.css"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    clickedImages: [],
    score: 0
  };

  imageClick = (event) => {
    const currentImage = event.target.alt;
    const imageAlreadyClicked = this.state.clickedImages.indexOf(currentImage) > -1;

    if (imageAlreadyClicked) {
      this.setState({
        images: this.state.images.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedImages: [],
        score: 0
      });
        alert("You clicked an image twice!");

  } else {
    this.setState(
      {
        images: this.state.images.sort(function(a,b) {
          return 0.5 - Math.random();
        }),
        clickedImages: this.state.clickedImages.concat(
          currentImage
        ),
        score: this.state.score + 1
      } ,
      () => {
        if (this.state.score === 12){
          alert("You Win!");
          this.setState({
            images: this.state.images.sort(function(a,b){
              return 0.5 - Math.random();
            }),
            clickedImages: [],
            score: 0
          })
        }
      }
    )
  }
};



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <nav class="navbar navbar-light bg-light">
      <ul>
        <li>
        <a class="navbar-brand" href="/">Clicky Game</a>
        </li>
        <li>
        <h3> Click an Image to Begin</h3>
        </li>
        <li>
          Score: {this.state.score}  |
        </li>
      </ul>
</nav>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Clicky Game</h1>
    <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
  </div>
</div>
<div className="score">
Score: {this.state.score}  
</div>
     <div className="wrapper">
        {this.state.images.map(images => (
          <FriendCard
            imageClick={this.imageClick}
            id={images.id}
            image={images.image}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default App;