import React from 'react';
import Gif from '../../../../assets/sbasnet.gif';

const Game: React.FC = () => {
    return <div className="game">
        <img className="pixi-game" src={Gif} alt="placeholder"></img>
    </div>
}

export default Game