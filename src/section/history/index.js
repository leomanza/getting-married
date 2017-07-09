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
import Slide14 from '../../media/20141224_235413.jpg'
import Slide15 from '../../media/20150123_195437.jpg'
import Slide16 from '../../media/20150402_174433.jpg'
import Slide17 from '../../media/Chile 306.JPG'
import Slide18 from '../../media/DSC03899.JPG'
import Slide19 from '../../media/G0452145.jpg'
import Slide20 from '../../media/G0763229.jpg'
import Slide21 from '../../media/G0853258.jpg'
import Slide22 from '../../media/G0882494.jpg'
import Slide23 from '../../media/G0923282.jpg'
import Slide24 from '../../media/GOPR2395.jpg'
import Slide25 from '../../media/IMG_2226.jpg'
import Slide26 from '../../media/IMG_2952.jpg'
import Slide27 from '../../media/IMG_3450.jpg'
import Slide28 from '../../media/IMG_3675.jpg'
import Slide29 from '../../media/IMG_5362.jpg'
import Slide30 from '../../media/IMG_5705.jpg'
import Slide31 from '../../media/IMG_8190.jpg'
import Slide32 from '../../media/IMG_8533.jpg'
import Slide33 from '../../media/IMG-20141213-WA0032.jpg'

export class History extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      new Flickity(this.refs.carousel, {
        autoPlay: true,
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
      <Section style={{ color: '#343a40' }}>
        <Title icon={PhotoIcon}>Nuestra historia</Title>
        <div ref="carousel" style={{ height: '60vh', width: '100vw' }}>
          {[
            Slide1, Slide2, Slide3, Slide4, Slide5,
            Slide6, Slide7, Slide8, Slide9, Slide10,
            Slide11, Slide12, Slide13, Slide14, Slide15,
            Slide16, Slide17, Slide18, Slide19, Slide20,
            Slide21, Slide22, Slide23, Slide24, Slide25,
            Slide26, Slide27, Slide28, Slide29, Slide30,
            Slide31, Slide32, Slide33
          ].map(_ => <img key={_} src={_} style={{ height: '60vh' }}/>)}
        </div>
      </Section>
    )
  }
}
