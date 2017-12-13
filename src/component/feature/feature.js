/**
 * @author yvonnexchen
 * @date 2017-11-27
 * @desc
 */
import Nerv from 'nervjs'
import './feature.scss'

import CpTitle from '../cp_title/cp_title'

class Feature extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='feature'>
        <div className='grid_c1'>
          <CpTitle data={'特性 Features'}/>
          <div className='feature_main'>
            <div>
              <h3><span className='feature_icon feature_icon_tiny'></span><p>更小的体积</p></h3>
              <p className='feature_desc'>不到 React 三分之一的体积，低性能设备也能高速地加载并解析执行</p>
            </div>
            <div>
              <h3><span className='feature_icon feature_icon_faster'></span><p>更高的性能</p></h3>
              <p className='feature_desc'>高效、同步的 diff 算法和诸多优化策略使得 Nerv 成为性能最高的前端框架之一</p>
            </div>
            <div>
              <h3><span className='feature_icon feature_icon_virtual'></span><p>无缝兼容React</p></h3>
              <p className='feature_desc'>无需 nerv-compat，只需要在稍稍设置就能享受整个 React 生态的共同成果</p>
            </div>
            <div>
              <h3><span className='feature_icon feature_icon_types'></span><p>同构</p></h3>
              <p className='feature_desc'>不仅在浏览器上能高效地渲染，在服务器上 Nerv 同样能高效地运行</p>
            </div>
            <div>
              <h3><span className='feature_icon feature_icon_ie'></span><p>更优的兼容</p></h3>
              <p className='feature_desc'>和大多数现代框架不同，Nerv 将继续保持对 IE8 的兼容</p>
            </div>
            <div>
              <h3><span className='feature_icon feature_icon_tool'></span><p>战斗洗礼</p></h3>
              <p className='feature_desc'>不管是京东首页的高流量，还是 Toplife 的复杂业务，Nerv 都经受住了来自于真实业务的考验</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Feature
