import React from "react";

class School extends React.Component {
    render() {
        console.log(this.props);
        return <div>
            <h1>school name: {this.props.schoolInfo.schoolName}</h1>
            <h1>class: {this.props.schoolInfo.class}</h1>
            <h1>student id: {this.props.schoolInfo.studentId}</h1>
        </div>;
    }
}
export default School;