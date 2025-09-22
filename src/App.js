// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from "./components/Textarea";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" /> 
      <Textarea message="Type your text here"/>
  </>
  );
}
 //props
//needed to close the tags with / otherwise it will give errors

export default App;
