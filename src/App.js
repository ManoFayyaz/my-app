// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todo from "./components/Todo";
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import About from './components/About';
import EditBox from './components/EditBox';
import TodoState from './context/todoFile/TodoState';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

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


  
const [editItem, setEditItem] = useState(null);
const [editTitle, setEditTitle] = useState("");
const [editDesc, setEditDesc] = useState("");
const [showModal, setshowModal] = useState(false);

const onEdit = (item) => {
  setEditItem(item);
  setEditTitle(item.title);
  setEditDesc(item.desc);
  setshowModal(true);
};

const saveEdit = () => {
  if (!editTitle || !editDesc) {
    alert("Title or Description cannot be blank");
    return;
  }

  const updatedTodo = { ...editItem, title: editTitle, desc: editDesc };

  const updatedTodos = todo.map((t) =>
    t.id === editItem.id ? updatedTodo : t
  );

  setTodo(updatedTodos);
  setEditItem(null);
  setshowModal(false); 

};

const CancelEdit = () => {
 setEditItem(null);
 setshowModal(false);

};

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
     <Router>
      <Navbar title="Todo List" about="About Todo List" /> 

      <Routes>
        <Route  path="/"
          element={
            <>
              <AddTodo AddTodo={addTodo} />
              <Todo todo={todo} onDelete={onDelete} onEdit={onEdit} />
              <EditBox
                show={showModal}
                title={editTitle}
                desc={editDesc}
                setTitle={setEditTitle}
                setDesc={setEditDesc}
                onSave={saveEdit}
                onCancel={CancelEdit}
              />
            </>
          }
        />
       </Routes>

      <TodoState>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
    </TodoState>

   
      <Footer title="Footer" />
    </Router>
    </>
  );
}
 //props
//needed to close the tags with / otherwise it will give errors

export default App;
