import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';
import Header from './Header/Header';
import SignUp from './Signups/SignUp';
import SignUpMortGage from './Signups/SignUpMortgage';
import SignUpDetails from './SignUpDetails/SignUpDetails';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AccountSummary from './accountSummary/accountSummary';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  getUserData = (data, props) => {
    this.setState({ data });
    props.history.push('/signupDetails');

  }


  render() {
    return (
      <div className="App">
        <HashRouter>
          <Header />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={SignUp} exact />
            <Route path="/signUp" component={SignUp} />
            <Route path="/signupDetails" render={() => <SignUpDetails getUserData={this.state.data} />} />
            <Route path="/accountSummary" component={AccountSummary} />
            <Route path="/signUpMortgage" render={() => <SignUpMortGage getUserData={this.getUserData} />}  />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
