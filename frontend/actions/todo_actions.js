export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

export const receiveTodos = (todos) => {
    const action = {
        type: RECEIVE_TODOS,
        todos,

    }
    return action;
}

export const receiveTodo = (todo) => {
    const action = {
        type: RECEIVE_TODO,
        todo,
    }
    return action;
}