import React, { Component } from 'react';
import BoardContainer from './BoardContainer.jsx';
import PlayerContainer from './PlayerContainer.jsx';
import GamePieceContainer from './GamePieceContainer.jsx';
// import ChatBoxContainer from './ChatBoxContainer.jsx';
import Header from '../components/HeaderComponent.jsx';
import Button from '../components/ButtonComponent.jsx';
import GamePiece from '../models/GamePiece.js';

class GameContainer extends Component {

    constructor(props) {
        super(props)

        const whiteHousePiece = new GamePiece("WhiteHouse", 2);
        const pentagonPiece = new GamePiece("Pentagon", 2);
        const pacificCommandPiece = new GamePiece("Pacific Command", 3);
        const navalBaseGuamPiece = new GamePiece("Naval Base Guam", 4);
        const theSeventhFleetPiece = new GamePiece("The Seventh Fleet", 5);

        const pyongyangPiece = new GamePiece("Pyongyang", 2);
        const chagangProvincePiece = new GamePiece("Chagang Province", 2);
        const koreanPeoplesArmyGroundForcePiece = new GamePiece("Korean People's Army Ground Force", 3);
        const koreanPeoplesArmyStrategicForce = new GamePiece("Korean People's Army Strategic Force", 4);
        const ministryOfStateSecurityPiece = new GamePiece("Ministry of State Security", 5);

        var boxOfPieces = [];

        boxOfPieces.push(
            whiteHousePiece,
            pentagonPiece,
            pacificCommandPiece,
            navalBaseGuamPiece,
            theSeventhFleetPiece,
            pyongyangPiece,
            chagangProvincePiece,
            koreanPeoplesArmyGroundForcePiece,
            koreanPeoplesArmyStrategicForce,
            ministryOfStateSecurityPiece
        );

        this.state = {
            currentPlayer: null,
            roundCounter: 0,
            winner: null,
            selectedTile: null,
            boxOfPieces: boxOfPieces,
        }
    }

    placePieces(boxOfPieces) {

        var boardPositions = [...Array(100).keys()];
        var leftEdge = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
        var rightEdge = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];

        console.log(this.state.boxOfPieces);

        this.state.boxOfPieces.forEach(function (piece) {

            var nextSquare = [-1, 1, -10, 10];

            var a = (boardPositions[Math.floor(Math.random() * boardPositions.length)]);

            var testLeftArray = [];
            testLeftArray.push(a);

            var i = null;

            for (i = 1; i < piece.length; i++) {
                testLeftArray.push(testLeftArray[testLeftArray.length - 1] - 1)
            };

            testLeftArray.forEach(function (value) {
                if (rightEdge.includes(value) === true || value < 0) {
                    var index = nextSquare.indexOf(-1);
                    if (index > -1) {
                        nextSquare.splice(index, 1)
                    }
                    else {
                        return;
                    }
                }
                else {
                    return;
                }
            });

            var testRightArray = [];
            testRightArray.push(a);

            for (i = 1; i < piece.length; i++) {
                testRightArray.push(testRightArray[testRightArray.length - 1] + 1)
            };

            testRightArray.forEach(function (value) {
                if (leftEdge.includes(value) === true || value > 99) {
                    var index = nextSquare.indexOf(1);
                    if (index > -1) {
                        nextSquare.splice(index, 1)
                    }
                    else {
                        return;
                    }
                }
                else {
                    return
                }
            });

            var testUpArray = [];
            testUpArray.push(a);

            for (i = 1; i < piece.length; i++) {
                testUpArray.push(testUpArray[testUpArray.length - 1] - 10)
            };

            testUpArray.forEach(function (value) {
                if (value < 0) {
                    var index = nextSquare.indexOf(-10);
                    if (index > -1) {
                        nextSquare.splice(index, 1)
                    }
                    else {
                        return
                    }
                }
                else {
                    return
                }
            });

            var testDownArray = [];
            testDownArray.push(a);

            for (i = 1; i < piece.length; i++) {
                testDownArray.push(testDownArray[testDownArray.length - 1] + 10)
            };

            testDownArray.forEach(function (value) {
                if (value > 99) {
                    var index = nextSquare.indexOf(+10);
                    if (index > -1) {
                        nextSquare.splice(index, 1)
                    }
                    else {
                        return
                    };
                }
                else {
                    return;
                }
            });

            if (nextSquare.length > 1) {
                piece.location.push(a);
            }
            else {
                return
            }

            var b = null;
            var last = piece.location[piece.location.length - 1]
            var nextStep = (nextSquare[Math.floor(Math.random() * nextSquare.length)]);
            b = last + nextStep
            piece.location.push(b);

            var z = 2
            while (z < piece.length) {
                var x = piece.location[piece.location.length - 1] + nextStep
                piece.location.push(x)
                z++
            }
            console.log(piece.type)
            console.log(piece.location)
        })
    };

    startGame() {
        var coinToss = ["Trump", "Kim"]
        var startingPlayer = (coinToss[Math.floor(Math.random() * coinToss.length)])
        this.setState({ currentPlayer: startingPlayer });
    }

    recordSelection(tileIndex) {
        var round = this.state.roundCounter + 1;
        this.setState({ roundCounter: round });
        this.setState({ selectedTile: tileIndex });
    }

    hitOrMiss() {
        var nuke = this.state.selectedTile;
        if (this.state.currentPlayer === "Kim") {
            checkTrumpPieces(nuke);
        }
        else if (this.state.currentPlayer === "Trump") {
            checkKimPieces(nuke);
        }
    }

    checkTrumpPieces(nuke) {
        
        if (this.state.boxOfPieces.whiteHousePiece.location.includes(nuke) === true) {
            hit();
        }
        else if (this.state.boxOfPieces.pentagonPiece.location.includes(nuke) === true) {
            hit();
        }
        else if (this.state.boxOfPieces.pacificCommandPiece.location.includes(nuke) === true) {
            hit();
        }
        else if (this.state.boxOfPieces.navalBaseGuamPiece.location.includes(nuke) === true) {
            hit();
        }
        else if (this.state.boxOfPieces.theSeventhFleetPiece.location.includes(nuke) === true) {
            hit();
        }
        else {
            miss();
        }
    }

    checkKimPieces() {

    }

    hit() {

    }

    miss() {

    }

    switchPlayer() {
        // after you've selected a tile and had it checked against opponents arrays switch current player to the other player 

    }

    checkWinner() {
        // iterate through all pieces and check if all are destroyed 

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
                    />
                </div>
                <Button handleClick={this.placePieces.bind(this)} label="Deploy Strategic Targets" className="setpieces" />
                <Button handleClick={this.startGame.bind(this)} label="Global Thermonuclear War" />
                <div className="playertwouistyle">
                    <PlayerContainer classref="playertwocontainer" urlref="./kimjongunsprite.png" />
                    <GamePieceContainer
                        classref="kimgamepieces"
                        pieceone="Pyongyang"
                        piecetwo="Chagang Province"
                        piecethree="Korean People's Army Ground Force"
                        piecefour="Korean People's Army Strategic Force"
                        piecefive="Ministry of State Security"
                    />
                </div>
                <BoardContainer recordSelection={this.recordSelection.bind(this)} />
                {/* <ChatBoxContainer /> */}
            </section>
        )
    }
}

export default GameContainer;

