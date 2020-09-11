import React from 'react';
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

const todoList = ({todos, receiveTodo}) => {
    // debugger
    const todoEles = todos.map(todo => { 
        return <li key={todo.id}> 
            <TodoListItem todo={todo} /> 
        </li> });

    return (
        <>
        <ul>
            {todoEles}
        </ul>
        <TodoForm receiveTodo={receiveTodo}/>
        </>
        )
}

export default todoList;