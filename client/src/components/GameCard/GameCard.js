import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="card" onClick={props.onClick}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.chooseGameImage(props.id)} className="choose">
    </span>
  </div>
);

export default GameCard;
