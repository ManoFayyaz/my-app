import React, { useEffect } from 'react'
import { useContext } from 'react';
import TodoContext from "../context/todoFile/TodoContext";

export default function About() {
  const {state,update} = useContext(TodoContext);

  useEffect(() => {
    update();
  },[update]);

  return (
    <div>
      <>
        <h3>About Todo List</h3>
        <p>This is a simple Todo List application built with React. You can add, edit, and delete tasks to help manage your daily activities.</p>
        <p>Made by:</p>
        <h3>{state.name}</h3>
        <h3>{state.class}</h3>       
        </>
    </div>
  )
}
