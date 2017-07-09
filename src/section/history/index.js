import React, { Component } from 'react'
import Flickity from 'flickity'
import SVG from 'react-svg'
import Section from '../Section'
import Title from '../Title'
import { h2, slide, svg } from '../Styles'
import PhotoIcon from '../../icons/Polaroids.svg'

/* Slideshow */
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

export class History extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      new Flickity(this.refs.carousel, {
        wrapAround: true,
        imagesLoaded: true
      })
    }, 100)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }
  render() {
    return (
      <Section>
        <Title icon={PhotoIcon}>Nuestra historia</Title>
        <div ref="carousel" style={{ height: '60vh', width: '100vw' }}>
          {[
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
          ].map(_ => <img key={_} src={_} style={{ height: '60vh' }}/>)}
        </div>
      </Section>
    )
  }
}
