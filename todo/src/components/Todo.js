import React, { useReducer } from 'react';
import {todoReducer} from '../reducers/todoReducer';

const Todo = props => {
    const [todos, dispatch] = useReducer(todoReducer)
    return (
        <div
            onClick={() => dispatch({ type: "TOGGLE_COMPLETE"})}
            className={`todo${props.todo.completed ? ' completed' : ''}`}>
                <p>{props.todo.todo}</p>
            </div>
    )
}

export default Todo;