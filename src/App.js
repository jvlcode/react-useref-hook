import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';



function App() {
  const inputRef = useRef(null)
  function submitHandler() {
    // const element = document.getElementById('textInput');
    const element = inputRef.current;
    if(element.value == '') {
      element.focus();
    }
  } 
  return (
    <div className="App">
        <h1>useRef Example</h1>
        <input type='text' ref={inputRef} /><button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default App;
