import React from 'react';
import TodoListItem from "./todo_list_item";

const todoList = (todos, recieveTodo) => {
    // debugger
    const todoEles = todos.todos.map(todo => { 
        return <li key={todo.id}> 
            <TodoListItem todo={todo} /> 
        </li> });

    return (
        <ul>
            {todoEles}
        </ul>
        )
}

export default todoList;