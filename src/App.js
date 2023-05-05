import { useReducer, useCallback, useMemo } from 'react';
// import { useRef, useState } from 'react';
import './App.css';
import AddTodo from './addTodo';
import Todos from './Todos';
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
      case 'SET_SEACRH':
        return{
          ...state,
          search: action.value
      }
  }
}

function App() {
  console.log('App rendered.');

  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: '',
    search: ''
  })

  // const [todos, setTodos] = useState([]);
  // const [todo, setTodo] = useState();
  const submitHandle = useCallback(e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      todo: state.todo
    })
  }, [state.todo])
    // setTodos([...todos, todo]);
    // setTodo('');
  const onChange = useCallback(e => {
      dispatch({
        type: 'SET_TODO',
        value: e.target.value
      })
    }, [])

  const searchHandle = e => {
    dispatch({
      type: 'SET_SEARCH',
      value: e.target.value
    })
  }
  
  const filteredTodos = useMemo(() => {
    return state.todos.filter(todo => todo.toLocalLowerCase('TR').includes(state.search.toLocalLowerCase('TR')));
  }, [state.todos, state.search])

  // const [show, setShow] = useState(false);

  // const inputRef = useRef();
  // const odakInput = () => {
  //     console.log(inputRef.current);
  //     inputRef.current.focus();
  // }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input type='text' value={state.value} placeholder='Todolarda Ara' onChange={searchHandle} />
      {state.value}
      <AddTodo submitHandle={submitHandle} onChange={onChange} todo={state.todo}/>
      <Todos todos={filteredTodos} />

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
