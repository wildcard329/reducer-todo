import React, {useState} from 'react';


const TodoForm = (props) => {
    const [todo, setTodo] = useState('');
    console.log(props, 'form')
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    props.dispatch({ type: "ADD_TODO", todo })
                    setTodo("");
                }}>
                <input 
                    type="text"
                    name="todo"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                />
            </form>
        </div>
    )
}

export default TodoForm;