import React from 'react';
import DOM from 'react-dom';

import ReactCardFlip from 'react-card-flip';

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";


import Flipcard from '@kennethormandy/react-flipcard'
import './App.css'

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
import flip_hint from './flip_hint.png'


// TODO: device width


function hide_float(){
  // console.log("fewgds")
  document.getElementById("float_layer").style.display = "none";
}

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
        width: '225px',
        height: '367px',
        // aspectRatio: 674 / 1110,
        margin: '10px'
      },
      image: {
        width: '100%',
        // Without height undefined it won't work
        height: undefined,
        // figure out your image aspect ratio
        // aspectRatio: 1110 / 674,
        resizeMode: 'cover'
      },
    }
  }
  
 

  render() {
    return (

      <div className="center">
        <div className="modal" id="float_layer" onClick={e => hide_float()}>
          <div className="modal_content">
            <img src={flip_hint} style={{width:"200px"}} />
          </div></div>
          <Row gutter={40} justify="center" align="bottom" padding="10px">

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
            <div style={this.styles.card}>
              <Flipcard flipped={this.state.flipped_4}>
                <img src={img_front_4}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_4: !this.state.flipped_4 })} />

                <img src={img_back_4}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_4: !this.state.flipped_4 })} />
              </Flipcard>
            </div>
            <div style={this.styles.card}>
              <Flipcard flipped={this.state.flipped_5}>
                <img src={img_front_5}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_5: !this.state.flipped_5 })} />

                <img src={img_back_5}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_5: !this.state.flipped_5 })} />
              </Flipcard>
            </div>
            <div style={this.styles.card}>
              <Flipcard flipped={this.state.flipped_6}>
                <img src={img_front_6}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_6: !this.state.flipped_6 })} />

                <img src={img_back_6}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_6: !this.state.flipped_6 })} />
              </Flipcard>
            </div>
            <div style={this.styles.card}>
              <Flipcard flipped={this.state.flipped_7}>
                <img src={img_front_7}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_7: !this.state.flipped_7 })} />

                <img src={img_back_7}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_7: !this.state.flipped_7 })} />
              </Flipcard>
            </div>
            <div style={this.styles.card}>
              <Flipcard flipped={this.state.flipped_8}>
                <img src={img_front_8}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_8: !this.state.flipped_8 })} />

                <img src={img_back_8}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_8: !this.state.flipped_8 })} />
              </Flipcard>
            </div>
            <div style={this.styles.card}>
              <Flipcard flipped={this.state.flipped_9}>
                <img src={img_front_9}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_9: !this.state.flipped_9 })} />

                <img src={img_back_9}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_9: !this.state.flipped_9 })} />
              </Flipcard>
            </div>
            <div style={this.styles.card}>
              <Flipcard flipped={this.state.flipped_10}>
                <img src={img_front_10}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_10: !this.state.flipped_10 })} />

                <img src={img_back_10}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_10: !this.state.flipped_10 })} />
              </Flipcard>
            </div>
            <div style={this.styles.card}>
              <Flipcard flipped={this.state.flipped_11}>
                <img src={img_front_11}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_11: !this.state.flipped_11 })} />

                <img src={img_back_11}
                  style={this.styles.image}
                  onClick={e => this.setState({ flipped_11: !this.state.flipped_11 })} />
              </Flipcard>
            </div>
          </Row>

        
      </div>
    )
  }
}

export default App;
