/**
 * @author yvonnexchen
 * @date 2017-12-8
 * @desc 示例代码
 */
import Nerv from 'nervjs'
import './counter.scss'

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
        <span>The time is </span>{year}-{month}-{day} {hour}:{minute}:{sec}
      </div>
    )
  }
}

module.exports = Counter
