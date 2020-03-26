export const initialState = {todo: []}

export const todoReducer = (state =initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todo: [...state.todo, { todo: action.todo, completed: false, id: Date.now()  }]
            };
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                todo: state.todo.map(t => {
                    if (action.payload === t.id) {
                        return {...t,
                                    completed: !t.completed}
                    } else {
                        return t
                    }
                })
            }
        case 'CLEAR_COMPLETED':
            return {
                todo: state.todo.filter(t => t.completed === false )
            }
        default:
            return state;
    }
} 