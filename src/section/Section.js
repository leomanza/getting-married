import React from 'react'

const layer = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
}

class Section extends React.Component {
  render() {
    const {image, style = {}, children} = this.props
    return (
      <div style={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden'
        }}>
        {image ? (
          <div style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: 3,
            ...layer
          }}></div>
        ) : null}
        <div style={{
          zIndex: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          ...layer,
          ...style
        }}>
          {children}
        </div>
      </div>
    )
  }
}

export default Section
