/**
 * @author yvonnexchen
 * @date 2017-11-27
 * @desc doc
 */
import Nerv from 'nervjs'

class Doc extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='doc'>
      </div>
    )
  }
}

module.exports = Doc
