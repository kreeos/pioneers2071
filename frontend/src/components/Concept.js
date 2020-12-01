import './Concept.css';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Planet from '../images/icon-planet.png';

class Concept extends Component {
constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return (
      <div className="Concept">
        <div className="concept-title-div">
          <a>
            Scenario
          </a>
        </div>
        <div className="concept-main-div">
          <div className="concept-container">
          <div className="Popup-container">
            <Popup
              trigger={
                <img src={Planet} className="concept-icon"/>
              }
              modal
              nested
            >
            {close => (
            <div className="modal">
              <div className="modal-header"> Planet </div>
              <div className="modal-content">
                  Planet One !
                  <br/>
              </div>
            </div>
          )}
            </Popup>
          </div><Popup
            trigger={
              <img src={Planet} className="concept-icon"/>
            }
            modal
            nested
          >
          {close => (
            <div className="modal">
              <div className="modal-header"> Planet </div>
              <div className="modal-content">
                  Planet Two!
                  <br/>
              </div>
            </div>
          )}
          </Popup>
          <Popup
            trigger={
              <img src={Planet} className="concept-icon-last"/>
            }
            modal
            nested
          >
          {close => (
            <div className="modal">
              <div className="modal-header"> Planet </div>
              <div className="modal-content">
                  Planet Three!
                  <br/>
              </div>
            </div>
          )}
          </Popup>
          </div>
        </div>
      </div>
    );
  }
}

export default Concept;
