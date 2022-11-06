import React from "react";
import {ChildList} from "./index";

export default class KeyAndList extends React.Component {
    render() {
        const posts = [
            {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
            {id: 2, title: 'Installation', content: 'You can install React from npm.'},
            {id: 3, title: 'What is React?', content: 'React is library of Javascript.'}
        ];

        return <div>
                <u>
                    <ChildList items={posts}/>
                </u>
        </div>
    }
}