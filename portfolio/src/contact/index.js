import React, {Component} from 'react'
import './index.css'
class Contact extends Component {
  state = {}
  render() {
    return (
      <div className='contact'>
        <h1>Send me an email to:</h1>
        <p>
          <a href='mailto:vlemon@kth.se'>vlemon@kth.se</a>
        </p>
      </div>
    )
  }
}

export default Contact
