/**
 * @author yvonnexchen
 * @date 2017-11-27
 * @desc
 */

import Nerv from 'nervjs'
import Nav from './component/nav/nav.js'
import Home from './view/home/home.js'

import './static/css/global.css'
import './static/css/base.css'

function App () {
  return (
    <div className='main'>
      <Nav />
      <Home />
    </div>
  )
}

Nerv.render(<App />, document.getElementById('J_container'))
