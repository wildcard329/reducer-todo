import React, {useState, useReducer} from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [todos, setTodos] = useState([{}]);
 
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
