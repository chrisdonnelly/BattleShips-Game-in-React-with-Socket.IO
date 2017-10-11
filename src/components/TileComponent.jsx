import React, { Component } from 'react';

class Tile extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.selectTile = this.selectTile.bind(this);
    }

    selectTile(index) {
        this.props.recordSelection(this.props.location);
    }

    render() {
        return (
            <div
                className={this.props.classref}
                onClick={this.selectTile}
                id={this.props.value}>
            </div>
        )
    }
}

export default Tile;