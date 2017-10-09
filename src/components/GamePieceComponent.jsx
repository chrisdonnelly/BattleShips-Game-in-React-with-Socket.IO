import React, {Component} from 'react';

class GamePiece extends Component {

    constructor(props) {
        super(props);
        this.selectPiece = this.selectPiece.bind(this);
    }

    selectPiece() {
        this.props.placePiece()
    }

    render() {
        return (
            <div className={this.props.classref} onClick={this.selectPiece}>
            <p>{this.props.piecename}</p>
            </div>
        )
    }
}

export default GamePiece;