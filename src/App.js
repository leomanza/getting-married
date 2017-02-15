import React, { Component } from 'react'
import SVG from 'react-svg'
import moment from 'moment'
import Section from './Section.js'
import FrontCover from './BouquetHug.jpg'
import GiftCover from './Beach.jpg'
import PartyCover from './Fiesta.jpg'
import WeddingIcon from './Rings.svg'
import CeremonyIcon from './Ceremony.svg'
import PartyIcon from './Cheers.svg'
import DressCodeIcon from './BowTies.svg'
import GiftIcon from './Gift.svg'
import PhotoIcon from './Polaroids.svg'
import PlayIcon from './Play.svg'
/* Slideshow */
import Slide1 from './Costanera.jpg'
import Slide2 from './Cataratas.jpg'
import Slide3 from './London.jpg'
import Slide4 from './Roma.jpg'
import Slide5 from './Eiffel.jpg'
import Slide6 from './Sail.jpg'
import Slide7 from './Beach.jpg'
import Slide8 from './Casapueblo.jpg'
import Slide9 from './Sur.jpg'
import Slide10 from './Lago.jpg'
import Slide11 from './Camping.jpg'
import Slide12 from './Buceo.jpg'
import Slide13 from './BouquetHug.jpg'

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
  ...text
}

const h3 = {
  fontWeight: '100',
  fontSize: '18px',
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
          <h1 style={h1}><SVG path={WeddingIcon} style={{ fill: 'white', ...svg }}/>¡Nos casamos!</h1>
          <h2 style={h2}>Te esperamos el <u>Sábado 4 de Noviembre</u> para que nos acompañes en este Gran Momento.</h2>
          <h3 style={{
            ...h3,
            fontSize: '56px',
            lineHeight: '64px'
          }}><Countdown target="2017-11-04"/></h3>
        </Section>
        <Section>
          <h1 style={h1}><SVG path={CeremonyIcon} style={svg}/>El Civil</h1>
          <h2 style={h2}>COMING SOON</h2>
          <h3 style={h3}>La fecha tentativa es <b>Jueves 2 de Noviembre</b> en el Registro Civil ubicado en <a href="https://www.google.com.ar/maps/place/Carlos+Calvo+3307,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6229462,-58.4146764,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccafe90e700f5:0xc12619e082da980!8m2!3d-34.6229462!4d-58.4124877" target="_blank" style={{ color: 'black', textDecoration: 'none' }}><b>Carlos Calvo 3307</b></a>.<br/>Después habrá un mini festejo en <a href="https://www.google.com.ar/maps/place/Per%C3%BA+1319,+C1141ACC+CABA/@-34.6235513,-58.376252,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccb2d0ce920af:0x94d1c75c00caf220!8m2!3d-34.6235513!4d-58.3740633" target="_blank" style={{ color: 'black', textDecoration: 'none' }}><b>Peru 1319</b></a>.</h3>
        </Section>
        <Section image={PartyCover} style={{
            background:'rgba(255, 138, 91, 0.77)',
            color: 'white'
          }}>
          <h1 style={h1}><SVG path={PartyIcon} style={{ fill: 'white', ...svg }}/>¡La Fiesta!</h1>
          <h2 style={h2}>Como dijimos al principio, lo importate ocurre el <u>Sábado 4 de Noviembre </u>a las <u>20 horas</u> en <a href="https://www.google.com.ar/maps/place/Juana+Manso+1548,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6151732,-58.3625643,19z/data=!3m1!4b1!4m5!3m4!1s0x95a334d7158b30db:0x971bf8e3deae61f6!8m2!3d-34.6151732!4d-58.3620171" target="_blank" style={{ color: 'white', textDecoration: 'none' }}><u>Juana Manso 1548</u></a>.</h2>
        </Section>
        <Section>
          <h1 style={h1}><SVG path={DressCodeIcon} style={svg}/>La Vestimenta</h1>
          <h2 style={h2}>Nos olvidamos de la formalidad, pueden venir vestidos como quieran.</h2>
        </Section>
        <Section image={GiftCover} style={{
            background:'rgba(37, 206, 209, 0.77)',
            color: 'white'
          }}>
          <h1 style={h1}><SVG path={GiftIcon} style={{ fill: 'white', ...svg }}/>El Regalo</h1>
          <h2 style={h2}>LO IMPORTANTE ES QUE VENGAS ...</h2>
          <h3 style={h3}>Pero si querés hacernos un regalito podés ayudarnos con nuestra Luna de Miel.<br/>Podes hacer un depósito o transferencia a nuestra cuenta.</h3>
        </Section>
        <Section>
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
          <h1 style={h1}><SVG path={PhotoIcon} style={svg}/>Nuestra historia</h1>
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
