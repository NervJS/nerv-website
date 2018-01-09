/**
 * @author yvonnexchen
 * @date 2017-12-13
 * @desc
 */
import Nerv from 'nervjs'
import './toast.scss'

class Toast extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    const {show} = this.props
    return (
      <div className={show ? 'toast' : 'toast hide'}>
        Coming Soon 敬请期待!
      </div>
    )
  }
}

module.exports = Toast
