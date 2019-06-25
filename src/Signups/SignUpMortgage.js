import React, { Component } from 'react';
import axios from 'axios';

class SignUpMortGage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userSignUp: {
                employmentStatus: '',
                occupation: '',
                contractType:'',
                jobStartDate:'',
                title:'',
                firstName:'',
                middleName:'',
                surName:'',
                dob:'',
                phoneNumber:'',
                email:'',
                // getUserDetails: JSON.parse(sessionStorage.getItem('userDetails'))
            },

        }
    }

    signupDetails = () => {
        const {userSignUp} = this.state;
        const userD ={
            userDetails:this.state.userSignUp
        }
        const userD1={ 
            user:JSON.parse(sessionStorage.getItem('userDetails'))
        }
        const c={...userD.userDetails,...userD1.user}
        axios.post('http://10.117.189.79:9099/IngMortgage/api/registration',c).then((response) => {
            this.props.getUserData(response.data, this.props);

        }).catch(function (error) {
        });       
      }

    handleSelect = (event) => {
        const { userSignUp } = this.state;
        userSignUp[event.target.name] = event.target.value;
        this.setState({ userSignUp });
    }

    prevPage = () => {
        this.props.history.push('/signUp');
    }

    render() {
        const {getUserDetails} = this.state;
        // console.log('session stotage 2' ,this.state.getUserDetails);
        return (
            <div className="pt-5 ">
                <div className="row">
                    <h2 className="col-md-12 text-success"> Mortgage SignUp</h2>

                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-10 pb-2">What is Your Employment Status </div></div>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-4"></div>
                        <select className="col-md-4" style={{ height: "40px" }} name="employmentStatus" onChange={this.handleSelect}>
                            <option value="Employed">Employed</option>
                            <option value="Self-employed">Self-employed</option>
                        </select>
                    </div>

                    <div className="row col-md-12 pb-2 pt-3 text-info"><div className="col-md-10 pb-2">What is Your Occupation  </div></div>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-4"></div>
                        <select className="col-md-4" style={{ height: "40px" }} name="occupation" onChange={this.handleSelect}>
                            <option value="Professional">Professional</option>
                            <option value="Semi-professional">Semi-professional</option>
                            <option value="Executive">Executive</option>
                            <option value="Manager">Manager</option>
                            <option value="Office Staff">Office Staff</option>
                            <option value="Production">Production</option>
                            <option value="Media personality">Media personality</option>
                            <option value="Professional sports person">Professional sports person</option>
                        </select>
                    </div>

                    <div className="row col-md-12 pb-2 pt-3 text-info"><div className="col-md-10 pb-2">What is Your Contract Type  </div></div>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-4"></div>
                        <select className="col-md-4" style={{ height: "40px" }} name="contractType" onChange={this.handleSelect}>
                            <option value="Probationary">Probationary</option>
                            <option value="Piecework ">Piecework</option>
                            <option value="Sub-Contracted">Sub-Contracted</option>
                            <option value="Seasonal/Temporary">Seasonal/Temporary</option>
                            <option value="Fixed/Short Term Contract">Fixed/Short Term Contract</option>
                            <option value="Agency worker">Agency worker</option>
                        </select>
                    </div>

                    <div className="row col-md-12 pb-2 pt-3 text-info"><div className="col-md-10 pb-2">When Did you Start your Job  </div></div>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-4"></div>
                        <input className="col-md-4" name="jobStartDate" type="date" onChange={this.handleSelect}/>
                    </div>

                    <div className="row col-md-12 pb-2 pt-3 text-info"><div className="col-md-9 pb-2 text-success">Applicant Name </div></div>

                    <div className="row col-md-12 pb-2 pt-3 text-info"><div className="col-md-9 pb-2">Title  </div></div>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-4"></div>
                        <select className="col-md-4" style={{ height: "40px" }} name="title" onChange={this.handleSelect}>
                            <option value="Mr">Mr</option>
                            <option value="Mrs ">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Ms">Ms</option>
                            <option value="Dr">Dr</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="row col-md-12 pb-2 pt-3 text-info"><div className="col-md-9 pb-2">First Name  </div></div>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-4"></div>
                        <input className="col-md-4" name="firstName" type="text" onChange={this.handleSelect}/>
                    </div>

                    <div className="row col-md-12 pb-2 pt-3 text-info"><div className="col-md-10 pb-2">Middle Name (When Required)  </div></div>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-4"></div>
                        <input className="col-md-4" name="middleName" type="text" onChange={this.handleSelect}/>
                    </div>

                    <div className="row col-md-12 pb-2 pt-3 text-info"><div className="col-md-9 pb-2">SurName </div></div>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-4"></div>
                        <input className="col-md-4" name="surName" type="text" onChange={this.handleSelect}/>
                    </div>

                    <div className="row col-md-12 pb-2 pt-3 text-info"><div className="col-md-9 pb-2">Date Of Birth</div></div>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-4"></div>
                        <input className="col-md-4" name="dob" type="date" onChange={this.handleSelect}/>
                    </div>

                    <div className="row col-md-12 pb-2 pt-3 text-info"><div className="col-md-10 pb-2 text-success">Contact Details</div></div>
                    <div className="row col-md-12 pb-2 pt-3 text-info"><div className="col-md-11 pb-2">What is your prefered contact phone number</div></div>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-4"></div>
                        <input className="col-md-4" name="phoneNumber" type="number" onChange={this.handleSelect}/>
                    </div>

                    <div className="row col-md-12 pb-2 pt-3 text-info"><div className="col-md-10 pb-2">What is your email Address</div></div>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-4"></div>
                        <input className="col-md-4" name="email" type="email" onChange={this.handleSelect}/>
                    </div>

                    <div className="row col-md-12 pb-2 pt-3 text-info"><div className="col-md-10 pb-2">Please Confirm email Address</div></div>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-4"></div>
                        <input className="col-md-4"  type="email" onChange={this.handleSelect}/>
                    </div>

                    <div className="row col-md-12 pt-4"><div className="col-md-5"></div>
                    <button className="col-md-2 btn btn-info" onClick={this.prevPage}>Prev</button>
                    </div>
                    <div className="row col-md-12 pt-4"><div className="col-md-5"></div>
                    <button className="col-md-2 btn btn-info" onClick={this.signupDetails}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default SignUpMortGage;