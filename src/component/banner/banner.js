/**
 * @author yvonnexchen
 * @date 2017-11-27
 * @desc
 */
import Nerv from 'nervjs'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Toast from '../toast/toast'
import { androidstudio } from 'react-syntax-highlighter/styles/hljs'
import './banner.scss'

class Banner extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      tip: false
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

  render () {
    return (
      <div className='banner'>
        <div className='banner_main'>
          <Toast show={this.state.tip}/>
          <h1 className='banner_tit'>Hi, I am Nerv</h1>
          <h2 className='banner_desc'>一个基于 Virtual DOM 的类 React 组件框架</h2>
          <div className='banner_btns'>
            <a className='toDoc' onClick={this.showTip} href="javascript:void(0)">起步</a>
            <a className='toGithub' href="https://github.com/NervJS/nerv" target='_blank'>Github</a>
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
            style={androidstudio}>
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
