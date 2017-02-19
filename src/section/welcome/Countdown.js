import React, { Component } from 'react'
import moment from 'moment'
import es from 'moment/locale/es'

moment.updateLocale('es', es)

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

export default Countdown
