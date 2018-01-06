import React from 'react'
import Section from '../Section'
import Title from '../Title'
import { h2, h3 } from '../Styles'
import CeremonyIcon from '../../icons/big-church.svg'
import AnillosImage from '../../media/anillos.jpg'

export const Ceremony = () => (
  <Section image={AnillosImage} style={{
      background:'rgba(234, 82, 111, 0.77)',
      color: 'white'
    }}>
    <Title icon={CeremonyIcon} white>Ceremonia</Title>
    <h2 style={h2}><b>Sábado 24 de Marzo a las 11:30 hs</b> en la Parroquia Nuestra Señora de Pompeya, <a href="https://goo.gl/maps/27ajJryKDmN2" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}><b>Tte. Farias 731</b></a>.</h2>
  </Section>
)
