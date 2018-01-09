
/**
 * @author yvonnexchen
 * @date 2017-12-5
 * @desc 使用者
 */
import Nerv from 'nervjs'
import './user.scss'

import CpTitle from '../cp_title/cp_title'

class User extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='user'>
        <div className='grid_c1'>
          <CpTitle data={'使用者 Users'}/>
          <div className='user_main'>
            <div className='user_wrap'>
              <div className='user_card'>
                <a href="http://jd.com/" className='user_card_img' target='_blank'></a>
                <span className='user_desc'>京东首页及核心频道</span>
              </div>
            </div>
            <div className='user_wrap'>
              <div className='user_card'>
                <a href="http://www.toplife.com/" className='user_card_img' target='_blank'></a>
                <span className='user_desc'>奢侈品项目全站</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = User
