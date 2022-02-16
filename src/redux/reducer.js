import { ADD_SECTION, ADD_TODO, DELETE_TODO, EDIT_TODO } from "./action"
import initialState from "./initialState";


const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            const oldTodo=state.todos[action.section]?state.todos[action.section]:[];
            return {
                ...state,
                todos:{
                    ...state.todos,
                    [action.section]:[...oldTodo, action.item]
                }
            }
        case DELETE_TODO:
            return {
                ...state,
                todos:{
                    ...state.todos,
                    [action.section]: state.todos[action.section].filter(todo=>todo.id!==action.id)
                }
            }
        case EDIT_TODO:
            return {
                ...state,
                todos:{
                    ...state.todos,
                    [action.section]: state.todos[action.section].map(todo=>{
                        if(todo.id===action.id){
                            return {...todo, value:action.value,dateAndTime: new Date()};
                        }
                        return todo;
                    })
                }
               
            }
        case ADD_SECTION:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [action.section]: []
                }
            }
        default:
            return state;
    }
}

export default rootReducer;
