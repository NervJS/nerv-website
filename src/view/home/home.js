/**
 * @author yvonnexchen
 * @date 2017-11-27
 * @desc homepage
 */
import Nerv from 'nervjs'

import Banner from '../../component/banner/banner'
import Feature from '../../component/feature/feature'
import Compare from '../../component/compare/compare'
import Code from '../../component/code/code'
import User from '../../component/user/user'
import Copyright from '../../component/copyright/copyright'

import './home.scss'

class Home extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='home'>
        <Banner/>
        <Feature/>
        <Compare/>
        <Code/>
        <User/>
        <Copyright/>
      </div>
    )
  }
}

module.exports = Home
