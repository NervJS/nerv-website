/**
 * @author yvonnexchen
 * @date 2017-12-4
 * @desc 柱状图
 */
import Nerv from 'nervjs'
import { FormattedMessage } from 'react-intl'
import './bar_graph.scss'

class BarGraph extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
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
      }
    }
  }

  render () {
    const { xItem, yItem, desc, more } = this.props.data
    let component = (yItem.max - yItem.min) / (yItem.slice - 1)
    const xitems = xItem.map(item => {
      return (
        <li
          className='bar_axis_x_item'
          style={{ height: `${(item.val - yItem.min) / component * 100}px` }}
        >
          <span className='bar_axis_name'>{item.name}</span>
          <span className={item.nerv ? 'bar_axis_bar nerv' : 'bar_axis_bar'} />
        </li>
      )
    })
    let yitemsVal = []
    for (let i = 0, len = yItem.slice; i < len; i++) {
      let curVal =
        (component * i + yItem.min).toString().indexOf('.') !== -1
          ? (component * i + yItem.min).toFixed(1)
          : component * i + yItem.min
      // curVal.toString().indexOf('.') !== -1
      yitemsVal.push(curVal)
    }
    const yitems = yitemsVal.reverse().map(item => {
      return <li className='bar_axis_y_item'>{item}</li>
    })
    return (
      <div className='bar_graph'>
        <div className='bar_axis'>
          <ul className='bar_axis_y'>{yitems}</ul>
          <ul className='bar_axis_x'>{xitems}</ul>
        </div>
        <div className='bar_graph_desc'>
          <p>
            <FormattedMessage id={desc} />
          </p>
          <a className='bar_graph_btn' href={more} target='_blank'>
            <FormattedMessage id='learn_more' />
          </a>
        </div>
      </div>
    )
  }
}

module.exports = BarGraph
