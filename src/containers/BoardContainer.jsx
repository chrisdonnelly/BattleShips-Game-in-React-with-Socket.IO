import React, { Component } from 'react';
import GridComponent from '../components/GridComponent.jsx'

class BoardContainer extends Component {

    render() {
        return (
            <section className="board">
                <GridComponent classref="targetgrid" tileclassref="targettile"/>
                <GridComponent classref="yourgrid" tileclassref="owntile"/>
            </section>
        )
    }

}

export default BoardContainer;