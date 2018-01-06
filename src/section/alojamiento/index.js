import React from 'react'
import Flickity from 'flickity'
import SVG from 'react-svg'
import Section from '../Section'
import Title from '../Title'
import { h2, h3 } from '../Styles'
import AlojamientoIcon from '../../icons/bed.svg'
import Lossacuces from "../../media/accomodations/lossauces.jpg"
import Argos from "../../media/accomodations/argos.jpg"
import LandPlaza from "../../media/accomodations/landplaza.jpg"

import accomodationsData from './accomodations.json';

export class Alojamiento extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      new Flickity(this.refs.carousel, {
        autoPlay: true,
        wrapAround: true,
        draggable: false
      })
    }, 100)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }
  render() {
    var accomodationsData = [
      {
        "place": "Los Sauces",
        "link": "http://www.edificiolossauces.com.ar/",
        "img": Lossacuces
      },
      {
        "place": "Argos",
        "link": "http://www.hotelargos.com/",
        "img": Argos
      },
      {
        "place": "Land Plaza",
        "link": "http://www.landplaza.com.ar/",
        "img": LandPlaza
      },
    ];
    return (
      <Section style={{
        background: 'rgba(255, 251, 242, 1)',
        color: 'black'
      }}>
        <Title icon={AlojamientoIcon} black>Necesitas alojamiento?</Title>
        <h2 style={h2}>Aca te dejamos algunas lugares donde te podes hospedar</h2>
        <div ref="carousel" style={{ height: '60vh', width: '100vw' }}>

          {/* <div className="carousel-cell"> */}
          {accomodationsData.map(item => <img key={item.img} src={item.img} style={{ height: '60vh', width:'60vh' }} />)}
          {/* </div> */}

        </div>
      </Section>
    )
  }
}