import React, { Component } from 'react';
import BoardContainer from './BoardContainer.jsx';
import PlayerContainer from './PlayerContainer.jsx';
import GamePieceContainer from './GamePieceContainer.jsx';
import ChatBoxContainer from './ChatBoxContainer.jsx';
import Header from '../components/HeaderComponent.jsx';
import Button from '../components/ButtonComponent.jsx';
import GamePiece from '../models/GamePiece.js';
// import BoardSetupLogic from '../models/BoardSetupLogic.js'

class GameContainer extends Component {

    constructor(props) {
        super(props)

        const whiteHousePiece = new GamePiece("WhiteHouse", 2);
        const pentagonPiece = new GamePiece("Pentagon", 2);
        const pacificCommandPiece = new GamePiece("Pacific Command", 3);
        const navalBaseGuamPiece = new GamePiece("Naval Base Guam", 4);
        const theSeventhFleetPiece = new GamePiece("The 7th Fleet", 5);

        const pyongyangPiece = new GamePiece("Pyongyang", 2);
        const chagangProvincePiece = new GamePiece("Chagang Province", 2);
        const koreanPeoplesArmyGroundForcePiece = new GamePiece("K.P.A Ground Force", 3);
        const koreanPeoplesArmyStrategicForce = new GamePiece("K.P.A Strategic Force", 4);
        const ministryOfStateSecurityPiece = new GamePiece("Ministry of State Security", 5);

        var boxOfTrumpPieces = [];
        var boxOfKimPieces = [];

        boxOfTrumpPieces.push(
            whiteHousePiece,
            pentagonPiece,
            pacificCommandPiece,
            navalBaseGuamPiece,
            theSeventhFleetPiece,
        );

        boxOfKimPieces.push(
            pyongyangPiece,
            chagangProvincePiece,
            koreanPeoplesArmyGroundForcePiece,
            koreanPeoplesArmyStrategicForce,
            ministryOfStateSecurityPiece
        )

        var board = [
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null
        ]

        this.state = {
            message: "Would you like to play a game?",
            currentPlayer: "not yet set",
            roundCounter: 1,
            winner: null,
            selectedTile: null,
            boxOfTrumpPieces: boxOfTrumpPieces,
            boxOfKimPieces: boxOfKimPieces,
            trumpHitChecker: [],
            kimHitChecker: [],
            trumpTotalDamage: 0,
            kimTotalDamage: 0,
            usaboard: board,
            nkoreaboard: board
        }
    }

