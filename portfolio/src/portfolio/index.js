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
              <h3>How much does KTH employees fly?</h3>
                <a href="https://flight-kth.web.app/">
                <img 
                  src={require('../assets/pictures/iviz.png')}
                  alt='viktor'
                  height={this.state.height}
                />
                </a>
                <span>A visualization of KTH employees flights {/*<a className="link" href="https://flight-kth.web.app/">Link</a>*/}</span>
                
              </div>
              <div className='portfolio'>
              <h3>Estimate your travels carbon emission!</h3>
              <a href="https://carbon-calculator-d4d9b.web.app/">
                <img
                  src={require('../assets/pictures/intp.png')}
                  alt='viktor'
                  height={this.state.height}
                />
                </a>
                <span>A carbon calculator {/*<a className="link" href="https://carbon-calculator-d4d9b.web.app/">Link</a>*/}</span>
                
              </div>
              </div>    
          </div>
        </div>
      </main>
    )
  }
}

export default Portfolio
