import React, { Component } from 'react';
import axios from 'axios';

class SignUpDetails extends Component {

    constructor(props) {
        super(props);
    }

    gotoLogin = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="col-md-12 text-success">Your Account Summary</h2>
                   
                                <div className="row col-md-12 pt-5"  style={{ color: "#ff6200" }}>
                                    <div className="row pt-3 col-md-12"><div className="col-md-3"></div><div className="col-md-2">Login Id:</div>
                                        <div className="col-md-3">
                                            {this.props.loginId}
                                        </div></div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Password:</div>
                                        <div className="col-md-3 pt-3">
                                            {this.props.password}
                                        </div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Account Number:</div>
                                        <div className="col-md-3 pt-3">
                                            {this.props.accountNumber}
                                        </div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Mortgage Number:</div>
                                        <div className="col-md-3 pt-3">
                                            {this.props.mortgageNumber}
                                        </div>
                                    </div>
                                </div>
                                <div className="row col-md-12 pt-4"><div className="col-md-5"></div>
                    <button className="col-md-2 btn btn-info" onClick={this.gotoLogin}>Submit</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default SignUpDetails;