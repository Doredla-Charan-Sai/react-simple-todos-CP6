import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  onDelete = uniqueId => {
    const {todosList} = this.state
    this.setState({
      todosList: todosList.filter(eachItem => eachItem.id !== uniqueId),
    })
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="bg-cont">
        <div className="content-cont">
          <h1 className="main-head">Simple Todos</h1>
          <ul className="todo-list">
            {todosList.map(item => (
              <TodoItem
                todoDetails={item}
                key={item.id}
                onTouch={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
