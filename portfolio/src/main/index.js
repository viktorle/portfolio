import React, {Component,createRef} from 'react'
import Menu from '../menu'
import './index.css'
import Career from '../career'
import Contact from '../contact'
import Education from '../education'
import Experience from '../experience'
import Portfolio from '../portfolio'
import Arrow from '../arrows/arrow'
import AboutMe from '../aboutme'
import * as Scroll from 'react-scroll'
import handleMenuColor from './handleMenuColor'
let Element = Scroll.Element

class Main extends Component {
  constructor(){
    super()
    this.ref = createRef()
  }
  state = {}

  componentDidMount(){
    window.addEventListener('scroll', (e) => handleMenuColor(e,this.ref))
  }


  render() {
    return (
      <main ref={ref => this.ref = ref}>
        <Menu />
        <div className='wrapper'>
          <div className='home'>
            <div className='leftColumn'>
              <div className='introText'>
                <h1>Hi!</h1>
                <h2>I'm Viktor Lemón.</h2>
              </div>
            </div>
            <div className='rightColumn'>
              <img
                src={require('../assets/pictures/Viktor2.png')}
                className='viktor'
                alt='viktor'
                height='100%'
                width='auto'
              />
            </div>
          </div>
          <Arrow section={'Career'} />
        </div>

        <Element name='Career' />
        <Career />

        <Arrow section={'Education'} />
        <Element name='Education' />
        <Education />

        <Arrow section={'Experience'} />
        <Element name='Experience' />
        <Experience />

        <Arrow section={'Portfolio'} />
        <Element name='Portfolio' />
        <Portfolio/>

        <Arrow section={'Contact'} />
        <Element name='Contact' />
        <Contact />
      </main>
    )
  }
}

export default Main
