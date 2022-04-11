import {useState} from "react";
import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/todos/todoSlice'
import {nanoid} from '@reduxjs/toolkit'


function Input() {

  const dispatch = useDispatch()

  const [title,setTitle] = useState("");

  const handleSubmit = (e) =>
  {
    dispatch(addTodo({id:nanoid(),title,complated:false}))

    e.preventDefault(); 
  }
  

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo-input"
          id="todo-input"
          className="todo-input"
          onChange={(e)=>
          {
            setTitle(e.target.value)
          }}
        />
        <button
          id="todo-submit"
          className="button todo-submit"
          type="submit"
          aria-label="add"
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default Input;
