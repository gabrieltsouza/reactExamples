import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
  };

  handleInputChanged = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask } = this.state;
    return (
      <div className="main">
        <h1>Task List {newTask} </h1>
        <form action="#">
          <input onChange={this.handleInputChanged} type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
