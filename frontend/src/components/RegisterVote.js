import './Register.css';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import Logo from '../images/logo_temp.png';

class RegisterVote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birth: '',
      email:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if ((event.target.name == "source") && (event.target.value == "other"))
      this.setState({other: true})

    this.setState({[event.target.name]: event.target.value});
  }

  sendRequest = async (newVoter) => {
      try {
          const resp = await axios.post('https://pioneers.kaist.ac.kr:8000/api/register/vote/post', newVoter);
          if (resp.status == 200)
            window.location.href="/complete"
          // window.location.reload(false);
      } catch (err) {
          // Handle Error Here
          alert("Unknown error has occured. Please contact the administrator.");
          // console.error(err);
      }

  };

  handleSubmit(event) {
    // name, birth, email, 
    let name_flag = this.state.name == ""
    let birth_flag = this.state.birth == ""
    let email_flag = this.state.email == ""

    let cond = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let emailValidity = cond.test(this.state.email);

    if (name_flag){
      alert("Please fill your name.")
      event.preventDefault();
      return
    }
    else if (birth_flag) {
      alert("Please fill your birth date.")
      event.preventDefault();
      return
    }
    else if (email_flag) {
      alert("Please fill your email address.")
      event.preventDefault();
      return
    }
    else if (!emailValidity) {
      alert("Your Email address is in a wrong format. Please check again.")
      event.preventDefault();
      return
    }


    else {
      const newVoter = {
        name: this.state.name,
        birth: this.state.birth,
        email: this.state.email,
      };
      this.sendRequest(newVoter);
    }
    // alert("submit!");

    event.preventDefault();
  }


  render() {
    return (
      <div className="Register">
        <div className="register-title-div">
          <a>
            Voter Registration Application
          </a>
        </div>
        <div className="register-form">
          <form onSubmit={this.handleSubmit}>
            <div className="vote-container">
              <div className="register-category">
                <a> 
                  Individual Information
                </a>
              </div>
              <div className="information-section-container">
                <div className="div-input-horizontal">
                  <div className="vote-input-container" style={{marginTop:"3px"}}>
                    <label className="input-label"> 
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      defaultValue=""
                      placeholder="Enter your full name"
                      className="register-input-full"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div> 
                <div className="div-input-horizontal">
                  <div className="vote-input-container" style={{marginTop:"3px"}}>
                    <label className="input-label"> 
                      Date of Birth
                    </label>
                    <input 
                      type="text" 
                      name="birth" 
                      defaultValue=""
                      placeholder="Enter your date of birth as DDMMYYYY (ex.25122020)"
                      className="register-input-full"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div>
                <div className="div-input-horizontal">
                  <div className="vote-input-container" style={{marginTop:"3px"}}>
                    <label className="input-label"> 
                      Email
                    </label>
                    <input 
                      type="text" 
                      name="email" 
                      defaultValue=""
                      placeholder="Enter your school email"
                      className="register-input-full"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div>
              </div>
            </div>
          <div style={{fontSize: "1.1rem"}}>
            I agree with <a className="link-in-text" target="blank" href="https://drive.google.com/drive/folders/1ELk2PXlNSJGsFMwwypYtS61UJhq9D0V2?usp=sharing">Terms and conditions</a>
          </div>
          <div className="btn-container">
            <input 
              type="submit" 
              name="submit" 
              className="btn-join" 
              value="Submit"
            />
          </div>
        </form>
      </div>
      {
        // <div className="register-container">
        //   <a className="register"> not yet registered? </a> 
        //   <a href="/complete" className="register-link"> sign up </a>
        // </div>
      }
      </div>
    );
  }
}

export default RegisterVote;
