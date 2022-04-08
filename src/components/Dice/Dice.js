import React, { Component } from "react";
import "./Dice.css";

class Dice extends Component {
    render() {
        return (
            <div className="container">
                <i
                    className={`fas fa-5x fa-dice-${this.props.face} ${
                        this.props.rolling ? "shaking" : ""
                    }`}
                ></i>
            </div>
        );
    }
}

export default Dice;
