import React from 'react';
// import Button from "./Button";

class ConditionRendering extends React.Component {
    constructor(props) {
        super(props);
        this.handlerLogout = this.handlerLogout.bind(this)
        this.handlerLogin = this.handlerLogin.bind(this)
        this.state = {isLoggedIn: false};
    }
    HandlerLogin() {
        this.setState({isLoggedIn: true})
    }
    HandlerLogout() {
        this.setState({isLoggedIn: false})
    }
     LoginButton(props) {
        return (
            <button onClick={props.onClick}>
                Login
            </button>
        );
    }

     LogoutButton(props) {
        return (
            <button onClick={props.onClick}>
                Logout
            </button>
        );
    }
    render() {
        // const isLoggedIn = this.state.isLoggedIn;
        // console.log(isLoggedIn);
        // console.log(this.state.handlerLogin)
        // let button;
        // if (isLoggedIn){
        //     button = <Button className={'classLogin'} title={'Login'}/>
        // }else {
        //     button = <Button className={'classLogout'} title={'Logout'}/>
        //
        // }
        return (
            <div>
                <h1>YOU'RE {this.state.isLoggedIn ? 'LOGGED IN' : 'LOGGED OUT'}</h1>
                {/*{button}*/}
            </div>
        );
    }


}

export default ConditionRendering;