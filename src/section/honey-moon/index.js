import React from 'react'
import Section from '../Section'
import Title from '../Title'
import { h2 } from '../Styles'
import HoneyMoonIcon from '../../icons/honeymoon.svg'
import FrontCover from '../../media/world-map.jpg'

export const HoneyMoon = () => (
  <Section image={FrontCover} style={{
      background:'rgba(234, 82, 111, 0.77)',
      color: 'white'
    }}>
    <Title icon={HoneyMoonIcon}>Nos ayudas con la luna de miel?</Title>
    <h2 style={h2}>Banco HSBC - Caja de ahorro en pesos</h2>
    <h2 style={h2}>CBU 1500095400012360847050</h2>
    <h2 style={h2}>CUIL 27-30751424-4</h2>
  </Section>
)
