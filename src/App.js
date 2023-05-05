import { useReducer } from 'react';
// import { useRef } from 'react';
import './App.css';
// import Test from './test';

function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'SET_TODO':
      return{
        ...state,
        todo: action.value
      }
    case 'ADD_TODO':
      return{
        ...state,
        todo: '',
        todos: [
          ...state.todos,
          action.todo
        ]
      }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: ''
  })

  // const [todos, setTodos] = useState([]);
  // const [todo, setTodo] = useState();
  const submitHandle = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      todo: state.todo
    })
    // setTodos([...todos, todo]);
    // setTodo('');
  }
  const onChange = e => {
    dispatch({
      type: 'SET_TODO',
      value: e.target.value
    })
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
        <input type='text' value={state.todo} onChange={onChange}></input>
        <button disabled={!state.todo} type='submit'>Ekle</button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
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
