import Nerv from 'nervjs'
import { IntlProvider, addLocaleData } from 'react-intl'
import cnLocaleData from 'react-intl/locale-data/zh'
import Nav from './component/nav/nav.js'
import Home from './view/home/home.js'

import zh from './locales/zh-cn'
import en from './locales/en'

function chooseLocale () {
  const { language } = navigator
  const isChinese = language[0] + language[1] === 'zh'
  setDocumentTitle(navigator.language)
  return isChinese ? zh : en
}

addLocaleData(cnLocaleData)

let inst

export function setLanguage (locale) {
  setDocumentTitle(locale)
  inst.setMessage(locale)
}

function setDocumentTitle (locale) {
  document.title = 'Nerv | ' + (locale === 'zh-CN' ? '凹凸实验室' : 'O2 Labs')
}

export class App extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      messages: chooseLocale(),
      locale: navigator.language
    }
    inst = this
  }

  setMessage (locale) {
    const isEn = locale === 'en'
    this.setState({
      messages: isEn ? en : zh,
      locale: isEn ? 'en' : 'zh-CN'
    })
  }

  render () {
    const { messages, locale } = this.state
    return (
      <IntlProvider locale={locale} messages={messages} key={locale}>
        <div className='main'>
          <Nav />
          <Home />
        </div>
      </IntlProvider>
    )
  }
}
