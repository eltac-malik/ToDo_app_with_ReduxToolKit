import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import {filterComplated,filterUnComplated} from '../redux/todos/todoSlice'

function Input() {

  const items = useSelector(state => state.todos.items);



  const dispatch = useDispatch();

  console.log(items)

  return (
    <div>
      <div className="filter">
            <button className="select" >All</button>
          <button className="select" onClick={()=> dispatch(filterComplated())} >Complated</button>
          <button className="select" onClick={()=> dispatch(filterUnComplated())}>UnComplated</button>
      </div>
    </div>
  );
}

export default Input;
