import React, { Component } from 'react';

class GamePieceContainer extends Component {

    render() {
        return (
            <section className={this.props.classref}>
                These are the game pieces
            </section>
        )
    }
}

export default GamePieceContainer;