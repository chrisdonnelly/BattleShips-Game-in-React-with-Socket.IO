import React, {Component} from 'react';

class Header extends Component {

    render() {
        return (
            <div className="headline">
            <h1>Dictator-Ships!</h1>
            <p>Round {this.props.round} - Current Player is {this.props.player}  </p>
            <p className="message">{this.props.message}</p>
            </div>
        )
    }
}

export default Header;