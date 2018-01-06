import React from 'react'
import Section from '../Section'
import Title from '../Title'
import { h2, h3 } from '../Styles'
import PartyIcon from '../../icons/Cheers.svg'
export const Party = () => (
  <Section style={{
      background:'rgba(255, 251, 242, 1)',
      color: 'black'
    }}>
    <Title icon={PartyIcon} black>¡La Fiesta!</Title>
    <h2 style={h2}> Después de la ceremonia nos encontramos en Sociedad Sportiva Eventos, <a rel="noopener noreferrer" href="https://goo.gl/maps/mcKPytZNhEC2" target="_blank" style={{ color: 'black', textDecoration: 'none' }}><b>Witcomb 1869</b></a>.</h2>
  </Section>
)
