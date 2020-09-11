import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./frontend/store/store";
// import TodosApp from "./frontend/components"
import {receiveTodo, receiveTodos} from "./frontend/actions/todo_actions"
import Root from "./frontend/components/root"
import allTodos from "./frontend/reducers/selectors";

document.addEventListener("DOMContentLoaded", () =>{
    const root = document.getElementById('root');
    const store = configureStore();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.store = store;
    window.allTodos = allTodos;
    ReactDOM.render(<Root store={store} />, root)
})