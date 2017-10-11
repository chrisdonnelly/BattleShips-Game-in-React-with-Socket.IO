import React, { Component } from 'react';

class PlayerContainer extends Component {

    render() {
        return (

            <section className={this.props.classref}>
                <img
                    src={this.props.urlref}
                    style={{ width: 100, height: 100 }}
                    alt={""}
                />
            </section>
        );
    }
}

export default PlayerContainer;
