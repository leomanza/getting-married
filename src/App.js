import React, { Component } from 'react'
import SVG from 'react-svg'
import moment from 'moment'
import Section from './Section.js'
import Dimensions from './Dimensions.js'

import FrontCover from './media/BouquetHug.jpg'
import GiftCover from './media/Beach.jpg'
import PartyCover from './media/Fiesta.jpg'

import WeddingIcon from './icons/Rings.svg'
import CeremonyIcon from './icons/Ceremony.svg'
import PartyIcon from './icons/Cheers.svg'
import DressCodeIcon from './icons/BowTies.svg'
import GiftIcon from './icons/Gift.svg'
import PhotoIcon from './icons/Polaroids.svg'

/* Slideshow */
import PlayIcon from './icons/Play.svg'
import CloseIcon from './icons/Close.svg'

import Slide1 from './media/Costanera.jpg'
import Slide2 from './media/Cataratas.jpg'
import Slide3 from './media/London.jpg'
import Slide4 from './media/Roma.jpg'
import Slide5 from './media/Eiffel.jpg'
import Slide6 from './media/Sail.jpg'
import Slide7 from './media/Beach.jpg'
import Slide8 from './media/Casapueblo.jpg'
import Slide9 from './media/Sur.jpg'
import Slide10 from './media/Lago.jpg'
import Slide11 from './media/Camping.jpg'
import Slide12 from './media/Buceo.jpg'
import Slide13 from './media/BouquetHug.jpg'

moment.locale('es')

const svg = {
  width: '100px',
  height: '100px'
}

const text = {
  textAlign: 'center',
  marginBottom: '25px',
  maxWidth: '60em'
}

const h1 = {
  letterSpacing: '17px',
  fontWeight: '600',
  fontSize: '56px',
  lineHeight: '64px',
  textTransform: 'uppercase',
  ...text
}

const h2 = {
  fontWeight: '300',
  fontSize: '24px',
  lineHeight: '32px',
  marginRight: '0.5em',
  marginLeft: '0.5em',
  ...text
}

const h3 = {
  fontWeight: '100',
  fontSize: '18px',
  marginRight: '0.5em',
  marginLeft: '0.5em',
  ...text
}

