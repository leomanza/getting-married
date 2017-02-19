import React from 'react'
import Section from '../Section'
import Title from '../Title'
import { h2, h3 } from '../Styles'
import CeremonyIcon from '../../icons/Ceremony.svg'

const Ceremony = () => (
  <Section>
    <Title icon={CeremonyIcon}>El Civil</Title>
    <h2 style={h2}>COMING SOON</h2>
    <h3 style={h3}>La fecha tentativa es <b>Jueves 2 de Noviembre</b> en el Registro Civil ubicado en <a rel="noopener" href="https://www.google.com.ar/maps/place/Carlos+Calvo+3307,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6229462,-58.4146764,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccafe90e700f5:0xc12619e082da980!8m2!3d-34.6229462!4d-58.4124877" target="_blank" style={{ color: 'black', textDecoration: 'none' }}><b>Carlos Calvo 3307</b></a>.<br/>Después habrá un mini festejo en <a rel="noopener" href="https://www.google.com.ar/maps/place/Per%C3%BA+1319,+C1141ACC+CABA/@-34.6235513,-58.376252,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccb2d0ce920af:0x94d1c75c00caf220!8m2!3d-34.6235513!4d-58.3740633" target="_blank" style={{ color: 'black', textDecoration: 'none' }}><b>Peru 1319</b></a>.</h3>
  </Section>
)

export default Ceremony
