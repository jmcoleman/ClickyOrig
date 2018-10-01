import React from "react";
import "./Jumbotron.css";

const Jumbotron = (props) => (
  <div id="page-header" className="jumbotron text-center mb-0">
    <h1>Let's Play</h1>
    <h4>Click on an image to earn points, but don't click on any image more than once!</h4>
    <div className="message">{props.message}</div>
  </div>
);

export default Jumbotron;

