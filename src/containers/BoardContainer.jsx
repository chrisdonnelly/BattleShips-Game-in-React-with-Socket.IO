import React, { Component } from 'react';
import GridComponent from '../components/GridComponent.jsx'

class BoardContainer extends Component {

    render() {
        return (
            <section className="board">
                <GridComponent classref="yourgrid" tileclassref="owntile" recordSelection={this.props.recordSelection} />
                <GridComponent classref="targetgrid" tileclassref="targettile" recordSelection={this.props.recordSelection} />
            </section>
        )
    }

}

export default BoardContainer;