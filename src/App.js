import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import TodosContainer from './components/todos/TodosContainer'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
        <TodosContainer />
      </div>
    );
  }
}
