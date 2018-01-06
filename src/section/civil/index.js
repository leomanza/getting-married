import React from 'react'
import Section from '../Section'
import Title from '../Title'
import { h2, h3 } from '../Styles'
import CivilIcon from '../../icons/heart.svg'

export const Civil = () => (
  <Section style={{
      background:'rgba(255, 251, 242, 1)',
      color: 'black'
    }}>
    <Title icon={CivilIcon}>El Civil</Title>
    <h2 style={h2}><b>Jueves 22 de Marzo a las 12 hs</b> en el Registro Civil de Bahía Blanca, <a href="https://goo.gl/maps/x8wcXtXswos" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}><b>Castelli 366</b></a>.</h2>
  </Section>
)
