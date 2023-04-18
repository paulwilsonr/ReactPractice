import React from "react";

function Overview (taskArr) {
    return (
        <ol>
            {taskArr.taskArr.map(x => <li>{x}</li>)}
        </ol>
    )
}




export default Overview;