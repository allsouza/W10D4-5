import { connect } from "react-redux";
import TodoList from "./todo_list";
import allToDos from "../../reducers/selectors"
import { recieveTodo } from "../../actions/todo_actions"

const mapStateToProps = (state) => {
    return {
        todos: allToDos(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        recieveTodo: (todo) => {
            dispatch(recieveTodo(todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);