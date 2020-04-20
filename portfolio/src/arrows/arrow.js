import React, {Component} from 'react'
import './index.css'
import {DownArrow} from '../assets/logos/downArrow'
import * as Scroll from 'react-scroll'
let scroller = Scroll.scroller
class Arrow extends Component {
  state = {}
  handleScroll(target) {
    console.log(target)
    scroller.scrollTo(target, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 50, // Scrolls to element + 50 pixels down the page
    })
  }
  render() {
    return (
      <div className='arrow'>
        <button onClick={() => this.handleScroll(this.props.section)}>
          <DownArrow />
        </button>
      </div>
    )
  }
}

export default Arrow
