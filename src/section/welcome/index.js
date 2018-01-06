import React from 'react'
import Section from '../Section'
import Countdown from './Countdown'
import FitText from '../FitText'
import Title from '../Title'
import { h2, h3 } from '../Styles'
import FrontCover from '../../media/cover.jpg'
import WeddingIcon from '../../icons/Rings.svg'

export const Welcome = () => (
  <Section image={FrontCover} style={{
      background:'rgba(234, 82, 111, 0.77)',
      color: 'white'
    }}>
    <Title icon={WeddingIcon} white>¡Nos casamos!</Title>
    <FitText><h3 style={{
      ...h3,
      fontSize: '56px',
      lineHeight: '64px'
    }}><Countdown target="2018-03-24 12:00"/></h3></FitText>
  </Section>
)
