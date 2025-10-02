// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todo from "./components/Todo";
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import About from './components/About';
import EditBox from './components/EditBox';
import TodoState from './context/todoFile/TodoState';
import { useState,useEffect } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const[todo,setTodo]=useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/todos")
      .then((res) => {
        console.log("Fetched todos:", res.data);
        const withUiIndex = res.data.map((t, index) => ({
          id: t.id,       
          title: t.title,
          desc: t.desc,
          uiIndex: index + 1
        }));
        setTodo(withUiIndex);
      })
      .catch((err) => console.error("Error fetching todos:", err));
  }, []);


const onDelete = (item) => {
  console.log("Deleting item:", item);   // should now show a valid id
  axios.delete(`http://127.0.0.1:5000/todos/${item.id}`)
    .then(() => {
      const filtered = todo.filter((e) => e.id !== item.id);
      const reIndexed = filtered.map((e, index) => ({
        ...e,
        uiIndex: index + 1
      }));
      setTodo(reIndexed);
    })
    .catch((err) => console.error(err));
};

const addTodo = (title, desc) => {
  axios.post("http://127.0.0.1:5000/todos", { title, desc })
    .then((res) => {
      // backend returns {id, title, desc}
      const newTodo = {
        id: res.data.id,       // take correct backend id
        title: res.data.title,
        desc: res.data.desc
      };
      const updatedTodos = [...todo, newTodo];
      // assign uiIndex fresh for UI
      const withUiIndex = updatedTodos.map((t, index) => ({
        ...t,
        uiIndex: index + 1
      }));

      setTodo(withUiIndex);
    })
    .catch((err) => console.error(err));
};
    //lets your component remember values between renders: useState
    //state of an array and update the array
 
const [editItem, setEditItem] = useState(null);
const [editTitle, setEditTitle] = useState("");
const [editDesc, setEditDesc] = useState("");
const [showModal, setshowModal] = useState(false);

 const onEdit = (item) => {
    console.log("Editing item:", item); // 👀 check if item.id exists

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

  axios.put(`http://127.0.0.1:5000/todos/${editItem.id}`, {
    title: editTitle,
    desc: editDesc
  })
    .then(() => {
      const updatedTodos = todo.map((t) =>
        t.id === editItem.id
          ? { ...t, title: editTitle, desc: editDesc } // keep id and uiIndex intact
          : t
      );
      
      const withUiIndex = updatedTodos.map((t, index) => ({
        ...t,
        uiIndex: index + 1
      }));

      setTodo(withUiIndex);
      setEditItem(null);
      setshowModal(false);
    })
    .catch((err) => console.error(err));
};

  const CancelEdit = () => {
    setEditItem(null);
    setshowModal(false);
  };

  

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
          <Route path="/about" element={<About/>} />
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
