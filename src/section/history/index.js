import React, { Component } from 'react'
import SVG from 'react-svg'
import Section from '../Section'
import Title from '../Title'
import { h2, slide, svg } from '../Styles'
import PhotoIcon from '../../icons/Polaroids.svg'

/* Slideshow */
import PlayIcon from '../../icons/Play.svg'
import CloseIcon from '../../icons/Close.svg'

import Slide1 from '../../media/Costanera.jpg'
import Slide2 from '../../media/Cataratas.jpg'
import Slide3 from '../../media/London.jpg'
import Slide4 from '../../media/Roma.jpg'
import Slide5 from '../../media/Eiffel.jpg'
import Slide6 from '../../media/Sail.jpg'
import Slide7 from '../../media/Beach.jpg'
import Slide8 from '../../media/Casapueblo.jpg'
import Slide9 from '../../media/Sur.jpg'
import Slide10 from '../../media/Lago.jpg'
import Slide11 from '../../media/Camping.jpg'
import Slide12 from '../../media/Buceo.jpg'
import Slide13 from '../../media/BouquetHug.jpg'

class Hover extends Component {
  constructor(props) {
    super(props)
    this.startHover = this.startHover.bind(this)
    this.endHover = this.endHover.bind(this)
  }
  state = {
    hovered: false
  }
  startHover() {
    this.setState({ hovered: true })
  }
  endHover() {
    this.setState({ hovered: false })
  }
  render() {
    return (<div
              onMouseEnter={this.startHover}
              onMouseLeave={this.endHover}
              onBlur={this.endHover}
              onClick={this.endHover}
              onTouchStart={this.startHover}
              onTouchEnd={this.endHover}
              onTouchCancel={this.endHover}>
              {this.state.hovered ? React.Children.map(this.props.children, child => React.cloneElement(child, {
                ...child.props,
                style: Object.assign({}, child.props.style, this.props.style)
              })) : this.props.children}
            </div>)
  }
}

class Carousel extends Component {
  render() {
    return (<div style={{ overflowX: 'none', overflowY: 'scroll', height: '100vh', width: `${this.props.slides.length*100}vw` }}>
              {this.props.slides.map(img => (<div key={img} style={{ ...slide, float: 'left', backgroundImage: `url(${img})` }}></div>))}
            </div>)
  }
}

export const History = ({onShowSlide, showSlide, onHideSlide}) => (
  <Section>
    <span style={{
      position: 'absolute',
      top: '1em',
      right: '1em',
      width: '2em',
      height: '2em',
      opacity: showSlide ? 1 : 0,
      zIndex: showSlide ? 3 : -1
    }} onClick={onHideSlide} onTouchEnd={onHideSlide}>
      <Hover style={{ fill: '#EA526F' }}>
        <SVG style={{ width: '100%', height: '100%' }} path={CloseIcon}/>
      </Hover>
    </span>
    <div style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, overflowY: 'scroll', opacity: showSlide ? 1 : 0, zIndex: showSlide ? 2 : -1 }}>
      <Carousel slides={[
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
        Slide6,
        Slide7,
        Slide8,
        Slide9,
        Slide10,
        Slide11,
        Slide12,
        Slide13
      ]}/>
    </div>
    <Title icon={PhotoIcon}>Nuestra historia</Title>
    <h2 style={h2} onClick={onShowSlide} onTouchEnd={onShowSlide}>
      <Hover style={{
        fill: '#EA526F'
      }}>
        <SVG path={PlayIcon} style={{
          ...svg,
          cursor: 'pointer'
        }}/>
      </Hover>
    </h2>
  </Section>
)
