

import React, { Component } from 'react';
import Todos from './component/todos';
import AddTodos from './component/addTodo';
 class App extends Component {
   state = {
     todos : [
      {id: 1 , content : 'Work on React Project'},
      {id: 2, content: 'Play Counter Strike'}
     ]
   }
  onHandleDelete = (id) => {
    let newState = this.state.todos.filter(e => {
     return e.id !== id;
    })
    this.setState({
      todos: newState
    })
  }
  onHandleAdd = (e) => {
    e.id = Math.random();
    let updatedState = [...this.state.todos,e];
    this.setState({
      todos: updatedState
    })
  }

  render() {
    return (
      <div className="center red-text container">
          <h1><b><i>The Todo's List</i></b></h1>
          <Todos todos={this.state.todos} onDele = {this.onHandleDelete}/> 
          <AddTodos addtodo = {this.onHandleAdd}/>
      </div>
    )
  }
}

export default App;