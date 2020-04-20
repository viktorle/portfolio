import React, {Component} from 'react'
import './index.css'
class Career extends Component {
  state = {
    width: '128px',
    height: '64px',
  }
  render() {
    return (
      <main>
        <div className='wrapper_career'>
          <div className='container_career'>
            <h1>
              I am.
            </h1>
            {/*<div className="infoContainer">
              <div className="info">Currently studying: Master in Interactive Media Technology</div>
              <div className="info">Months to graduation: 10</div>
              <div className="info">Guitar picks in my pocket: 2</div>
    </div>*/}
            <div className='row_career'>
              <div className="aboutMe">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              {/*<div className='subRow'>
                <div className='jobs'>
                  <img
                    src={require('../assets/logos/wappia.png')}
                    alt='viktor'
                    width={this.state.height}
                  />
                  <span>Wappia</span>
                </div>
                <div className='jobs'>
                  <img
                    src={require('../assets/logos/plantagen.png')}
                    alt='viktor'
                    height={this.state.height}
                  />
                  <span>Plantagen</span>
                </div>
                <div className='jobs'>
                  <img
                    src={require('../assets/logos/aquaria.jpg')}
                    alt='viktor'
                    height={this.state.height}
                    width='157px'
                  />
                  <span>Aquaria</span>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='subRow'>
                <div className='jobs'>
                  <img
                    src={require('../assets/logos/gronaLund.png')}
                    alt='viktor'
                    height={this.state.height}
                  />
                  <span>Gröna Lund</span>
                </div>
                <div className='jobs'>
                  <img
                    src={require('../assets/logos/ahlens.png')}
                    alt='viktor'
                    height={this.state.height}
                  />
                  <span>Åhlens</span>
                </div>
                <div className='jobs'>
                  <img
                    src={require('../assets/logos/skansen.png')}
                    alt='viktor'
                    height={this.state.height}
                  />
                  <span>Skansen</span>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='jobs'>
                <img
                  src={require('../assets/logos/max.png')}
                  alt='viktor'
                  height={this.state.height}
                />
                <span>Max</span>
              </div>*/}
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Career
