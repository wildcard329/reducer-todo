import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
    <div className="todo-list">
        {props.todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
        ))}
        <button className="clear-btn">
            Clear Completed
        </button>
    </div>
    )
}

export default TodoList;