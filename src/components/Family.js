import React from "react";

class Family extends React.Component {
    render() {
        return <div>
        <h1>Father name: {this.props.familyInfo.fatherName}</h1>
        <h1>mother name: {this.props.familyInfo.motherName}</h1>
        </div>
    }
}
export default Family;