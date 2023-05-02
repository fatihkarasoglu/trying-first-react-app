import { useState } from 'react';
import './App.css';
import Test from './test';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <h3> {process.env.NODE_ENV} </h3> */}
      <button onClick={() => setShow(show => !show)}>
        {show ? 'Gizle' : 'Göster'}
      </button>
      {show && <Test/>}
    </div>
  );
}

export default App;
