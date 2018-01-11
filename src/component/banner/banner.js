/**
 * @author yvonnexchen
 * @date 2017-11-27
 * @desc
 */
import Nerv from 'nervjs'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { isLocaleChinese } from '../../util'
import { FormattedMessage } from 'react-intl'
import Toast from '../toast/toast'
import Video from '../video/video'
import { androidstudio } from 'react-syntax-highlighter/styles/hljs'
import './banner.scss'

class Banner extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      tip: false,
      play: false
    }
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

  playVideo = () => {
    if (!this.state.play) {
      this.setState({
        play: true
      })
    }
  }

  stopVideo = () => {
    if (this.state.play) {
      this.setState({
        play: false
      })
    }
  }

  render () {
    const isCn = isLocaleChinese.call(this)
    return (
      <div className='banner'>
        <div className='banner_main'>
          <Toast show={this.state.tip} />
          <Video play={this.state.play} pause={this.stopVideo} />
          <h1 className='banner_tit'>
            Hi, I am Nerv{' '}
            {isCn && <span onClick={this.playVideo} className='banner_play_btn' />}
          </h1>
          <h2 className='banner_desc'>
            <FormattedMessage id='banner_desc' />
          </h2>
          <div className='banner_btns'>
            {isCn && (
              <a className='toDoc' href='https://nervjs.github.io/docs/'>
                起步
              </a>
            )}
            <a
              className='toGithub'
              href='https://github.com/NervJS/nerv'
              target='_blank'
            >
              GitHub
            </a>
          </div>
        </div>
        <div className='banner_quickstart'>
          <SyntaxHighlighter
            className='banner_code_main'
            language='javascript'
            customStyle={{
              borderRadius: '4px',
              padding: '30px'
            }}
            style={androidstudio}
          >
            {`/** Quick Start With NPM **/
npm install nervjs --save
              `}
          </SyntaxHighlighter>
        </div>
      </div>
    )
  }
}

module.exports = Banner
