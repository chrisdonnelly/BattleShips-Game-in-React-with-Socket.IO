import React, { Component } from 'react';
import BoardContainer from './BoardContainer.jsx'
import PlayerContainer from './PlayerContainer.jsx'
import GamePieceContainer from './GamePieceContainer.jsx'
// import ChatBoxContainer from './ChatBoxContainer.jsx'
import Header from '../components/HeaderComponent.jsx'
import GamePiece from '../models/GamePiece.js'

class GameContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPlayer: null,
            roundCounter: 0,
            winner: null,
            currentlySelectedTile: null,
        }
    }

    // componentDidMount() {
    //     var trumpGamePieceOne = new GamePiece("WhiteHouse", 2)
    //     console.log(trumpGamePieceOne);
    //     this.setState({currentPiece: trumpGamePieceOne});
    //     // setPiecePosition(trumpGamePieceOne);
    // }

    // setPiecePosition(index) {
    //     console.log(index)
    //     console.log(this.state.currentPiece);
    //     // do x times where x is equal to piece.length 
    //     // select a starting square for the piece - user click square
    //     // wait for user input.  
    //     // add that location value to the array 
    //     // repeat - value must be + or - 1 or 10 compared to starting value
    //     // add that location to array
    //     // continue until array.length = piece.length 
    // }

    placePiece() {
        const whiteHousePiece = new GamePiece("WhiteHosue", 2);
        console.log(whiteHousePiece);
        var instruction = document.getElementsByClassName("instructions");
        console.log("dom element", instruction);
        instruction.innerText="Please place your piece"; 
        console.log(this.state.currentlySelectedTile);


        


    }

    recordSelection(tileIndex) {
        this.setState({ currentlySelectedTile: tileIndex });
        console.log("On Click", tileIndex);
        console.log(this);
        console.log(this.state.currentlySelectedTile);
    }

    render() {
        return (
            <section className="game">
                <Header />
                <p className="instructions"></p>
                <div className="playeroneuistyle">
                    <PlayerContainer classref="playeronecontainer" urlref="./trumpsprite.png" />
                    <GamePieceContainer
                        classref="trumpgamepieces"
                        pieceone="White House"
                        piecetwo="Pentagon"
                        piecethree="Pacific Command"
                        piecefour="Naval Base Guam"
                        piecefive="The Seventh Fleet"
                        placePiece={this.placePiece.bind(this)}
                    />
                </div>
                <div className="playertwouistyle">
                    <PlayerContainer classref="playertwocontainer" urlref="./kimjongunsprite.png" />
                    <GamePieceContainer
                        classref="kimgamepieces"
                        pieceone="Pyongyang"
                        piecetwo="Chagang Province"
                        piecethree="Korean People's Army Ground Force"
                        piecefour="Korean People's Army Strategic Force"
                        piecefive="Ministry of State Security"
                        placePiece={this.placePiece.bind(this)}
                    />
                </div>
                <BoardContainer recordSelection={this.recordSelection.bind(this)} />
                {/* <ChatBoxContainer /> */}
            </section>
        )
    }
}

export default GameContainer;

