// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {todoDetails} = this.props
    const {todo, id, onDelete} = todoDetails
    const deleteItem = () => {
      onDelete(id)
    }
    return (
      <li className="todo-item-cont">
        <p className="todo-item-para">{todo}</p>
        <button className="delete-btn" type="button" onClick={deleteItem()}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
