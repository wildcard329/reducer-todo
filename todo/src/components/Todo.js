import React from 'react';

const Todo = props => {
    return (
        <div
            onClick={() => props.dispatch({ type: "TOGGLE_COMPLETE", payload: props.todo.id})}
            className={`todo${props.todo.completed ? ' completed' : ''}`}>
                <p>{props.todo.todo}</p>
            </div>
    )
}

export default Todo;