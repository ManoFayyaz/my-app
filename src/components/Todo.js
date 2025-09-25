import React from "react";
// import PropTypes from 'prop-types';
import TodoItem from "../components/TodoItem";

export default function Todo(props) {
  return (
    <>
      <div className="container">
        <h3 className="todo_heading"><b>Todo List</b></h3>
        
        {props.todo.length===0 ? "No Todos to display" :
        props.todo.map((t)=>{
          return <TodoItem todo={t} key={t.id} onDelete={props.onDelete} onEdit={props.onEdit} />
        })
        }
       

      </div>
    </>
  )
}

//change class to className and for to htmlFor in jsx
                    
