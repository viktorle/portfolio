import React, {Component} from 'react'
import './index.css'
import * as Scroll from 'react-scroll'
let scroller = Scroll.scroller
class Menu extends Component {
  state = {}
  handleScroll(target) {
    scroller.scrollTo(target, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 0, // Scrolls to element + 50 pixels down the page
    })
  }
  render() {
    return (
      <header>
        <ul>
          <li onClick={() => this.handleScroll('Career')}>Career</li>
          <li onClick={() => this.handleScroll('Education')}>
            Education
          </li>
          <li onClick={() => this.handleScroll('Experience')}>
            Experience
          </li>
          <li onClick={() => this.handleScroll('Portfolio')}>
            Portfolio
          </li>
          <li onClick={() => this.handleScroll('Contact')}>
            Contact
          </li>
        </ul>
      </header>
    )
  }
}

export default Menu
