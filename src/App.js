import React, { Component } from 'react'
import { Welcome, Civil, Ceremony, Party, HoneyMoon, Alojamiento, History, RSVP } from './section'

class App extends Component {
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
        <Civil/>
        <Ceremony/>
        <Party/>
        <HoneyMoon/>
        <Alojamiento/>
        {/* <RSVP/> */}
      </div>
    )
  }
}

export default App
