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
      applicants: [],
      date: "",
      voters: [],
      Alen: null,
      Vlen: null,
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
      axios.get('https://pioneers.kaist.ac.kr:8000/api/register/event/list'),
      axios.get('https://pioneers.kaist.ac.kr:8000/api/register/vote/list'),
    ]);

    // takes out required values and create references to them
    const votersData = info[1].data; 
    const applicantsData = info[0].data; 
    const Vlen = info[1].data.length;
    const Alen = info[0].data.length;
    console.log(info)

    // console.log(data);
    this.setState({
      fetching: false, // done!
      is_Loaded: true,
      voters: votersData,
      date: date,
      applicants: applicantsData,
      Alen: Alen,
      Vlen: Vlen
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
                data={this.state.applicants}
                filename={"applicants.csv"}
                className="btn-download"
              >
                {this.state.Alen} Applicants
              </CSVLink>

              <CSVLink 
                data={this.state.voters}
                filename={"voters.csv"}
                className="btn-download"
              >
                {this.state.Vlen} Voters
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
