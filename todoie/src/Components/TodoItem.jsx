import React from 'react';

const TodoItem = (todos) => {
  return (
    <li className='todo-item'>
        <span>
        {todos.completed?<></>:<input type='checkbox'/>}
        <span className='item-text'>{todos.text}</span>
        </span>
        <p>...</p>
    </li>
  );
};

export default TodoItem;