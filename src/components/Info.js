import React from "react";

class Info extends React.Component {

    render() {
        return <div>
            <h1>fullName:{renderFullName( this.props.basicInfo.firstname, this.props.basicInfo.lastname)}</h1>
            <h1>age: {this.props.basicInfo.age}</h1>
            <h1>gender: {this.props.basicInfo.gender}</h1>
        </div>;
    }
}
function renderFullName($firstName, $lastName) {
    return $firstName + $lastName
}
export default Info;