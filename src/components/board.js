import React from 'react';
import path from '../utils/path';

class Board extends React.Component {
    static gameRoad = path;

    render() {
        console.log('lodo path', Board.gameRoad);
        return (
            <div>
                This is My board. only 4 players can join here.
            </div>
        )
    }
}

export default Board;