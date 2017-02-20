import React from 'react'
import Section from '../Section'
import Title from '../Title'
import { h2, h3 } from '../Styles'
import GiftCover from '../../media/Beach.jpg'
import GiftIcon from '../../icons/Gift.svg'

export const Gift = () => (
  <Section image={GiftCover} style={{
      background:'rgba(37, 206, 209, 0.77)',
      color: 'white'
    }}>
    <Title icon={GiftIcon} white>El Regalo</Title>
    <h2 style={h2}>LO IMPORTANTE ES QUE VENGAS ...</h2>
    <h3 style={h3}>Pero si querés hacernos un regalito podés ayudarnos con nuestra Luna de Miel.<br/>Podes hacer un depósito o transferencia a nuestra cuenta.</h3>
  </Section>
)
