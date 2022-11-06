import React from "react";

export default class ChildList extends React.Component {
    render() {
        return this.props.items.map((item) =>
            <li key={item.id} id={item.id}>
                <h3>
                   <b>Title: </b> {item.title}
                </h3>
                <p>
                   <b>Content: </b> {item.content}
                </p>
            </li>
        )
    }
}