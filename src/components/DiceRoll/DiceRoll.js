import React, { Component } from "react";
import Dice from "../Dice/Dice";
import "./DiceRoll.css";

class DiceRoll extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"],
    };

    constructor(props) {
        super(props);
        this.state = {
            diceOne: "one",
            diceTwo: "two",
            diceThree: "three",
            rolling: false,
        };
    }

    rolls() {
        const randomNum1 =
            this.props.sides[
                Math.floor(Math.random() * this.props.sides.length)
            ];

        const randomNum2 =
            this.props.sides[
                Math.floor(Math.random() * this.props.sides.length)
            ];

        const randomNum3 =
            this.props.sides[
                Math.floor(Math.random() * this.props.sides.length)
            ];

        this.setState({
            diceOne: randomNum1,
            diceTwo: randomNum2,
            diceThree: randomNum3,
            rolling: true,
        });

        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Dice
                        face={this.state.diceOne}
                        rolling={this.state.rolling}
                    />
                    <Dice
                        face={this.state.diceTwo}
                        rolling={this.state.rolling}
                    />
                    <Dice
                        face={this.state.diceThree}
                        rolling={this.state.rolling}
                    />
                </div>

                <div className="container-winner">
                    {this.state.diceOne === this.state.diceTwo &&
                    this.state.diceTwo === this.state.diceThree ? (
                        <h1 className="winner">Winner! 🏆</h1>
                    ) : (
                        ""
                    )}
                </div>

                <div className="container-btn">
                    <button
                        onClick={() => {
                            this.rolls();
                        }}
                        className="btn"
                        disabled={this.state.rolling}
                    >
                        {this.state.rolling ? "Rolling..." : "Roll Dice"}
                    </button>
                </div>
            </div>
        );
    }
}

export default DiceRoll;
