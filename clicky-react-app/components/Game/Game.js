import React, { Component } from "react";
import Header from "../Header";
import Container from "../Container";
import data from "../../data.json";

// New Game Stats
class Game extends Component {
  state = {
    data,
    score: 0,
    topScore: 0
  };

// onclick function
const click = props => (
  <div
    role="img"
    aria-label="click item"
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`click-item${props.shake ? " shake" : ""}`}
  />
);



// If the user clicks on correct images
guessCorrect = dataInput => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      data: this.shuffleCards(newData),
      score: newScore,
      topScore: newTopScore
    });
  };


export default Game;

