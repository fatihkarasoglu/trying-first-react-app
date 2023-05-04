// import { useState } from 'react';
// import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
// import Test from './test';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();
  const submitHandle = e => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  }

  // const [show, setShow] = useState(false);

  // const inputRef = useRef();
  // const odakInput = () => {
  //     console.log(inputRef.current);
  //     inputRef.current.focus();
  // }

  return (
    <div className="App">
      <h1>Todos</h1>
      <form onSubmit={submitHandle}>
        <input type='text' value={todo} onChange={e => setTodo(e.target.value)}></input>
        <button disabled={!todo} type='submit'>Ekle</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>

      {/* <h3> {process.env.NODE_ENV} </h3>
      <button onClick={() => setShow(show => !show)}>
        {show ? 'Gizle' : 'Göster'}
      </button>
      {show && <Test/>}
      <hr/>
      <input type='text' ref={inputRef}></input>
      <button onClick={odakInput}>Odakla</button> */}
    </div>
  );
}

export default App;
