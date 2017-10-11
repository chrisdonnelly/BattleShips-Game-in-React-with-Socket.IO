import React, { Component } from 'react';
import GridComponent from '../components/GridComponent.jsx'

class BoardContainer extends Component {

    render() {
        return (
            <section className="board">
                <GridComponent
                    classref="usagrid"
                    tileclassref="usatile"
                    recordSelection={this.props.recordSelection}
                    board={this.props.usaboard}
                    country="U.S.A"
                />
                <GridComponent
                    classref="nkoreagrid"
                    tileclassref="nkoreatile"
                    recordSelection={this.props.recordSelection}
                    board={this.props.nkoreaboard}
                    country="N.Korea" />
            </section>
        )
    }

}

export default BoardContainer;