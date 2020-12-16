import './Register.css';
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import Logo from '../images/logo_temp.png';

class RegisterEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      birth: '',
      country: '',
      city: '',
      school: '',
      major: '',
      email:'',
      teamname: '',
      size: '',
      preference: '',
      memone: '',
      memtwo: '',
      memthree: '',
      memfour: '',
      memfive: '',
      memsix: '',
      memseven: '',
      memeight: '',
      timezone: '',
      source: '',
      other: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if ((event.target.name == "source") && (event.target.value == "other"))
      this.setState({other: true})

    this.setState({[event.target.name]: event.target.value});
  }

  sendRequest = async (newApplicant) => {
      try {
          const resp = await axios.post('https://pioneers.kaist.ac.kr:8000/api/register/event/post', newApplicant);
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
    // name, gender, birth, country, city, school, major, email, 
    // teamname, size, memone, memtwo, memthree, memfour
    let ind_f_one = this.state.name == "" || this.state.gender == "" || this.state.birth == ""
    let ind_f_two = this.state.country == "" || this.state.city == ""
    let ind_f_three = this.state.school == "" || this.state.major == "" || this.state.email == ""
    let team_f_one = this.state.teamname == "" || this.state.size == "" || this.state.preference == ""
    let team_f_two = this.state.memone == "" || this.state.memtwo == ""
    let team_f_three = this.state.memthree == "" || this.state.memfour == ""
    let ind_flag = ind_f_one || ind_f_two || ind_f_three
    let team_flag = team_f_one || team_f_two || team_f_three

    const NotFilled = ind_flag || team_flag

    let cond = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let emailValidity = cond.test(this.state.email);

    let sizeValidity = this.state.size < 8 && this.state.size > 3

    if (NotFilled){
      alert("Please check if you filled all the necessary fields.")
      event.preventDefault();
      return
    }
    else if (!emailValidity) {
      alert("Your Email address is in a wrong format. Please check again.")
      event.preventDefault();
      return
    }
    else if (!sizeValidity) {
      alert("Your team size is not between 4 and 8. Please check again.")
      event.preventDefault();
      return
    }


    else {
      const newApplicant = {
        name: this.state.name,
        gender: this.state.gender,
        birth: this.state.birth,
        country: this.state.country,
        city: this.state.city,
        school: this.state.school,
        major: this.state.major,
        email: this.state.email,
        teamname: this.state.teamname,
        size: this.state.size,
        preference: this.state.preference,
        memone: this.state.memone,
        memtwo: this.state.memtwo,
        memthree: this.state.memthree,
        memfour: this.state.memfour,
        memfive: this.state.memfive,
        memsix: this.state.memsix,
        memseven: this.state.memseven,
        memeight: this.state.memeight,
        timezone: this.state.timezone,
        source: this.state.source,
      };
      this.sendRequest(newApplicant);
    }
    // alert("submit!");

    event.preventDefault();
  }


  render() {
    return (
      <div className="Register">
        <div className="register-title-div">
          <a>
            Application
          </a>
        </div>
        <div className="register-form">
          <form onSubmit={this.handleSubmit}>
            <div className="information-container">
              <div className="register-category">
                <a> 
                  Individual Information
                </a>
              </div>
              <div className="information-section-container">
                <p style={{fontSize: "1rem"}}>
                  * indicates necessary fields
                </p>
                <div className="div-input-horizontal">
                  <div className="input-container" style={{marginTop:"3px"}}>
                    <label className="input-label"> 
                      Full Name *
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
                  <div className="input-container">
                    <label className="input-label"> 
                      Gender *
                    </label>
                    <select 
                      name="gender"
                      defaultValue=""
                      className="register-input-half"
                      onChange={this.handleChange} 
                      style={{fontSize: '1.1rem'}}
                    >
                      <option value="" disabled hidden></option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="unknown">I would rather not answer</option>
                    </select>
                  </div>
                  <div className="input-container">
                    <label className="input-label-half-right">
                      Date of Birth *
                    </label>
                    <input 
                      defaultValue=""
                      type="text" 
                      name="birth" 
                      className="register-input-half-right"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div>
                <div className="div-input-horizontal">
                  <div className="input-container">
                    <label className="input-label"> 
                      Country *
                    </label>
                    <input 
                      defaultValue=""
                      type="text" 
                      name="country" 
                      placeholder="Enter your country"
                      className="register-input-half"
                      onChange={this.handleChange} 
                    />
                  </div>
                  <div className="input-container">
                    <label className="input-label-half-right">
                      City *
                    </label>
                    <input 
                      defaultValue=""
                      type="text" 
                      name="city" 
                      placeholder="Enter your city"
                      className="register-input-half-right"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div>
                <div className="div-input-horizontal">
                  <div className="input-container">
                    <label className="input-label"> 
                      School *
                    </label>
                    <input 
                      defaultValue=""
                      type="text" 
                      name="school" 
                      placeholder="Enter your school"
                      className="register-input-half"
                      onChange={this.handleChange} 
                    />
                  </div>
                  <div className="input-container">
                    <label className="input-label-half-right">
                      Major/Minor *
                    </label>
                    <input 
                      defaultValue=""
                      type="text" 
                      name="major" 
                      placeholder="Enter your major/minor"
                      className="register-input-half-right"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div>
                <div className="div-input-horizontal">
                    <div className="input-container">
                      <label className="input-label"> 
                        Email *
                      </label>
                      <input 
                        defaultValue=""
                        type="text" 
                        name="email" 
                        placeholder="Enter your school email"
                        className="register-input-full"
                        onChange={this.handleChange} 
                      />
                    </div>
                  </div>
              </div>
            </div>
            <div className="information-container">
              <div className="register-category">
                <a> 
                  Team Information
                </a>
              </div>
              <div className="information-section-container">
                <div className="div-input-horizontal">
                  <div className="input-container" style={{marginTop:"3px"}}>
                    <label className="input-label"> 
                      Team Name *
                    </label>
                    <input 
                      defaultValue=""
                      type="text" 
                      name="teamname" 
                      placeholder="Enter your team name"
                      className="register-input-half"
                      onChange={this.handleChange} 
                    />
                  </div>
                  <div className="input-container" style={{marginTop:"3px"}}>
                    <label className="input-label-half-right">
                      Number of Team Members *
                    </label>
                    <input 
                      defaultValue=""
                      type="text" 
                      name="size" 
                      placeholder="Enter the number of team members"
                      className="register-input-half-right"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div>
                <div className="div-input-horizontal">
                  <div className="input-container">
                    <label className="input-label"> 
                      Scenario Preference 
                    </label>
                    <select 
                      name="preference"
                      defaultValue=""
                      onChange={this.handleChange} 
                      className="register-input-full"
                      style={{fontSize: '1.1rem'}}
                    >
                      <option value="" disabled hidden></option>
                      <option value="pandemic">The World With the Invisible Threat</option>
                      <option value="climate">Society Made of Burnt Fuels</option>
                      <option value="ai">The World of an "Intelligent" Mind</option>
                    </select>
                  </div>
                </div>
                <div className="div-input-horizontal">
                  <div className="input-container">
                    <label className="input-label"> 
                      Team members 
                    </label>
                    <input 
                      defaultValue=""
                      type="text" 
                      name="memone" 
                      placeholder="Enter your team member 1 *"
                      className="register-input-half"
                      onChange={this.handleChange} 
                    />
                  </div>
                  <div className="input-container">
                    <label className="input-label-half-right" style={{visibility:"hidden"}}>
                      .
                    </label>
                    <input 
                      defaultValue=""
                      type="text" 
                      name="memtwo" 
                      placeholder="Enter your team member 2 *"
                      className="register-input-half-right"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div>
                <div className="div-input-horizontal">
                  <div className="input-container">
                    <input 
                      defaultValue=""
                      type="text" 
                      name="memthree" 
                      placeholder="Enter your team member 3 *"
                      className="register-input-half"
                      onChange={this.handleChange} 
                    />
                  </div>
                  <div className="input-container">
                    <input 
                      defaultValue=""
                      type="text" 
                      name="memfour" 
                      placeholder="Enter your team member 4 *"
                      className="register-input-half-right"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div>
                <div className="div-input-horizontal">
                  <div className="input-container">
                    <input 
                      defaultValue=""
                      type="text" 
                      name="memfive" 
                      placeholder="Enter your team member 5"
                      className="register-input-half"
                      onChange={this.handleChange} 
                    />
                  </div>
                  <div className="input-container">
                    <input 
                      defaultValue=""
                      type="text" 
                      name="memsix" 
                      placeholder="Enter your team member 6"
                      className="register-input-half-right"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div>
                <div className="div-input-horizontal">
                  <div className="input-container">
                    <input 
                      defaultValue=""
                      type="text" 
                      name="memseven" 
                      placeholder="Enter your team member 7"
                      className="register-input-half"
                      onChange={this.handleChange} 
                    />
                  </div>
                  <div className="input-container">
                    <input 
                      defaultValue=""
                      type="text" 
                      name="memeight" 
                      placeholder="Enter your team member 8"
                      className="register-input-half-right"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="information-container">
              <div className="register-category">
                <a> 
                  Additional Information
                </a>
              </div>
              <div className="information-section-container">
                <div className="input-container" style={{marginTop:"3px"}}>
                  <label className="input-label"> 
                    Which Time Zone do you prefer? 
                  </label>
                  <select 
                    defaultValue=""
                    name="timezone"
                    onChange={this.handleChange} 
                    className="register-input-full"
                    style={{fontSize: '1.1rem'}}
                  >
                    <option value="" disabled hidden></option>
                    <option value="UTC-12:00">UTC-12:00</option>
                    <option value="UTC-11:00">UTC-11:00</option>
                    <option value="UTC-10:00">UTC-10:00</option>
                    <option value="UTC-09:00">UTC-09:00</option>
                    <option value="UTC-08:00">UTC-08:00</option>
                    <option value="UTC-07:00">UTC-07:00</option>
                    <option value="UTC-06:00">UTC-06:00</option>
                    <option value="UTC-05:00">UTC-05:00</option>
                    <option value="UTC-04:00">UTC-04:00</option>
                    <option value="UTC-03:00">UTC-03:00</option>
                    <option value="UTC-02:00">UTC-02:00</option>
                    <option value="UTC-01:00">UTC-01:00</option>
                    <option value="UTC-00:00">UTC-00:00</option>
                    <option value="UTC+01:00">UTC+01:00</option>
                    <option value="UTC+02:00">UTC+02:00</option>
                    <option value="UTC+03:00">UTC+03:00</option>
                    <option value="UTC+04:00">UTC+04:00</option>
                    <option value="UTC+05:00">UTC+05:00</option>
                    <option value="UTC+06:00">UTC+06:00</option>
                    <option value="UTC+07:00">UTC+07:00</option>
                    <option value="UTC+08:00">UTC+08:00</option>
                    <option value="UTC+09:00">UTC+09:00</option>
                    <option value="UTC+10:00">UTC+10:00</option>
                    <option value="UTC+11:00">UTC+11:00</option>
                    <option value="UTC+12:00">UTC-12:00</option>
                  </select>
                </div>
                <div className="input-container">
                  <label className="input-label"> 
                    How did you find out about our conference? 
                  </label>
                  <select 
                    name="source"
                    defaultValue=""
                    onChange={this.handleChange} 
                    className="register-input-full"
                    style={{fontSize: '1.1rem'}}
                  >
                    <option value="" disabled hidden></option>
                    <option value="website">PIONEERS 2071 Official Website</option>
                    <option value="invite">Invited by the PIONEERS 2071 Team</option>
                    <option value="sns">PIONEERS 2071 Social Media</option>
                    <option value="family">Through family or friends</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div 
                  className  ={this.state.other ?  "input-container" : "hidden-div"}
                >
                  <label className="input-label"> 
                    Other
                  </label>
                  <input 
                    defaultValue=""
                    type="text" 
                    name="source" 
                    placeholder="Please specify how you found out about our conference."
                    className="register-input-full"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
          </div>
          <div style={{fontSize: "1.1rem"}}>
            I agree with <a className="link-in-text" target="blank" href="https://drive.google.com/drive/folders/17wpEhO4ruf-v28venhf5SVffwd9ybHiQ?usp=sharing">Terms and conditions</a>
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

export default RegisterEvent;
