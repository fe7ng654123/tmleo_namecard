import React from 'react';
import DOM from 'react-dom';
// import FlipCard from 'react-flipcard';
import ReactCardFlip from 'react-card-flip';
import Container from 'react-dom';

import { render } from 'react-dom'
import Flipcard from '@kennethormandy/react-flipcard'

// Import minimal required styles however you’d like
import '@kennethormandy/react-flipcard/dist/Flipcard.css'

import img_front_1 from './namecards/front-03.png'
import img_back_1 from './namecards/back-14.png'
import img_front_2 from './namecards/front-04.png'
import img_back_2 from './namecards/back-15.png'
import img_front_3 from './namecards/front-05.png'
import img_back_3 from './namecards/back-16.png'
import img_front_4 from './namecards/front-06.png'
import img_back_4 from './namecards/back-17.png'
import img_front_5 from './namecards/front-07.png'
import img_back_5 from './namecards/back-18.png'
import img_front_6 from './namecards/front-08.png'
import img_back_6 from './namecards/back-19.png'
import img_front_7 from './namecards/front-09.png'
import img_back_7 from './namecards/back-20.png'
import img_front_8 from './namecards/front-10.png'
import img_back_8 from './namecards/back-21.png'
import img_front_9 from './namecards/front-11.png'
import img_back_9 from './namecards/back-22.png'
import img_front_10 from './namecards/front-12.png'
import img_back_10 from './namecards/back-23.png'
import img_front_11 from './namecards/front-13.png'
import img_back_11 from './namecards/back-24.png'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      // flipped: false,
      flipped_1: false,
      flipped_2: false,
      flipped_3: false,
      flipped_4: false,
      flipped_5: false,
      flipped_6: false,
      flipped_7: false,
      flipped_8: false,
      flipped_9: false,
      flipped_10: false,
      flipped_11: false,
    }
    this.styles = {
      card: {
        border: '1px solid #eeeeee',
        borderRadius: '10px',
        padding: '5px',
        height: '550px',
        width: '337px'
      },
      image: {
        height: '550px',
        width: '337px'
      }
    }
  }

  render() {
    return (
      <div>
        <div style={this.styles.card}>
          <Flipcard flipped={this.state.flipped_1}>
            <img src={img_front_1}
              style={this.styles.image}
              onClick={e => this.setState({ flipped_1: !this.state.flipped_1 })} />

            <img src={img_back_1}
              style={this.styles.image}
              onClick={e => this.setState({ flipped_1: !this.state.flipped_1 })} />
          </Flipcard>
        </div>
        <div style={this.styles.card}>
          <Flipcard flipped={this.state.flipped_2}>
            <img src={img_front_2}
              style={this.styles.image}
              onClick={e => this.setState({ flipped_2: !this.state.flipped_2 })} />

            <img src={img_back_2}
              style={this.styles.image}
              onClick={e => this.setState({ flipped_2: !this.state.flipped_2 })} />
          </Flipcard>
        </div>
        <div style={this.styles.card}>
          <Flipcard flipped={this.state.flipped_3}>
            <img src={img_front_3}
              style={this.styles.image}
              onClick={e => this.setState({ flipped_3: !this.state.flipped_3 })} />

            <img src={img_back_3}
              style={this.styles.image}
              onClick={e => this.setState({ flipped_3: !this.state.flipped_3 })} />
          </Flipcard>
        </div>
      </div>
    )
  }
}

export default App;
