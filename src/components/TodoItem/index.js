// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {todoDetails, onTouch} = this.props
    const {title, id} = todoDetails
    const deleteItem = () => {
      onTouch(id)
    }
    return (
      <li className="todo-item-cont">
        <p className="todo-item-para">{title}</p>
        <button className="delete-btn" type="button" onClick={deleteItem}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
