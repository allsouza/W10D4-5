import React from "react";

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            title: "",
            body: "",
        };
        this.uniqueId = this.uniqueId.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render(){
        return (
            <form className="add-todo" onSubmit={this.handleSubmit}>
                <label>Title:
                <input onChange={this.update("title")} value={this.state.title} type="text" name="title"/>
                </label>

                <label>Body:
                <textarea onChange={this.update("body")} value={this.state.body} name="body" id="body" cols="30" rows="10"></textarea>
                </label>
                <input type="submit" value="Save"/>
            </form>
        )
    }

    uniqueId() {
        return new Date().getTime();
    }

    handleSubmit(e){
        // debugger;
        e.preventDefault();
        const todo = {
            id: this.uniqueId(),
            title: this.state.title,
            body: this.state.body,
        }
        this.setState({ title: "", body: "" }); //clears out text boxes after submit
        this.props.receiveTodo(todo);
    }

    update(field){
        return e => {
            this.setState({
                [field]: e.target.value,
            })
        }
    }
}

export default TodoForm;