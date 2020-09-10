import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./frontend/store/store";
// import TodosApp from "./frontend/components"
import {receiveTodo, receiveTodos} from "./frontend/actions/todo_actions"


document.addEventListener("DOMContentLoaded", () =>{
    const root = document.getElementById('root');
    const store = configureStore();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.store = store;

    ReactDOM.render(<h1>Hello darkness my old friend</h1>, root)
})