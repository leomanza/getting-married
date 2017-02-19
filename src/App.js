import React, { Component } from 'react'
import Welcome from './section/welcome'
import Ceremony from './section/ceremony'
import Party from './section/party'
import DressCode from './section/dress-code'
import Gift from './section/gift'
import History from './section/history'

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
        <Welcome/>
        <Ceremony/>
        <Party/>
        <DressCode/>
        <Gift/>
        <History onShowSlide={this.showSlide} onHideSlide={this.hideSlide} showSlide={this.state.showSlide}/>
      </div>
    )
  }
}

export default App
