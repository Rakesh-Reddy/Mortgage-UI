import React, { Component } from 'react';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userSignUp: {
                operationType: '',
                propertyCost:'',
                deposit:''
            },
            sessionData:[]
        }
    }

    handleSignUp = (event) => {
        const { userSignUp } = this.state;
        userSignUp[event.target.name] = event.target.value;
        this.setState({ userSignUp });
    }

    nextPage = () => {
         const {userSignUp} = this.state;
        sessionStorage.setItem('userDetails',JSON.stringify(userSignUp));
        this.props.history.push('/signUpMortgage');
    }

    render() {
        return (
            <div className="pt-5 ">
                <div className="row">
                    <h2 className="col-md-12 text-success"> Mortgage SignUp</h2>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-9 pb-2">I'm Thinking About</div></div>
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-4"></div>
                        <select className="col-md-4" style={{ height: "40px" }} name="operationType" onChange={this.handleSignUp}>
                            <option value="Buying my first home">Buying my first home</option>
                            <option value="Moving to another home">Moving to another home</option>
                            <option value="Remortgaging">Remortgaging</option>
                            <option value="Buying a second home">Buying a second home</option>
                            <option value="Buying a property to let">Buying a property to let</option>
                            <option value="Remortgaging my buy to let property">Remortgaging my buy to let property</option>
                        </select>
                    </div>
                    <div className="row col-md-12 pb-3 pt-3 text-info"><div className="col-md-4"></div>
                         <input className="col-md-4 " style={{ height: "77px" }}
                             type="text"
                            name="propertyCost" required
                            onChange={this.handleSignUp}
                        />
                    </div>
                    <div className="row col-md-12 pb-2 pt-5 text-info"><div className="col-md-11 pb-2">How Much Do You Think the Property Will Cost</div></div>
                    <div className="row col-md-12 pb-3 text-info"><div className="col-md-4"></div>
                         <input className="col-md-4 " style={{ height: "47px" }}
                             type="number"
                            name="deposit" required
                            onChange={this.handleSignUp}
                        />
                    </div>

                    <div className="row col-md-12 pb-2 pt-5 text-info"><div className="col-md-10 pb-2">How Much Deposit do you have</div></div>
                    <div className="row col-md-12 pb-3 text-info"><div className="col-md-4"></div>
                         <input className="col-md-4 " style={{ height: "47px" }}
                             type="number"
                            name="deposit" required
                            onChange={this.handleSignUp}
                        />
                    </div>
                    <div className="row col-md-12 pt-4"><div className="col-md-5"></div>
                    <button className="col-md-2 btn btn-info" onClick={this.nextPage}>Next</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default SignUp;