import React, {Component} from 'react'
import './index.css'

class Portfolio extends Component {
  state = {
    width: '128px',
    height: '256px',
  }
  render() {
    return (
      <main>
        <div className='wrapper_portfolio'>
          <div className='container_portfolio'>
            <h1>Stuff I have done in school.</h1>
            <div className='row_portfolio'>
              <div className='portfolio'>
                <a href="https://flight-kth.web.app/">
                <img 
                  src={require('../assets/pictures/flightViz.png')}
                  alt='viktor'
                  height={this.state.height}
                />
                <span>Visualization of KTH employees flights</span>
                </a>
              </div>
              <div className='portfolio'>
              <a href="https://carbon-calculator-d4d9b.web.app/">
                <img
                  src={require('../assets/pictures/carbCalc.png')}
                  alt='viktor'
                  height={this.state.height}
                />
                <span>A carbon calculator</span>
                </a>
              </div>
              </div>
              <div className='row_portfolio'>
              <div className='portfolio'>
                <img
                  src={require('../assets/pictures/Flyingbear.jpg')}
                  alt='viktor'
                  height={this.state.height}
                />
                <span>A climate change game</span>
              </div>
              <div className='portfolio'>
                <img
                  src={require('../assets/pictures/chat.png')}
                  alt='viktor'
                  height={this.state.height}
                />
                <span>Classroom Chat</span>
              </div>
              </div>
              
          </div>
        </div>
      </main>
    )
  }
}

export default Portfolio
