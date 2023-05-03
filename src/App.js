import { useState } from 'react';
import { useRef } from 'react';
import './App.css';
import Test from './test';

function App() {
  const [show, setShow] = useState(false);

  const inputRef = useRef();
  const odakInput = () => {
      console.log(inputRef.current);
      inputRef.current.focus();
  }

  return (
    <div className="App">
      {/* <h3> {process.env.NODE_ENV} </h3> */}
      <button onClick={() => setShow(show => !show)}>
        {show ? 'Gizle' : 'Göster'}
      </button>
      {show && <Test/>}
      <hr/>
      <input type='text' ref={inputRef}></input>
      <button onClick={odakInput}>Odakla</button>
    </div>
  );
}

export default App;
