import React from "react";
import "./Footer.css";

const Footer = (props) => (
    <footer id="main-footer" className="text-center p-4 sticky bg-clicky">
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>Copyright &copy;<span id="year"> {props.year}</span></p>
                </div>
            </div>
        </div>
    </footer>
    );

export default Footer;
