/**
 * @author yvonnexchen
 * @date 2017-11-27
 * @desc nav
 */
import Nerv from 'nervjs'
import { FormattedMessage } from 'react-intl'
import Toast from '../toast/toast'
import { isLocaleChinese } from '../../util'
import { setLanguage } from '../../app'
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

  setLanguage = locale => () => {
    setLanguage(locale)
  }

  render () {
    const { overbanner } = this.state
    const isCN = isLocaleChinese.call(this)
    return (
      <div className={overbanner ? 'nav_overbanner nav' : 'nav'}>
        <Toast show={this.state.tip} />
        <div className='grid_c1'>
          <span className='nav_logo' />
          <ul className='nav_content'>
            <li>
              <a href='javascript:void(0)'>
                <FormattedMessage id='home' />
              </a>
            </li>
            <li>
              <a
                href={
                  isCN
                    ? 'https://nervjs.github.io/docs'
                    : 'https://github.com/NervJS/nerv'
                }
              >
                <FormattedMessage id='docs' />
              </a>
            </li>
            <li>
              <a href='https://github.com/NervJS/nerv' target='_blank'>
                GitHub
              </a>
            </li>
            <li className='nav_switch'>
              <span
                className={`nav_switch_${isCN ? 'hide' : 'show'}`}
                onClick={this.setLanguage('zh')}
              >
                中
              </span>
              <span
                className={`nav_switch_${!isCN ? 'hide' : 'show'}`}
                onClick={this.setLanguage('en')}
              >
                En
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
