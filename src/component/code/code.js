/**
 * @author yvonnexchen
 * @date 2017-12-6
 * @desc 代码块
 */
import Nerv from 'nervjs'
import SyntaxHighlighter from 'react-syntax-highlighter'
import CpTitle from '../cp_title/cp_title'
import Counter from '../counter/counter'
import TodoList from '../todolist/todolist'
import { dracula } from 'react-syntax-highlighter/styles/hljs'

import './code.scss'

class Code extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      currentIdx: 0
    }
  }

  switchCode (idx, event) {
    const siblings = event.target.parentNode.children
    for (let i in siblings) {
      siblings[i].className = ''
    }
    event.target.className = 'current'
    this.setState({
      currentIdx: idx
    })
  }

  render () {
    const codeString = `import Nerv from 'nervjs'

class Counter extends Nerv.Component {
  setTime = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDay()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const sec = date.getSeconds()
    this.setState({
      year,
      month,
      day,
      hour,
      minute,
      sec
    })
  }

  componentWillMount () {
    this.setTime()
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  componentDidMount () {
    this.interval = setInterval(this.setTime, 1000)
  }

  componentWillReceiveProps () {
    this.setTime()
  }

  render () {
    const { year, month, day, hour, minute, sec } = this.state
    return (
      <div className='counter'>
        <span>The time is</span>{year}-{month}-{day} {hour}:{minute}:{sec}
      </div>
    )
  }
}

export default Counter`

    const codeString2 = `import Nerv from 'nervjs'

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
    this.addTodo({
      createTime: new Date().getTime(),
      title: this.state.inputTodoValue
    })
  }

  addTodo (todoItem) {
    const todos = this.state.todos.concat()
    todos.push(todoItem)
    this.setState({
      todos
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
          <input type='text' onKeyDown={this.addTodoKey} onChange={this.setTodoValue} />
          <button onClick={this.addTodoClick}>add</button>
        </div>
        <ul className='list'>
          {this.state.todos.map((item, index) => (
            <li className='list_item'>
              <span>{item.title}</span>
              <a href=' ' onClick={this.deleteTodo.bind(this, index)}>x</a >
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList`
    const { currentIdx } = this.state
    return (
      <div className='code'>
        <CpTitle data={'examples'} />
        <div className='code_examples'>
          <div className={currentIdx === 0 ? 'code_wrap show' : 'code_wrap'}>
            <SyntaxHighlighter
              className='code_main'
              language='javascript'
              customStyle={{
                padding: '30px'
              }}
              style={dracula}
            >
              {codeString}
            </SyntaxHighlighter>
            <div className='code_result'>
              <Counter />
            </div>
          </div>
          <div className={currentIdx === 1 ? 'code_wrap show' : 'code_wrap'}>
            <SyntaxHighlighter
              className='code_main'
              language='javascript'
              customStyle={{
                padding: '30px'
              }}
              style={dracula}
            >
              {codeString2}
            </SyntaxHighlighter>
            <div className='code_result'>
              <TodoList />
            </div>
          </div>
        </div>
        <ul className='code_switch'>
          <li
            className='current'
            onClick={this.switchCode.bind(this, 0)}
          />
          <li
            onClick={this.switchCode.bind(this, 1)}
          />
        </ul>
      </div>
    )
  }
}

module.exports = Code
