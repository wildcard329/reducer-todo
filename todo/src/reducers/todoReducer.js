export const initialState = {todo: []}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todo: [...state.todo, { todo: action.todo, completed: false, id: Date.now()  }]
            }
        case 'TOGGLE_COMPLETE':
            return {
                todos: state.todos.map((todo, index) => index === action.index ? {...todo, completed: !todo.completed } : todo)
            }
        case 'CLEAR_COMPLETED':
            return {
                todos: this.state.todos.filter(todo => !todo.completed)
            }
        default:
            return state;
    }
} 