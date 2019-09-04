import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
	console.log(todos);
    const todoList = todos.map(
      ({id, title, status}) => (
        <TodoItem
          id={id}
          title={title}
          status={status}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    return (
      <div className="todoList">
        {todoList}    
      </div>
    );
  }
}

export default TodoItemList;