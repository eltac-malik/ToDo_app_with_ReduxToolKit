import React from "react";
import { toggle,delTodo } from "../redux/todos/todoSlice";
import { useSelector, useDispatch } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {todos.map((e, i) => (
          <li className={e.complated ? "complated li" : "li"} key={i}>
            <div className="text">{e.title}</div>
            <div className="btns">
            <button onClick={()=> dispatch(toggle({id:e.id}))}>{e.complated ? <i class="fa-solid fa-arrow-rotate-left"></i>:<i class="fa-solid fa-check"></i>}</button>
            <button onClick={()=> dispatch(delTodo({id:e.id}))}><i class="fa-solid fa-trash-can"></i></button>
          </div>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
