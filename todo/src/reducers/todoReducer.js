export const initialState = {todo: []}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            console.log(state, 'addtodo')
            return {
                ...state,
                todo: [...state.todo, { todo: action.todo, completed: false, id: Date.now()  }]
            };
        case 'TOGGLE_COMPLETE':
            console.log(state, "togglecomp")
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