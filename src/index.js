import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Info, School, Family, Clock, Increase, ChangeInfo, ConditionRendering, TurnOnOff} from "./components";

const root = ReactDOM.createRoot(document.getElementById('root'));
// function formatName(user) {
//     if (user){
//         return user.firstname + user.lastname;
//     }
//     return 'Hello stranger!'
// }
const fullUserInfo = {
    basicInfo: {
        firstname: 'ngoc',
        lastname: '1234',
        age: '22',
        gender: 'male',
    },
    familyInfo:
        {
            fatherName: 'bo ngoc',
            motherName: 'me ngoc',
        },
    schoolInfo:
        {
            schoolName: 'Truong doi',
            class: '1A4',
            studentId: 'A002',
        },
}

// function tick(){
//     const element = (
//         <div>
//             <h3 className="greeting">this is element keke</h3>
//             <h3>this is my full name: {formatName(user)}</h3>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     root.render(
//         element
//     );
//     console.log('loop')
// }
// class Welcome extends React.Component {
//     render() {
//         return <div>
//             <h1>name: {this.props.name}</h1>
//             <h1>age: {this.props.age}</h1>
//             <h1>gender: {this.props.gender}</h1>
//         </div>;
//     }
// }

// class School extends React.Component {
//     render() {
//         return null;
//     }
// }


// setInterval(tick, 1000);
const element = <div>
    <Family familyInfo={fullUserInfo.familyInfo}/>
    <School schoolInfo={fullUserInfo.schoolInfo}/>
    <Info basicInfo={fullUserInfo.basicInfo}/>
    <Clock/>
    <Increase/>
    <ChangeInfo/>
    <TurnOnOff/>
    {/*<ConditionRendering/>*/}

</div>
// function tick() {
//     root.render(<Clock date={new Date()} />);
// }
// setInterval(<Clock date={new Date()}/>, 1000);
    root.render(
        element
    );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
