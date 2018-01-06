import React, { Component } from 'react'
import Flickity from 'flickity'
import SVG from 'react-svg'
import Section from '../Section'
import Title from '../Title'
import { h2, slide, svg } from '../Styles'
import PhotoIcon from '../../icons/Polaroids.svg'

/* Slideshow */

export class History extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      new Flickity(this.refs.carousel, {
        autoPlay: true,
        wrapAround: true,
        imagesLoaded: true
      })
    }, 100)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }
  render() {
    return (
      <Section style={{ color: '#343a40' }}>
        <Title icon={PhotoIcon}>Nuestra historia</Title>
        <div ref="carousel" style={{ height: '60vh', width: '100vw' }}>
          {}
        </div>
      </Section>
    )
  }
}
