import React from 'react';

// class TodoListItem extends React.Component{
   
//     render(){
//         <li key={this.props.id}>
//             <h3>{this.props.title}</h3>
//             <p>{this.props.body}</p>
//         </li>
//     }
// }

const TodoListItem = ({todo}) => {
    return (
        <>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
        </>
    )
}

export default TodoListItem;
