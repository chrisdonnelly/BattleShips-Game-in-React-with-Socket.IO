import React, { Component } from 'react';
import GamePiece from '../components/GamePieceComponent.jsx'

class GamePieceContainer extends Component {

    render() {
        return (
            <section className={this.props.classref}>
                <GamePiece classref="gamepiece" piecename={this.props.pieceone} />
                <GamePiece classref="gamepiece" piecename={this.props.piecetwo} />
                <GamePiece classref="gamepiece" piecename={this.props.piecethree} />
                <GamePiece classref="gamepiece" piecename={this.props.piecefour} />
                <GamePiece classref="gamepiece" piecename={this.props.piecefive} />
            </section>
        )
    }
}

export default GamePieceContainer;