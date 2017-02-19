import React from 'react'
import SVG from 'react-svg'
import FitText from './FitText'
import { h1, svg } from './Styles'

const Title = ({icon, children, white}) => (
  <h1 style={h1}>
    <SVG path={icon} style={white ? { fill: 'white', ...svg }: svg}/>
    <FitText><span style={{ display: 'block' }}>{children}</span></FitText>
  </h1>
)

export default Title
