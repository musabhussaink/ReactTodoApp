import React, { useState } from 'react';
import firebase from '../fire';

export default function Form() {
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title,
      complete: false,
    };

    todoRef.push(todo);
  };
  return (
    <div>
        <form className='todo-form'>
            <input type="text" onChange={handleOnChange} value={title} className='todo-input'/>
            <button onClick={createTodo} className='todo-button'>Add Todo</button>
        </form>
    </div>
  );
  }