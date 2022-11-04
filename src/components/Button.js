import React from "react";


class Button extends React.Component {
    constructor(props) {
        super(props);
        // this.title = this.title.bind(this);
        // this.className = this.className.bind(this)
    }

    render() {
        return (
            <div>
                <button>
                    {/*<h1 className={this.state.className}>{this.state.title}</h1>*/}
                </button>
            </div>
        )
    }


}

export default Button;