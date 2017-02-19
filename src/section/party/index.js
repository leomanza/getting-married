import React from 'react'
import Section from '../Section'
import Title from '../Title'
import { h2 } from '../Styles'
import PartyCover from '../../media/Fiesta.jpg'
import PartyIcon from '../../icons/Cheers.svg'

const Party = () => (
  <Section image={PartyCover} style={{
      background:'rgba(255, 138, 91, 0.77)',
      color: 'white'
    }}>
    <Title icon={PartyIcon} white>¡La Fiesta!</Title>
    <h2 style={h2}>Como dijimos al principio, lo importate ocurre el <u>Sábado 4 de Noviembre </u>a las <u>20 horas</u> en <a href="https://www.google.com.ar/maps/place/Juana+Manso+1548,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6151732,-58.3625643,19z/data=!3m1!4b1!4m5!3m4!1s0x95a334d7158b30db:0x971bf8e3deae61f6!8m2!3d-34.6151732!4d-58.3620171" target="_blank" style={{ color: 'white', textDecoration: 'none' }}><u>Juana Manso 1548</u></a>.</h2>
  </Section>
)

export default Party
