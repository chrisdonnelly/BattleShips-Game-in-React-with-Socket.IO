import React, { Component } from 'react';
import Tile from './TileComponent.jsx'


class GridComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            board: [
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
        }
    }

    render() {
        return (
            <section className={this.props.classref}>
                {this.state.board.map((value, index) => {
                    return (
                        <Tile classref={this.props.tileclassref}
                            key={index}
                            location={index}
                            value={value}
                            recordSelection={this.props.recordSelection}
                        />
                    )
                })}
            </section>
        )
    }
}

export default GridComponent;