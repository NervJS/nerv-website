/**
 * @author yvonnexchen
 * @date 2017-12-5
 * @desc 版权
 */
import Nerv from 'nervjs'
import './copyright.scss'

class Copyright extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='copyright'>
        <div className='grid_c1'>
          <div className='copyright_aotuicon' />
          <p>© 2017 Created by <a href='https://aotu.io/' target='_blank'>凹凸实验室</a></p>
          <div className='copyright_githubicon'><a href='https://github.com/o2team/o2team.github.io' target='_blank' /></div>
        </div>
      </div>
    )
  }
}

module.exports = Copyright
