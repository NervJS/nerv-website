/**
 * @author yvonnexchen
 * @date 2017-11-27
 * @desc
 */

import Nerv from 'nervjs'
import { IntlProvider } from 'react-intl'
import Nav from './component/nav/nav.js'
import Home from './view/home/home.js'

import './static/css/global.css'
import './static/css/base.css'

function App () {
  return (
    <IntlProvider>
      <div className='main'>
        <Nav />
        <Home />
      </div>
    </IntlProvider>
  )
}

Nerv.render(<App />, document.getElementById('J_container'))
