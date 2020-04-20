import React, {Component} from 'react'
import './index.css'
class Experience extends Component {
  state = {
    width: '128px',
    height: '128px',
    subHeight: '64px',
  }
  render() {
    return (
      <main>
        <div className='wrapper_experience'>
          <div className='container_experience'>
            <h1>
              I'm most confident <br />
              working with.
            </h1>
            <div className='row'>
              <div className='subRow'>
                <div className='experience'>
                  <img
                    src={require('../assets/logos/react.png')}
                    alt='viktor'
                    height={this.state.height}
                  />
                  <span>React and React Native</span>
                </div>
                <div className='experience'>
                  <img
                    src={require('../assets/logos/js.png')}
                    alt='viktor'
                    height={this.state.height}
                  />
                  <span>Javascript</span>
                </div>
              </div>
              <div className='subRow'>
                <div className='experience'>
                  <img
                    src={require('../assets/logos/html.png')}
                    alt='viktor'
                    height={this.state.height}
                  />
                  <span>HTML</span>
                </div>
                <div className='experience'>
                  <img
                    src={require('../assets/logos/css.png')}
                    alt='viktor'
                    height={this.state.height}
                  />
                  <span>CSS</span>
                </div>
              </div>
            </div>
            {/*<h2 style={{marginTop: '100px'}}>
              Things I also have <br />
              been working with.
            </h2>
            <div className='row'>
              <div className='subRow'>
                <div className='moreExperience'>
                  <img
                    src={require('../assets/logos/react.png')}
                    alt='viktor'
                    height={this.state.subHeight}
                  />
                  <span>React Native</span>
                </div>
                <div className='moreExperience'>
                  <img
                    src={require('../assets/logos/python.png')}
                    alt='viktor'
                    height={this.state.subHeight}
                  />
                  <span>Python</span>
                </div>
              </div>
              <div className='subRow'>
                <div className='moreExperience'>
                  <img
                    src={require('../assets/logos/unity.jpg')}
                    alt='viktor'
                    height={this.state.subHeight}
                  />
                  <span>Unity</span>
                </div>
                <div className='moreExperience'>
                  <img
                    src={require('../assets/logos/flutter.png')}
                    alt='viktor'
                    height={this.state.subHeight}
                  />
                  <span>Flutter</span>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='subRow'>
                <div className='moreExperience'>
                  <img
                    src={require('../assets/logos/sql.jpeg')}
                    alt='viktor'
                    height={this.state.subHeight}
                  />
                  <span>SQL</span>
                </div>
                <div className='moreExperience'>
                  <img
                    src={require('../assets/logos/java.jpg')}
                    alt='viktor'
                    height={this.state.subHeight}
                  />
                  <span>Java</span>
                </div>
              </div>
              <div className='subRow'>
                <div className='moreExperience'>
                  <img
                    src={require('../assets/logos/matlab.png')}
                    alt='viktor'
                    height={this.state.subHeight}
                  />
                  <span>Matlab</span>
                </div>
                <div className='moreExperience'>
                  <img
                    src={require('../assets/logos/php.png')}
                    alt='viktor'
                    height={this.state.subHeight}
                  />
                  <span>PHP</span>
                </div>
            </div>
            </div>*/}
          </div>
        </div>
      </main>
    )
  }
}

export default Experience
