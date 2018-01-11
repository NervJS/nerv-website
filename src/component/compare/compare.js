/**
 * @author yvonnexchen
 * @date 2017-12-1
 * @desc 性能对比
 */
import Nerv from 'nervjs'
import './compare.scss'

import CpTitle from '../cp_title/cp_title'
import BarGraph from '../bar_graph/bar_graph'

class Compare extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      currentIdx: 0,
      barGraph: [
        // js bench
        {
          xItem: [
            { name: 'preact', val: 1.25 },
            { name: 'React 15.4', val: 1.26 },
            { name: 'React 16.0', val: 1.17 },
            { name: 'Nerv', val: 1.06, nerv: true },
            { name: 'Vue 2.4.4', val: 1.25 },
            { name: 'Anu', val: 1.47 },
            { name: 'React-lite', val: 2.33 }
          ],
          yItem: {
            max: 2.5,
            min: 1,
            slice: 4
          },
          more: 'https://github.com/krausest/js-framework-benchmark',
          desc: 'js_framework'
        },
        // memory
        {
          xItem: [
            { name: 'preact', val: 1.37 },
            { name: 'React 15.4', val: 1.55 },
            { name: 'React 16.0', val: 1.45 },
            { name: 'Nerv', val: 1.14, nerv: true },
            { name: 'Vue 2.4.4', val: 1.22 },
            { name: 'Anu', val: 1.28 },
            { name: 'React-lite', val: 1.5 }
          ],
          yItem: {
            max: 1.6,
            min: 1,
            slice: 4
          },
          more: 'https://github.com/krausest/js-framework-benchmark',
          desc: 'memory'
        },
        // ui bench
        {
          xItem: [
            { name: 'preact', val: 2.26 },
            { name: 'React 15.4', val: 1.7 },
            { name: 'React 16.0', val: 1.47 },
            { name: 'Nerv', val: 1.1, nerv: true },
            { name: 'Anu', val: 1.98 },
            { name: 'React-lite', val: 2.14 }
          ],
          yItem: {
            max: 2.5,
            min: 1,
            slice: 4
          },
          more: 'https://github.com/localvoid/uibench',
          desc: 'ui_bench'
        },
        // fps
        {
          xItem: [
            { name: 'preact', val: 150 },
            { name: 'React', val: 80 },
            { name: 'Angular', val: 70 },
            { name: 'Nerv', val: 160, nerv: true },
            { name: 'Vue', val: 100 },
            { name: 'Anu', val: 85 },
            { name: 'React-lite', val: 68 }
          ],
          yItem: {
            max: 160,
            min: 1,
            slice: 4
          },
          more: 'https://github.com/mathieuancelin/js-repaint-perfs',
          desc: 'db_monster'
        }
      ]
    }
  }

  componentDidMount () {}

  setCurrentIdx (idx, event) {
    const tg = event.target
    const siblings = tg.parentNode.parentNode.children
    for (let i in siblings) {
      siblings[i].className = ''
    }
    tg.parentNode.className = 'current'
    this.setState({
      currentIdx: idx
    })
  }

  render () {
    const { currentIdx } = this.state
    return (
      <div className='compare'>
        <div className='grid_c1'>
          <CpTitle data={'benchmarks'} />
          <div className='compare_box'>
            <ul className='compare_select'>
              <li
                key='0'
                className='current'
                onClick={this.setCurrentIdx.bind(this, 0)}
              >
                <span className='compare_js'>JS Framework</span>
              </li>
              <li
                key='1'
                onClick={this.setCurrentIdx.bind(this, 1)}
              >
                <span className='compare_mu'>Memory usage</span>
              </li>
              <li
                key='2'
                onClick={this.setCurrentIdx.bind(this, 2)}
              >
                <span className='compare_ui'>UI Bench</span>
              </li>
              <li
                key='3'
                onClick={this.setCurrentIdx.bind(this, 3)}
              >
                <span className='compare_db'>DB Monster (fps)</span>
              </li>
            </ul>
            <div className='compare_main'>
              <BarGraph data={this.state.barGraph[currentIdx]} />
            </div>
          </div>
          {/* <ul className='compare_select'>
            <li key='0' className='current' onClick={() => {this.setCurrentIdx(0)}}><span>JS Framework</span></li>
            <li key='1' onClick={() => {this.setCurrentIdx(1)}}><span>Memory usage</span></li>
            <li key='2' onClick={() => {this.setCurrentIdx(2)}}><span>UI Bench</span></li>
            <li key='3' onClick={() => {this.setCurrentIdx(3)}}><span>DB Monster (fps)</span></li>
          </ul>
          <div className='compare_main'>
            <BarGraph
              data={this.state.barGraph[currentIdx]}
              desc={this}
            />
          </div> */}
        </div>
      </div>
    )
  }
}

module.exports = Compare