    validateAndPlacePiece(piece, boardPositions, leftEdge, rightEdge, controlArray) {

        var nextSquare = [-1, 1, -10, 10];

        var a = (boardPositions[Math.floor(Math.random() * boardPositions.length)]);

        var testLeftArray = [];
        testLeftArray.push(a);

        var i = null;

        for (i = 1; i < piece.length; i++) {
            testLeftArray.push(testLeftArray[testLeftArray.length - 1] - 1)
        };

        testLeftArray.forEach(function (value) {
            if (rightEdge.includes(value) === true || value < 0 || controlArray.includes(value) === true) {
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
            if (leftEdge.includes(value) === true || value > 99 || controlArray.includes(value) === true) {
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
            if (value < 0 || controlArray.includes(value) === true) {
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
            if (value > 99 || controlArray.includes(value) === true) {
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
            controlArray.push(a);

            var b = null;
            var lastStep = piece.location[piece.location.length - 1];
            var nextStep = (nextSquare[Math.floor(Math.random() * nextSquare.length)]);
            b = lastStep + nextStep;
            piece.location.push(b);
            controlArray.push(b);

            var z = 2
            while (z < piece.length) {
                var x = piece.location[piece.location.length - 1] + nextStep;
                piece.location.push(x);
                controlArray.push(x);
                z++;
            }
            console.log(piece.type)
            console.log(piece.location)
        }
        else {
            piece.location = [];
            this.validateAndPlacePiece(piece, boardPositions, leftEdge, rightEdge, controlArray);
        }
    };

    placePieces(boxOfTrumpPieces, boxOfKimPieces) {

        this.resetGame()

        const boardPositions = [...Array(100).keys()];
        const leftEdge = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
        const rightEdge = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];

        var trumpControlArray = [];
        var trumpTempArray = [];
        var kimControlArray = [];
        var kimTempArray = [];

        this.state.boxOfTrumpPieces.forEach(function (piece) {
            this.validateAndPlacePiece(piece, boardPositions, leftEdge, rightEdge, trumpControlArray);
        }.bind(this));

        this.state.boxOfTrumpPieces.forEach(function (piece) {
            piece.location.forEach(function (value) {
                trumpTempArray.push(value)
            })
        });

        this.state.boxOfKimPieces.forEach(function (piece) {
            this.validateAndPlacePiece(piece, boardPositions, leftEdge, rightEdge, kimControlArray);
        }.bind(this));

        this.state.boxOfKimPieces.forEach(function (piece) {
            piece.location.forEach(function (value) {
                kimTempArray.push(value)
            })
        });

        this.setState({
            trumpHitChecker: trumpTempArray,
            kimHitChecker: kimTempArray,
            message: "Coordinates of strategic targets locked in"
        })
        var path = "../deploy.mp3"
        var snd = new Audio(path);
        snd.play();
    }

    startGame() {
        var coinToss = ["Trump", "Kim"];
        var startingPlayer = (coinToss[Math.floor(Math.random() * coinToss.length)]);

        this.setState({
            currentPlayer: startingPlayer,
            message: startingPlayer + " is the first player"
        });

        var path = "../warningsiren.mp3"
        var snd = new Audio(path);
        snd.play();
    }

    recordSelection(tileIndex) {
        this.setState({ selectedTile: tileIndex });
        this.hitOrMiss(tileIndex);
    }


    hitOrMiss(tileIndex) {

        var nuke = tileIndex;

        if (this.state.currentPlayer.valueOf() === "Trump") {
            if (this.state.kimHitChecker.includes(nuke) === true) {
                this.hit(nuke);
                this.state.kimTotalDamage++;
            } else {
                this.miss(nuke);
            }
        } else {
            if (this.state.trumpHitChecker.includes(nuke) === true) {
                this.hit(nuke);
                this.state.trumpTotalDamage++;
            } else {
                this.miss(nuke)
            }
        }
        this.switchPlayer();
    };

    hit(nuke) {
        this.bomb();
        var boardUpdate = [];

        if (this.state.currentPlayer.valueOf() === "Trump") {
            boardUpdate = this.state.nkoreaboard.slice();
            boardUpdate[nuke] = "HIT";
            this.setState({ nkoreaboard: boardUpdate });
        } else {
            boardUpdate = this.state.usaboard.slice();
            boardUpdate[nuke] = "HIT";
            this.setState({ usaboard: boardUpdate });

        }
        this.setState({ message: "Direct Hit!!" });
    }

    bomb() {
        var path = "../bomb+7.mp3"
        var snd = new Audio(path);
        snd.play();
    }

    miss(nuke) {
        this.missBomb()
        var boardUpdate = [];

        if (this.state.currentPlayer.valueOf() === "Trump") {
            boardUpdate = this.state.nkoreaboard.slice();
            boardUpdate[nuke] = "MISS";
            this.setState({ nkoreaboard: boardUpdate });
        } else {
            boardUpdate = this.state.usaboard.slice();
            boardUpdate[nuke] = "MISS";
            this.setState({ usaboard: boardUpdate });

        }
        this.setState({ message: "You Missed" });
    }

    missBomb() {
        var path = "../bomb.mp3"
        var snd = new Audio(path);
        snd.play();
    }

    switchPlayer() {
        if (this.state.currentPlayer === "Trump") {
            this.setState({ currentPlayer: "Kim" });
        }
        else {
            this.setState({ currentPlayer: "Trump" })
        }
        this.advanceRoundCounter();
    }

    advanceRoundCounter() {
        var round = this.state.roundCounter + 1;
        this.setState({ roundCounter: round });
        this.checkWinner();
    }

    checkWinner() {
        if (this.state.trumpTotalDamage === 16) {
            this.setState({
                message: "Kim Wins!! America is lost in a nuclear fire more orange than Trump",
                winner: "Kim"
            })
        }
        else if (this.state.kimTotalDamage === 16) {
            this.setState({
                message: "Trump Wins!! South Korea is really just Korea now",
                winner: "Trump"
            })
        }
        else {
            return;
        }
    }

    resetGame() {

        var board = [
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null
        ]

        this.state.boxOfTrumpPieces.forEach(function (piece) {
            piece.location = []
        });

        this.state.boxOfKimPieces.forEach(function (piece) {
            piece.location = []
        });

        this.setState({
            roundCounter: 1,
            usaboard: board ,
            nkoreaboard: board ,
            winner: null,
            message: "Would you like to play a game?",
            currentPlayer: "not yet set",
            trumpTotalDamage: 0,
            kimTotalDamage: 0,
            selectedTile: null
        });


    }

    render() {
        return (
            <section className="game" >
                <Header message={this.state.message} player={this.state.currentPlayer} round={this.state.roundCounter} />
                <div className="playeroneuistyle">
                    <PlayerContainer classref="playeronecontainer" urlref="./trumpsprite.png" />
                    <GamePieceContainer
                        classref="trumpgamepieces"
                        pieceone="White House"
                        piecetwo="Pentagon"
                        piecethree="Pacific Command"
                        piecefour="Naval Base Guam"
                        piecefive="The 7th Fleet"
                    />
                </div>
                <Button handleClick={this.placePieces.bind(this)} label="Deploy Strategic Targets" className="setpieces" />
                <Button handleClick={this.startGame.bind(this)} label="Start Global Thermonuclear War" />
                <div className="playertwouistyle">
                    <PlayerContainer classref="playertwocontainer" urlref="./kimjongunsprite.png" />
                    <GamePieceContainer
                        classref="kimgamepieces"
                        pieceone="Pyongyang"
                        piecetwo="Chagang Province"
                        piecethree="K.P.A Ground Force"
                        piecefour="K.P.A Strategic Force"
                        piecefive="Ministry of State Security"
                    />
                </div>
                <BoardContainer
                    recordSelection={this.recordSelection.bind(this)}
                    usaboard={this.state.usaboard}
                    nkoreaboard={this.state.nkoreaboard}
                />
                <ChatBoxContainer />
            </section>
        )
    }
}

export default GameContainer;