import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

// Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    this.setState({
      tasks: [...newTasks, newTask],
    });
  };

  handleInputChanged = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1>Task List {newTask} </h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleInputChanged}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlus></FaPlus>
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit className="edit"></FaEdit>
                <FaWindowClose className="delete"></FaWindowClose>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
