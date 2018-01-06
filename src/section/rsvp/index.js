import React from 'react'
import Section from '../Section'
import Title from '../Title'
import Confirmacion from './ConfirmacionForm'
import { h2 } from '../Styles'
// import ConfirmacionIcon from '../../icons/honeymoon.svg'
import FrontCover from '../../media/world-map.jpg'

export const RSVP = () => (
  <Section image={FrontCover} style={{
      background:'rgba(234, 82, 111, 0.77)',
      color: 'white'
    }}>
    <Title>Confirmanos que vas a estar ahi</Title>
    <Confirmacion></Confirmacion>  
  </Section>
) 