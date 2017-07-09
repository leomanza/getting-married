import React, { Component } from 'react'
import { Welcome, Ceremony, Party, DressCode, Gift, History } from './section'

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
        <Ceremony/>
        <Party/>
        <DressCode/>
        <Gift/>
        <History/>
      </div>
    )
  }
}

export default App
