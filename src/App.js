// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todo from "./components/Todo";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar title="Todo List" about="About Todo List" /> 
      <Todo message="Type your text here" msg={true}/>
      <Footer title="Footer"/>
  </>
  );
}
 //props
//needed to close the tags with / otherwise it will give errors

export default App;
