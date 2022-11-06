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
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        return <div>
            <h1>THIS IS {this.state.isToggleOn ? 'ON' : 'OFF'}</h1>
            <button onClick={this.handleClick}>Click to {!this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        </div>
    }
}
export default TurnOnOff