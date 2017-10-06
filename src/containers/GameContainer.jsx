import React, { Component } from 'react';
import BoardContainer from './BoardContainer.jsx'
import PlayerContainer from './PlayerContainer.jsx'
import GamePieceContainer from './GamePieceContainer.jsx'
import ChatBoxComponent from '../components/ChatBoxComponent.jsx'
import Header from '../components/HeaderComponent.jsx'

class GameContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <section className="game">
                <Header />
                <div className="playeroneuistyle">
                <PlayerContainer classref="playeronecontainer"/>
                <GamePieceContainer classref="trumpgamepieces" />
                </div>
                <div className="playertwouistyle">
                <PlayerContainer classref="playertwocontainer" />
                <GamePieceContainer classref="kimgamepieces" />
                </div>
                <BoardContainer />
                <ChatBoxComponent />
            </section>
        )
    }
}

export default GameContainer;

