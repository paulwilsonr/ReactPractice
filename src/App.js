
import Overview from './components/overview';
import React, { Component } from 'react';

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
    
    return (
      <div>
        <input onChange={this.handleChange} type='text' value={this.state.task}></input>
        <button onClick={this.handleClick}>Create New Task</button>

        <Overview taskArr={this.state.taskArr} />
      </div>
    )
  }


}


export default App;