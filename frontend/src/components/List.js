import './List.css';
import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import { CSVLink, CSVDownload } from "react-csv";

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
    };
  }

  fetchInfo = async () => {
    this.setState({
      fetching: true // requesting..
    });

    // wait for two promises
    const info = await Promise.all([
      axios.get('http://aria.sparcs.org:55554/api/landing/list'),
      axios.get('http://aria.sparcs.org:55554/api/landing/download')
    ]);

    let date = moment().format("DD, YYYY ");
    let monthNumber = (new Date().getMonth());
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[monthNumber];
    date = monthName + " " + date;

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
    const {is_Loaded, data} = this.state;
    let items = [];
    if (is_Loaded) {
      for (var i = 0; i < data.length; i++) {
        items.push(<tr>);
        items.push(</tr>)
      }
    }
    return (
      <div className="List">
        <div className="title_div_list">
          <a>
            List of Subscribers
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
    );
  }
}

export default List;
