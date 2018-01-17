/**
 * @author yvonnexchen
 * @date 2017-11-27
 * @desc homepage
 */
import Nerv from 'nervjs'

import Lazyload from '../../component/tools/lazyload'
import Loadable from '../../component/tools/loadable'

import './home.scss'

const loadingPlaceholder = (style, { error, pastDelay }) => {
  if (pastDelay) {
    return <div className='mod_lazyload' style={style} />
  }
  if (error) {
    return ''
  }
  return <div className='mod_lazyload' style={style} />
}

const BannerLoadable = Loadable({
  loader: () => import(
    /* webpackChunkName: "banner" */
    '../../component/banner/banner'
  ),
  loading: loadingPlaceholder.bind(null, {
    height: '500px'
  }),
  delay: 0
})

const FeatureLoadable = Loadable({
  loader: () => import(
    /* webpackChunkName: "feature" */
    '../../component/feature/feature'
  ),
  loading: loadingPlaceholder.bind(null, {
    height: '830px'
  }),
  delay: 0
})

const CompareLoadable = Loadable({
  loader: () => import(
    /* webpackChunkName: "compare" */
    '../../component/compare/compare'
  ),
  loading: loadingPlaceholder.bind(null, {
    height: '881px'
  }),
  delay: 0
})

const CodeLoadable = Loadable({
  loader: () => import(
    /* webpackChunkName: "code" */
    '../../component/code/code'
  ),
  loading: loadingPlaceholder.bind(null, {
    height: '705px'
  }),
  delay: 0
})

const UserLoadable = Loadable({
  loader: () => import(
    /* webpackChunkName: "user" */
    '../../component/user/user'
  ),
  loading: loadingPlaceholder.bind(null, {
    height: '341px'
  }),
  delay: 0
})

const CopyrightLoadable = Loadable({
  loader: () => import(
    /* webpackChunkName: "copyright" */
    '../../component/copyright/copyright'
  ),
  loading: loadingPlaceholder.bind(null, {
    height: '145px'
  }),
  delay: 0
})

const lazyloadOptions = {
  offset: 200,
  placeholderClassName: 'mod_lazyload'
}

export default function Home () {
  return (
    <div className='home'>
      <Lazyload height={500} {...lazyloadOptions}>
        <BannerLoadable />
      </Lazyload>
      <Lazyload height={830} {...lazyloadOptions}>
        <FeatureLoadable />
      </Lazyload>
      <Lazyload height={881} {...lazyloadOptions}>
        <CompareLoadable />
      </Lazyload>
      <Lazyload height={705} {...lazyloadOptions}>
        <CodeLoadable />
      </Lazyload>
      <Lazyload height={341} {...lazyloadOptions}>
        <UserLoadable />
      </Lazyload>
      <Lazyload height={145} {...lazyloadOptions}>
        <CopyrightLoadable />
      </Lazyload>
    </div>
  )
}
