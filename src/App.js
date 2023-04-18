
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
/*
class App extends Component {
  constructor() {
    super();
    this.state = {
      task: '',
      taskArr: []
    }
  };
  
  handleChange = (e) => {
    this.setState({
      task: e.target.value
    });
  };

  handleClick = () => {
    this.setState({
      taskArr: this.state.taskArr.concat(this.state.task),
      task: ''
    });
  };

  render() {
    const {task, taskArr} = this.state;
    return (
      <div>
        <input onChange={this.handleChange} type='text' value={task}></input>
        <button onClick={this.handleClick}>Create New Task</button>

        <Overview taskArr={taskArr} />
      </div>
    )
  }


}
*/


export default App;