
import Overview from './components/Overview';
import React, { useState } from 'react';


function App () {
const [tasks, setTask] = useState({task:'', taskArr:[]});

function handleChange(e) {
  setTask({task: e.target.value, taskArr: tasks.taskArr})
}

function handleClick() {
  setTask({taskArr: tasks.taskArr.concat(tasks.task),
    task: ''})
}

return(
  <div>
        <input onChange={handleChange} type='text' value={tasks.task}></input>
        <button onClick={handleClick}>Create New Task</button>

        <Overview taskArr={tasks.taskArr} />
      </div>
)
}



export default App;