const slide = {
  width: '100vw',
  height: '100vh',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

class Hover extends Component {
  constructor(props) {
    super(props)
    this.startHover = this.startHover.bind(this)
    this.endHover = this.endHover.bind(this)
  }
  state = {
    hovered: false
  }
  startHover() {
    this.setState({ hovered: true })
  }
  endHover() {
    this.setState({ hovered: false })
  }
  render() {
    return (<div
              onMouseEnter={this.startHover}
              onMouseLeave={this.endHover}
              onBlur={this.endHover}
              onClick={this.endHover}
              onTouchStart={this.startHover}
              onTouchEnd={this.endHover}
              onTouchCancel={this.endHover}>
              {this.state.hovered ? React.Children.map(this.props.children, child => React.cloneElement(child, {
                ...child.props,
                style: Object.assign({}, child.props.style, this.props.style)
              })) : this.props.children}
            </div>)
  }
}

class Countdown extends Component {
  constructor(props) {
    super(props)
    this.now = this.now.bind(this)
  }
  state = {
    now: moment()
  }
  now() {
    this.setState({ now: moment() })
  }
  componentDidMount() {
    this.timer = setInterval(this.now, 1000)
  }
  componentWillUnmount() {
    if(this.timer) clearInterval(this.timer)
    this.timer = null
  }
  render() {
    const target = moment(this.props.target)
    const diff = target.diff(this.state.now)
    const duration = moment.duration(diff)
    if(diff < 0) return <span>¡Ya nos casamos!</span>
    return <span>Faltan {duration.humanize()}</span>
  }
}

class Carousel extends Component {
  render() {
    return (<div style={{ overflowX: 'none', overflowY: 'scroll', height: '100vh', width: `${this.props.slides.length*100}vw` }}>
              {this.props.slides.map(img => (<div key={img} style={{ ...slide, float: 'left', backgroundImage: `url(${img})` }}></div>))}
            </div>)
  }
}

class FitText extends Component {
  constructor(props) {
    super(props)
    this.fit = this.fit.bind(this)
  }
  fit() {
    const computed = window.getComputedStyle(this.child)
    const width = parseFloat(computed.width)
    if(width > Dimensions.width) {
      const styles = this.child.style
      const proportion = Dimensions.width / width
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
    window.addEventListener('resize', this.fit)
    window.addEventListener('orientationchange', this.fit)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.fit)
    window.removeEventListener('orientationchange', this.fit)
  }
  render() {
    return React.Children.map(this.props.children, child => React.cloneElement(child, { ref: c => { this.child = c }}))[0]
  }
}

const Title = ({icon, children, white}) => (<h1 style={h1}><SVG path={icon} style={white ? { fill: 'white', ...svg }: svg}/><FitText><span style={{ display: 'block' }}>{children}</span></FitText></h1>)

class App extends Component {
  constructor(props) {
    super(props)
    this.showSlide = this.showSlide.bind(this)
    this.hideSlide = this.hideSlide.bind(this)
  }
  state = {
    showSlide: false
  }
  showSlide() {
    this.setState({ showSlide: true })
  }
  hideSlide() {
    this.setState({ showSlide: false })
  }
  render() {
    return (
      <div style={{
          height: '100vh',
          overflowX: 'hidden',
          overflowY: 'auto',
          fontSize: '200%',
          perspective: '300px'
        }}>
        <Section image={FrontCover} style={{
            background:'rgba(234, 82, 111, 0.77)',
            color: 'white'
          }}>
          <Title icon={WeddingIcon} white>¡Nos casamos!</Title>
          <h2 style={h2}>Te esperamos el <u>Sábado 4 de Noviembre</u> para que nos acompañes en este Gran Momento.</h2>
          <FitText><h3 style={{
            ...h3,
            fontSize: '56px',
            lineHeight: '64px'
          }}><Countdown target="2017-11-04"/></h3></FitText>
        </Section>
        <Section>
          <Title icon={CeremonyIcon}>El Civil</Title>
          <h2 style={h2}>COMING SOON</h2>
          <h3 style={h3}>La fecha tentativa es <b>Jueves 2 de Noviembre</b> en el Registro Civil ubicado en <a href="https://www.google.com.ar/maps/place/Carlos+Calvo+3307,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6229462,-58.4146764,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccafe90e700f5:0xc12619e082da980!8m2!3d-34.6229462!4d-58.4124877" target="_blank" style={{ color: 'black', textDecoration: 'none' }}><b>Carlos Calvo 3307</b></a>.<br/>Después habrá un mini festejo en <a href="https://www.google.com.ar/maps/place/Per%C3%BA+1319,+C1141ACC+CABA/@-34.6235513,-58.376252,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccb2d0ce920af:0x94d1c75c00caf220!8m2!3d-34.6235513!4d-58.3740633" target="_blank" style={{ color: 'black', textDecoration: 'none' }}><b>Peru 1319</b></a>.</h3>
        </Section>
        <Section image={PartyCover} style={{
            background:'rgba(255, 138, 91, 0.77)',
            color: 'white'
          }}>
          <Title icon={PartyIcon} white>¡La Fiesta!</Title>
          <h2 style={h2}>Como dijimos al principio, lo importate ocurre el <u>Sábado 4 de Noviembre </u>a las <u>20 horas</u> en <a href="https://www.google.com.ar/maps/place/Juana+Manso+1548,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6151732,-58.3625643,19z/data=!3m1!4b1!4m5!3m4!1s0x95a334d7158b30db:0x971bf8e3deae61f6!8m2!3d-34.6151732!4d-58.3620171" target="_blank" style={{ color: 'white', textDecoration: 'none' }}><u>Juana Manso 1548</u></a>.</h2>
        </Section>
        <Section>
          <Title icon={DressCodeIcon}>La Vestimenta</Title>
          <h2 style={h2}>Nos olvidamos de la formalidad, pueden venir vestidos como quieran.</h2>
        </Section>
        <Section image={GiftCover} style={{
            background:'rgba(37, 206, 209, 0.77)',
            color: 'white'
          }}>
          <Title icon={GiftIcon} white>El Regalo</Title>
          <h2 style={h2}>LO IMPORTANTE ES QUE VENGAS ...</h2>
          <h3 style={h3}>Pero si querés hacernos un regalito podés ayudarnos con nuestra Luna de Miel.<br/>Podes hacer un depósito o transferencia a nuestra cuenta.</h3>
        </Section>
        <Section>
          <span style={{
            position: 'absolute',
            top: '1em',
            right: '1em',
            width: '2em',
            height: '2em',
            opacity: this.state.showSlide ? 1 : 0,
            zIndex: this.state.showSlide ? 3 : -1
          }} onClick={this.hideSlide}>
            <Hover style={{ fill: '#EA526F' }}>
              <SVG style={{ width: '100%', height: '100%' }} path={CloseIcon}/>
            </Hover>
          </span>
          <div style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, overflowY: 'scroll', opacity: this.state.showSlide ? 1 : 0, zIndex: this.state.showSlide ? 2 : -1 }}>
            <Carousel slides={[
              Slide1,
              Slide2,
              Slide3,
              Slide4,
              Slide5,
              Slide6,
              Slide7,
              Slide8,
              Slide9,
              Slide10,
              Slide11,
              Slide12,
              Slide13
            ]}/>
          </div>
          <Title icon={PhotoIcon}>Nuestra historia</Title>
          <h2 style={h2} onClick={this.showSlide}>
            <Hover style={{
              fill: '#EA526F'
            }}>
              <SVG path={PlayIcon} style={{
                ...svg,
                cursor: 'pointer'
              }}/>
            </Hover>
          </h2>
        </Section>
      </div>
    )
  }
}

export default App
