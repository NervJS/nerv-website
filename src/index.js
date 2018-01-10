/**
 * @author yvonnexchen
 * @date 2017-11-27
 * @desc
 */

import Nerv from 'nervjs'
import { IntlProvider } from 'react-intl'
import Nav from './component/nav/nav.js'
import Home from './view/home/home.js'

import zh from './locales/zh-cn'
import en from './locales/en'

import './static/css/global.css'
import './static/css/base.css'

function chooseLocale () {
  const { language } = navigator
  const isChinese = language[0] + language[1] === 'zh'
  return isChinese ? zh : en
}

function App () {
  return (
    <IntlProvider locale={'en'} messages={chooseLocale()}>
      <div className='main'>
        <Nav />
        <Home />
      </div>
    </IntlProvider>
  )
}

Nerv.render(<App />, document.getElementById('J_container'))
