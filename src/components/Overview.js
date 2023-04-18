import React from "react";

function Overview (taskArr) {
    return (
        <ol>
            {taskArr.taskArr.map(x => <li>{x}</li>)}
        </ol>
    )
}


/*
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
*/


export default Overview;