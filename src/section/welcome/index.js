import React from 'react'
import Section from '../Section'
import Countdown from './Countdown'
import FitText from '../FitText'
import Title from '../Title'
import { h2, h3 } from '../Styles'
import FrontCover from '../../media/BouquetHug.jpg'
import WeddingIcon from '../../icons/Rings.svg'

export const Welcome = () => (
  <Section image={FrontCover} style={{
      background:'rgba(234, 82, 111, 0.77)',
      color: 'white'
    }}>
    <Title icon={WeddingIcon} white>¡Nos casamos!</Title>
    <h2 style={h2}>Te esperamos el <u>Sábado 4 de Noviembre</u> para que nos acompañes en este Gran Momento.</h2>
    <FitText><h3 style={{
      ...h3,
      fontSize: '56px',
      lineHeight: '64px'
    }}><Countdown target="2017-11-04"/></h3></FitText>
  </Section>
)
