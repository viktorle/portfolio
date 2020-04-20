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
              Here are some of my <br />
              previous workplaces.
            </h1>
            {/*<div className="infoContainer">
              <div className="info">Currently studying: Master in Interactive Media Technology</div>
              <div className="info">Months to graduation: 10</div>
              <div className="info">Guitar picks in my pocket: 2</div>
    </div>*/}
            <div className='row'>
              
              <div className='subRow'>
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
            {/*<div className='row'>
              <div className='jobs'>
                <img
                  src={require('../assets/logos/max.png')}
                  alt='viktor'
                  height={this.state.height}
                />
                <span>Max</span>
              </div>
            </div>*/}
          </div>
        </div>
      </main>
    )
  }
}

export default Career
