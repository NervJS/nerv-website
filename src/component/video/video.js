/**
 * @author yvonnexchen
 * @date 2017-12-14
 * @desc video
 */
import Nerv from 'nervjs'
import './video.scss'

class Video extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
    }
  }

  componentDidMount () {

  }

  render () {
    const {play, pause} = this.props
    const video = this.refs.video
    let body = document.getElementsByTagName('body')[0],
        html = document.getElementsByTagName('html')[0]
    if (play) {
      if (video) {
        video.play()
        video.currentTime = 0
      }
      body.style = html.style = 'width: 100%;height: 100%;overflow:hidden;'
    } else {
      body.style = html.style = ''
      video && video.pause()
    }
    return (
      <div className={play ? 'video' : 'video hide'}>
        <video src='http://storage.jd.com/index/nerv_720p.mp4' ref='video' preload="auto"></video>
        <span className='video_close' onClick={pause}></span>
      </div>
    )
  }
}

module.exports = Video
