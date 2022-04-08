import React, { Component } from "react";
import "./App.css";
import DiceRoll from "./components/DiceRoll/DiceRoll";

class App extends Component {
    render() {
        return (
            <div>
                <DiceRoll />
            </div>
        );
    }
}

export default App;
