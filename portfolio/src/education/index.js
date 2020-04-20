import React, {Component} from 'react'
import './index.css'

class Education extends Component {
  state = {
    width: '128px',
    height: '128px',
  }
  render() {
    return (
      <main>
        <div className='wrapper_education'>
          <div className='container_education'>
            <h1>And here I have studied.</h1>
            <div className='row_education'>
              <div className='education'>
                <img
                  src={require('../assets/logos/kth.png')}
                  alt='viktor'
                  height={this.state.height}
                />
                <span>Kungliga Tekniska Högskolan</span>
              </div>
              <div className='education'>
                <img
                  src={require('../assets/logos/tue.png')}
                  alt='viktor'
                  height={this.state.height}
                />
                <span>Technical University of Eindhoven</span>
              </div>
              <div className='education'>
                <img
                  src={require('../assets/logos/sodertorn.png')}
                  alt='viktor'
                  height={this.state.height}
                />
                <span>Södertörn Högskola</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Education
