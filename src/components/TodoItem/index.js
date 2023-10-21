// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component{
    const {todoDetails} = this.props 

    const {todo, id} = todoDetails

    render(){
        return(
            <li className = "todo-item-cont">
                <p className="todo-item-para">{todo}</p>
                <button className="delete-btn" type="button" onClick={}>Delete</button>
            </li>
        )
    }
}

export default TodoItem