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
            {name: 'PReact', val: 1.25},
            {name: 'React 15.4', val: 1.26},
            {name: 'React 16.0', val: 1.17},
            {name: 'Nerv', val: 1.06, nerv: true},
            {name: 'Vue 2.4.4', val: 1.25},
            {name: 'Anu', val: 1.47},
            {name: 'React-lite', val: 2.33}
          ],
          yItem: {
            max: 2.5,
            min: 1,
            slice: 4
          },
          more: 'https://github.com/krausest/js-framework-benchmark',
          desc: '这是个简单的测试框架性能的例子。我们选取了一些市面上常用的JS框架，通过随机创建一个大型的表格，对比他们的运行速率，可以看到Nerv执行完所有用例的时间远低于其他框架。'
        },
        // memory
        {
          xItem: [
            {name: 'PReact', val: 1.37},
            {name: 'React 15.4', val: 1.55},
            {name: 'React 16.0', val: 1.45},
            {name: 'Nerv', val: 1.14, nerv: true},
            {name: 'Vue 2.4.4', val: 1.22},
            {name: 'Anu', val: 1.28},
            {name: 'React-lite', val: 1.5}
          ],
          yItem: {
            max: 1.6,
            min: 1,
            slice: 4
          },
          more: 'https://github.com/krausest/js-framework-benchmark',
          desc: '与测试框架性能的测试用例相似，这次的对比维度是内存占用率，可发现，nerv在此项中的表现也相当的优秀，相比于其他框架，nerv的内存占用率仅为1.14。'
        },
        // ui bench
        {
          xItem: [
            {name: 'PReact', val: 2.26},
            {name: 'React 15.4', val: 1.7},
            {name: 'React 16.0', val: 1.47},
            {name: 'Nerv', val: 1.1, nerv: true},
            {name: 'Anu', val: 1.98},
            {name: 'React-lite', val: 2.14}
          ],
          yItem: {
            max: 2.5,
            min: 1,
            slice: 4
          },
          more: 'https://github.com/localvoid/uibench',
          desc: '本例子使用UI Benchmark对比若干JS框架的渲染速度，相同测试用例下，nerv的渲染耗时最短。'
        },
        // fps
        {
          xItem: [
            {name: 'PReact', val: 150},
            {name: 'React', val: 80},
            {name: 'Angular', val: 70},
            {name: 'Nerv', val: 160, nerv: true},
            {name: 'Vue', val: 100},
            {name: 'Anu', val: 85},
            {name: 'React-lite', val: 68}
          ],
          yItem: {
            max: 160,
            min: 1,
            slice: 4
          },
          more: 'https://github.com/mathieuancelin/js-repaint-perfs',
          desc: '我们增加了UI渲染性能这个维度来体现nerv在各方面变现的优秀性。对比与其他框架，nerv的fps高达160帧/秒，如此高的渲染性能，实现丝滑般体验的动画效果将不再是件难事。'
        }
      ]
    }
  }

  componentDidMount () {

  }

  setCurrentIdx = (idx) => {
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
    const {currentIdx} = this.state
    return (
      <div className='compare'>
        <div className='grid_c1'>
          <CpTitle data={'性能 Benchmarks'} />
          <div className='compare_box'>
            <ul className='compare_select'>
              <li key='0' className='current' onClick={() => { this.setCurrentIdx(0) }}>
                <span className='compare_js'>JS Framework</span>
              </li>
              <li key='1' onClick={() => { this.setCurrentIdx(1) }}>
                <span className='compare_mu'>Memory usage</span>
              </li>
              <li key='2' onClick={() => { this.setCurrentIdx(2) }}>
                <span className='compare_ui'>UI Bench</span>
              </li>
              <li key='3' onClick={() => { this.setCurrentIdx(3) }}>
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
