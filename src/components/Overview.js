import React, { Component } from "react";

class Overview extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ol>
                {this.props.taskArr.map(x => <li>{x}</li>)}
            </ol>
        )
    }
};



export default Overview;