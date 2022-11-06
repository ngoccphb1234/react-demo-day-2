import React from 'react';
import {LogoutButton, LoginButton, Greeting} from "./index";

class ConditionRendering extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.state = {isLoggedIn: false};
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />
        }else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        return (
            <div>
               <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }


}

export default ConditionRendering;