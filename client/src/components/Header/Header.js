import React from "react";
import "./Header.css";

const Header = (props) => (
    <div className="d-flex justify-content-around bg-light p-2 mt-0 mb-0">
        <h2 className="mt-2">{props.children}</h2>
        <h2 className="mt-2">Score: {props.gameScore} | Top Score: {props.topScore}</h2>
    </div>
);

export default Header;
