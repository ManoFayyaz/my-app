// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todo from "./components/Todo";
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import { useState } from 'react';

function App() {

  const onDelete=(item)=>{
    // console.log("I am onDelete of",todo);
    const filtered= todo.filter((e)=>{
      return e!==item;
    })

    const reIndexed = filtered.map((e, index) => ({
    ...e,
    id: index + 1,
  }));

  setTodo(reIndexed);
};


  const addTodo=(title,desc)=>{
    const myTodo={
      id:todo.length+1,
      title:title,
      desc:desc
    }
    setTodo([...todo,myTodo]);

  }
    //lets your component remember values between renders: useState
    //state of an array and update the array

  const[todo,setTodo]=useState([
    {id:1, 
     title:"Go to the market", 
     desc:"You need to go to the market to buy food items"},
     {id:2,
      title:"Go to the mall",
      desc:"You need to go to the mall to buy clothes"}
  ]);

  return (
    <>
      <Navbar title="Todo List" about="About Todo List" /> 
      <AddTodo AddTodo={addTodo}/>
      <Todo todo={todo} onDelete={onDelete}/>
      
      <Footer title="Footer"/>
  </>
  );
}
 //props
//needed to close the tags with / otherwise it will give errors

export default App;
