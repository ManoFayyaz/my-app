// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todo from "./components/Todo";
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const onDelete=(item)=>{
    // console.log("I am onDelete of",todo);
    setTodo(todo.filter((e)=>{
      return e!==item;
    }))
  } ;


  const[todo,setTodo]=useState([
    {id:1, 
     title:"Go to the market", 
     desc:"You need to go to the market to buy food items"},
     {id:2,
      title:"Go to the mall",
      desc:"You need to go to the mall to buy clothes"},
      {id:3,
      title:"Go to the school",
      desc:"You need to go to the school to teach students"}
  ]);

  return (
    <>
      <Navbar title="Todo List" about="About Todo List" /> 
      <Todo todo={todo} onDelete={onDelete}/>
      <Footer title="Footer"/>
  </>
  );
}
 //props
//needed to close the tags with / otherwise it will give errors

export default App;
