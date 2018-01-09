/**
 * @author yvonnexchen
 * @date 2017-11-27
 * @desc nav
 */
import Nerv from 'nervjs'
import Toast from '../toast/toast'
import './nav.scss'

class Nav extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      overbanner: false,
      tip: false
    }
  }

  componentDidMount () {
    this.overBanner()
  }

  overBanner () {
    const bannerHei = 500
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop >= bannerHei) {
        this.setState({
          overbanner: true
        })
      } else {
        this.setState({
          overbanner: false
        })
      }
    })
  }

  showTip = () => {
    if (this.state.tip) return
    this.setState({
      tip: true
    })
    setTimeout(() => {
      this.setState({
        tip: false
      })
    }, 1600)
  }

  render () {
    const {overbanner} = this.state
    return (
      <div className={overbanner ? 'nav_overbanner nav' : 'nav'}>
        <Toast show={this.state.tip} />
        <div className='grid_c1'>
          <span className='nav_logo' />
          <ul className='nav_content'>
            <li><a href='javascript:void(0)'>首页</a></li>
            <li><a href='https://nervjs.github.io/docs'>文档</a></li>
            <li><a href='https://github.com/NervJS/nerv' target='_blank'>Github</a></li>
            <li className='nav_switch'>
              <span className='nav_switch_hide'>中</span>
              <span onClick={this.showTip} className='nav_switch_show'>En</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
