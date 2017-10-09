import React, { Component } from 'react';
import GamePiece from '../components/GamePieceComponent.jsx'

class GamePieceContainer extends Component {

    render() {
        return (
            <section className={this.props.classref}>
                <GamePiece classref="gamepiece" piecename={this.props.pieceone} placePiece={this.props.placePiece} />
                <GamePiece classref="gamepiece" piecename={this.props.piecetwo} placePiece={this.props.placePiece}/>
                <GamePiece classref="gamepiece" piecename={this.props.piecethree} placePiece={this.props.placePiece}/>
                <GamePiece classref="gamepiece" piecename={this.props.piecefour} placePiece={this.props.placePiece}/>
                <GamePiece classref="gamepiece" piecename={this.props.piecefive} placePiece={this.props.placePiece}/>
            </section>
        )
    }
}

export default GamePieceContainer;