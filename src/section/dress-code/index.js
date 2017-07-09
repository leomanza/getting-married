import React from 'react'
import Section from '../Section'
import Title from '../Title'
import { h2 } from '../Styles'
import DressCodeIcon from '../../icons/BowTies.svg'

export const DressCode = () => (
  <Section style={{ color: '#343a40' }}>
    <Title icon={DressCodeIcon}>La Vestimenta</Title>
    <h2 style={h2}>Nos olvidamos de la formalidad, pueden venir vestidos como quieran.</h2>
  </Section>
)
