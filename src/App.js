import React from 'react';
import logo from './logo.svg';
import './App.css';
import dice from './utils/dice';
import Board from './components/board';
import player from './utils/player';

const colors = {
    RED: 'RED',
    GREEN: 'GREEN',
    BLUE: 'BLUE',
    YELLOW: 'YELLOW'
};

class App extends React.Component {
    state = {
        players: [],
        turn: null
    };
    componentWillMount() {
        let joined = [];
        let red = player('Kushal', colors.RED);
        let green = player('Sudin', colors.GREEN);
        let blue = player('Sanish', colors.BLUE);
        let yellow = player('Nitendra', colors.YELLOW);
        joined.push(red, green, blue, yellow);

        this.setState({ players: Object.assign([], joined)})
    }
    componentDidMount() {
        App.takeTurn(this.state.players[0]);
        App.takeTurn(this.state.players[1]);
        App.takeTurn(this.state.players[2]);
        App.takeTurn(this.state.players[3]);
    }

    static takeTurn = (player) => {
        let rollDice = dice();
        console.log(`player ${player.name} got ${rollDice}`);
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to LUDO</h2>
                </div>
                <Board/>
            </div>
        );
    }
}

export default App;
