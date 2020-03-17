import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    console.log(props, "list")
    return (
    <div className="todo-list">
        {props.todos.map(todo => (
            <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />
        ))}
        <button className="clear-btn" onClick={() => props.dispatch({ type: "CLEAR_COMPLETED" })}>
            Clear Completed
        </button>
    </div>
    )
}

export default TodoList;