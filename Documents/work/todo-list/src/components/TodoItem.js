import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const { title, status, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>
        <div className={`todo-text ${(status==='complete') && 'checked'}`}>
          <div>{title}</div>
        </div>
        {
          (status==='complete') && (<div className="check-mark">✓</div>)
        }
      </div>
	);
 }
}


export default TodoItem;