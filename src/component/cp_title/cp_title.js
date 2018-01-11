/**
 * @author yvonnexchen
 * @date 2017-12-5
 * @desc 模块标题
 */
import Nerv from 'nervjs'
import { FormattedMessage } from 'react-intl'
import './cp_title.scss'

class CpTitle extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    const { data } = this.props
    return (
      <h2 className='cp_title'>
        <span>
          <FormattedMessage id={data} />
        </span>
      </h2>
    )
  }
}

module.exports = CpTitle
