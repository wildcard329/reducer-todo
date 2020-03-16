import React, {useReducer} from 'react';

export const initialState = [{
    todo: 'Learn about reducers',
    completed: false,
    id: Date.now()
}]

export const todoReducer = (state, action) => {
    switch(action.type) {
        // case 'TOGGLE_COMPLETE':
        //     return {
        //         todos: state.todos.map((t, idx) =>
        //              idx === action.idx ? { ...t, completed: !t.completed } : t)
        //     };
        // case 'ADD_TODO':
        //     return {
        //         todos: [...state.todos, { text: action.text, completed: false }]
        //     }
        default:
            return state;
    }
} 