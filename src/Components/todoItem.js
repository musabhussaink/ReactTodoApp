import React from 'react';
import firebase from '../fire';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import '../App.css';

export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };
  return (
    <div>
      <h1 className={todo.complete ? 'todo-row complete' : 'todo-row'}>{todo.title}</h1>
      <div>
        <button onClick={deleteTodo} className='delete-icon'>Delete
            <RiCloseCircleLine/>
        </button>
        <button onClick={completeTodo} className='complete-icon'>Complete
            <TiTick/>
        </button>
      </div>
    </div>
  );
}