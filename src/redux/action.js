export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const ADD_SECTION= 'ADD_SECTION';

export const addTodo = (item,section) => {
    return {
        type: ADD_TODO,
        item: {id: Math.round(Math.random()*1000),value: item,dateAndTime: new Date()},
        section: section
    }
}

export const editTodo = (id,value,section) => {
    return {
        type: EDIT_TODO,
        id: id,
        value: value,
        section: section
    }
}

export const deleteTodo = (id,section) => {
    return {
        type: DELETE_TODO,
        id: id,
        section: section
    }
}

export const addSection = (section) => {
    return {
        type: ADD_SECTION,
        section: section
    }
}