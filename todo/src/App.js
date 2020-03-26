import React, {useReducer} from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState)
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoList todos={todos.todo} dispatch={dispatch} />
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
