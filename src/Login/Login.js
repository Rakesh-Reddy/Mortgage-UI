import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import validator from '../validator';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginData: {
        loginId: '',
        password: ''
      }
    }
    this.validator = validator;
    
     this.resetValidators();
  }

  handleInputChange =(event, inputPropName) => {
    const {loginData} = this.state;
    const newState =  this.state;
    newState.loginData[inputPropName] = event.target.value;
    this.setState({loginData});
    this.updateValidators(inputPropName, event.target.value);
  }

  updateValidators = (fieldName, value) =>{
    this.validator[fieldName].errors = [];
    this.validator[fieldName].state = value;
    this.validator[fieldName].valid = true;
    this.validator[fieldName].rules.forEach((rule) => {
      if (rule.test instanceof RegExp) {
        if (!rule.test.test(value)) {
          this.validator[fieldName].errors.push(rule.message);
          this.validator[fieldName].valid = false;
        }
      } else if (typeof rule.test === 'function') {
        if (!rule.test(value)) {
          this.validator[fieldName].errors.push(rule.message);
          this.validator[fieldName].valid = false;
        }
      }
    });
  }

  resetValidators = () =>{
    Object.keys(this.validator).forEach((fieldName) => {
      this.validator[fieldName].errors = [];
      this.validator[fieldName].state = '';
      this.validator[fieldName].valid = false;
    });
  }
  
  // This function displays the validation errors for a given input field
  displayValidationErrors = (fieldName) =>{
    const validator = this.validator[fieldName];
    const result = '';
    if (validator && !validator.valid) {
      const errors = validator.errors.map((info, index) => {
        return <span className="error" key={index}>* {info}</span>;
      });

      return (
        <div className="col s12 row">
          {errors}
        </div>
      );
    }
    return result;
  }

  isFormValid = () =>{
    let status = true;
    Object.keys(this.validator).forEach((field) => {
      if (!this.validator[field].valid) {
        status = false;
      }
    });
    return status;
  }

  gotoHome = () => {
    axios.post('http://10.117.189.122:9090/mortgage/api/login/',this.state.loginData).then((response) => {
        swal('Login Successful');
        sessionStorage.setItem('customerId',JSON.stringify(response.data.customerId));
        //  this.props.history.push('/signupDetails/' + response.data.customerId);
        this.props.history.push('/accountSummary');
    }).catch(function (error) {
      swal(error.message)
    });
  }

  render() {
    return (
      <div className="pb-5">
        <div className="row">
          <div className="col-md-12 pt-4 pb-2">
            <h2 className="text-primary">Login Page</h2>
          </div>
        </div>
        <div className="row">
          <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
            <div className="col-md-2 pt-3"> Enter Login Id : </div> <input className="col-md-3 loginId" style={{ height: "47px" }}
              placeholder="Enter Your login Id " type="text"
              name="loginId" required
              onChange={event => this.handleInputChange(event, 'loginId')}

            />
          </div>
          <div className="col-md-12">
              <div className="text-danger col-md-6 text-center">
              { this.displayValidationErrors('loginId') }
              </div>
              </div>
          <div className="row col-md-12 pb-3 text-info"><div className="col-md-3"></div>
            <div className="col-md-2 pt-3"> Enter Password : </div>  <input className="col-md-3 password" style={{ height: "47px" }}
              placeholder="Enter Your Password " type="password"
              name="password" required
              onChange={event => this.handleInputChange(event, 'password')}
              />
          </div>

          
          <div className="col-md-12">
              <div className="text-danger col-md-6 text-center">
              { this.displayValidationErrors('password') }
              </div>
              </div>
        </div>
        <button className={`btn btn-primary ${this.isFormValid() ? '' : 'disabled'}`} style={{ width: "300px" }} onClick={this.gotoHome} >Submit</button>
      </div>
    );
  }
}

export default Login;
