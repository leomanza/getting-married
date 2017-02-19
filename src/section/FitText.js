import React, { Component } from 'react'
import Dimensions from './Dimensions'

export default class FitText extends Component {
  constructor(props) {
    super(props)
    this.fit = this.fit.bind(this)
  }
  fit() {
    const computed = window.getComputedStyle(this.child)
    const width = parseFloat(computed.width)
    const windowWidth = Dimensions.width
    if(width > windowWidth) {
      const styles = this.child.style
      const proportion = windowWidth / width
      const fontSize = parseFloat(computed.fontSize)

      styles.fontSize = `${fontSize * proportion}px`

      if(
        computed.letterSpacing !== 'normal'  ||
        computed.letterSpacing !== 'unset'   ||
        computed.letterSpacing !== 'inherit' ||
        computed.letterSpacing !== 'initial'
      ) {
        const letterSpacing = parseFloat(computed.letterSpacing)
        styles.letterSpacing = `${letterSpacing * proportion}px`

        if(computed.textAlign === 'center') {
          styles.marginRight = `-${letterSpacing * proportion}px` // to compensate
        }
      }
    }
  }
  componentDidMount() {
    this.fit()
  }
  render() {
    return React.Children.map(this.props.children, child => React.cloneElement(child, { ref: c => { this.child = c }}))[0]
  }
}
