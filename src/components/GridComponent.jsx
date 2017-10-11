import React, { Component } from 'react';
import Tile from './TileComponent.jsx'


class GridComponent extends Component {

    render() {
        return (
            <section className={this.props.classref}>
                {this.props.board.map((value, index) => {
                    return (
                        <Tile
                            classref={this.props.tileclassref}
                            key={index}
                            location={index}
                            value={value}
                            id={value}
                            recordSelection={this.props.recordSelection}
                        />
                    )
                })}
                <p>{this.props.country}</p>
            </section>
        )
    }
}

export default GridComponent;