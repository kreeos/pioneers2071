import './List.css';
import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import { CSVLink, CSVDownload } from "react-csv";
import Popup from 'reactjs-popup';

class List extends Component {
  componentDidMount() {
    this.fetchInfo();
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      is_Loaded: false,
      fetching: false,
      data: null,
      date: "",
      csv: [],
      isAuthed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value === "zkdltmxm2020")
      this.setState({isAuthed: true})
    else
      alert("Incorrect Password. Please check again.")

    event.preventDefault();
  }

  fetchInfo = async () => {
    this.setState({
      fetching: true // requesting..
    });

    let date = moment().format("DD, YYYY ");
    let monthNumber = (new Date().getMonth());
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[monthNumber];
    date = monthName + " " + date;

    // wait for two promises
    const info = await Promise.all([
      axios.get('https://pioneers.kaist.ac.kr:8000/api/register/list'),
      axios.get('https://pioneers.kaist.ac.kr:8000/api/register/download')
    ]);

    // takes out required values and create references to them
    const data = info[0].data; 
    const csv = info[1].data; 

    console.log(data);
    this.setState({
      fetching: false, // done!
      is_Loaded: true,
      data: data,
      date: date,
      csv: csv,
    });
  }
  
  render() {
    return (
      <div>
        {
          this.state.isAuthed 
          ?
          <div className="List">
            <div className="title_div_list">
              <a>
                List of Applicants
              </a>
            </div>
            <div className="list_div">
              <a>
                as of {this.state.date}         
              </a>
            </div>
            <div> 
              <CSVLink 
                data={this.state.csv}
                filename={"list.csv"}
                className="btn-download"
              >
                Download
              </CSVLink>
            </div>
          </div>
          :
          <div className="List">
            <Popup
              className="list-popup"
              trigger={<a> </a>}
              modal
              nested
              defaultOpen
              closeOnDocumentClick={false}
            >
            {close => (
              <div className="list-modal">
                <form onSubmit={this.handleSubmit}>
                <div className="modal-header"> Password Prompt </div>
                <div className="list-modal-content">
                  {' '}
                    <label>
                      Please enter password to proceed to the page.
                      <br/>
                      <input 
                        className="modal-input" 
                        type="password" 
                        value={this.state.value} 
                        onChange={this.handleChange} 
                        placeholder=""
                      />
                    </label>
                </div>
                <div className="modal-actions">
                    <input className="btn-submit" type="submit" value="Enter" />
                </div>
                </form>
              </div>
            )}
            </Popup>
          </div>
        }
      </div>
    );
  }
}

export default List;
