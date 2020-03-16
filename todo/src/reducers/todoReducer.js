import React, {useReducer} from 'react';

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: Date.now()
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                completed: true
            };
        // case: 'ADD_TODO':
        //     return {
        //         ...state
        //     }
        default:
            return state;
    }
} 