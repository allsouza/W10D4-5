const allTodos = (state) => {
    const newState = Object.keys(state.todos).map(id => {
        return (state.todos[id])
    });
    return newState;
}

export default allTodos;