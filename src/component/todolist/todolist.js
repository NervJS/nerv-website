/**
 * @author yvonnexchen
 * @date 2017-12-11
 * @desc 代码示例2
 */
import Nerv from 'nervjs'
import './todolist.scss'

class TodoList extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      todos: [],
      inputTodoValue: ''
    }
  }

  addTodoKey = e => {
    if (e && e.keyCode === 13) {
      this.addTodo({
        createTime: new Date().getTime(),
        title: e.target.value
      })
    }
  }

  addTodoClick = () => {
    if (!this.state.inputTodoValue) return
    this.addTodo({
      createTime: new Date().getTime(),
      title: this.state.inputTodoValue
    })
  }

  addTodo (todoItem) {
    const todos = this.state.todos.concat()
    todos.push(todoItem)
    this.refs.todos.value = ''
    this.setState({
      todos,
      inputTodoValue: ''
    })
  }

  setTodoValue = e => {
    this.changeTimer && clearTimeout(this.changeTimer)
    this.changeTimer = setTimeout(() => {
      this.setState({
        inputTodoValue: e.target.value
      })
    }, 100)
  }

  deleteTodo (index, e) {
    e.preventDefault()
    const todos = this.state.todos.concat()
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }

  render () {
    return (
      <div className='todo'>
        <div className='todo_add'>
          <input type='text' ref='todos' onKeyDown={this.addTodoKey} onChange={this.setTodoValue} />
          <button onClick={this.addTodoClick}>添加</button>
        </div>
        <ul className='list'>
          {this.state.todos.map((item, index) => (
            <li className='list_item'>
              <span>{item.title}</span>
              <a href=' ' onClick={this.deleteTodo.bind(this, index)}>x</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

module.exports = TodoList
