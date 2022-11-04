import React from "react";

class TurnOnOff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    render() {
        return <div>
            <h1>---------HANDLER EVENT ZONE----------</h1>
            <h1>THIS IS {this.state.isToggleOn ? 'ON' : 'OFF'}</h1>
            <button onClick={this.handleClick}>Click to {!this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        </div>
    }
}
export default TurnOnOff