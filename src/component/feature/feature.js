/**
 * @author yvonnexchen
 * @date 2017-11-27
 * @desc
 */
import Nerv from 'nervjs'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
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
          <CpTitle data='features' />
          <div className='feature_main'>
            <div>
              <h3>
                <span className='feature_icon feature_icon_tiny' />
                <p>
                  <FormattedMessage id='size' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedMessage id='size_desc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='feature_icon feature_icon_faster' />
                <p>
                  <FormattedMessage id='perf' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedMessage id='perf_desc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='feature_icon feature_icon_virtual' />
                <p>
                  <FormattedMessage id='ecos' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedMessage id='ecos_desc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='feature_icon feature_icon_types' />
                <p>
                  <FormattedMessage id='isom' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedMessage id='isom_desc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='feature_icon feature_icon_ie' />
                <p>
                  <FormattedMessage id='compat' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedMessage id='compat_desc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='feature_icon feature_icon_tool' />
                <p>
                  <FormattedMessage id='battle' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedHTMLMessage id='battle_desc' />
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Feature
