import { connect } from "react-redux";
import TodoList from "./todo_list";
import allToDos from "../../reducers/selectors"
import { receiveTodo } from "../../actions/todo_actions"

const mapStateToProps = (state) => {
    return {
        todos: allToDos(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    // debugger;
    return {
        receiveTodo: (todo) => {
            dispatch(receiveTodo(todo));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);