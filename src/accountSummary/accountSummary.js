import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#ff6200",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14
    },
}))(TableCell);

class AccountSummary extends Component {

    constructor() {
        super();
        this.state = {
            userData: [],
            transactionHistory: [],
            transactionHistoryB: false,
            customerId:JSON.parse(sessionStorage.getItem('customerId'))
        }
    }
    componentDidMount() {
        this.getData().then(response => {
            this.setState({ userData: response.data });
        }).catch(error => {
            alert(error.message);
        })
    }

    getData = () => {
        return new Promise((resolve, reject) => {
            axios.get(`http://52.66.212.220:9090/mortgage/api/summary/2`).then((response) => {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        })
    }

    getTransactionHistory = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:4000/transactionHistory').then((response) => {
                this.setState({ transactionHistory: response.data });
                // axios.get(`http://10.117.189.33:8080/ingbanking/api/transactionHistory/${this.props.data.accountNumber}`).then((response) => {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        })
    }

    transactionHistoryF = () => {
        this.setState({ transactionHistoryB: true });
    }

    tranHis = () => {
        this.transactionHistoryF();
        this.getTransactionHistory();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="col-md-12 text-success">Your Account Summary</h2>
                    {
                        this.state.userData.map((item, i) => {
                            return (
                                <div className="row col-md-12 pt-5 border border-top" key={i} style={{ color: "#ff6200" }}>
                                    <div className="row pt-3 col-md-12"><div className="col-md-3"></div><div className="col-md-2">Account Number:</div>
                                        <div className="col-md-3">
                                            {item.accountNumber}
                                        </div></div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Balance:</div>
                                        <div className="col-md-3 pt-3">
                                            {item.balance}
                                        </div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Account Type:</div>
                                        <div className="col-md-3 pt-3">
                                            {item.accountType}
                                        </div>
                                    </div>
                                    <div className="pb-5"><div className="col-md-6"></div>
                            <div>  <button className="col-md-12 btn btn-info" style={{ backgroundColor: "#ff6200" }} onClick={this.tranHis}>Transaction History</button></div></div>
                                </div>
                            )
                        })
                    }
                    <div className="row col-md-12 pt-5 ">
                        <div className="col-md-5"></div>
                                             {
                            (this.state.transactionHistoryB === true) ? (
                                <Table>
                                    <TableHead>
                                        <CustomTableCell><strong>S.no</strong></CustomTableCell>
                                        <CustomTableCell><strong>Date Of Transaction</strong></CustomTableCell>
                                        <CustomTableCell><strong>Description</strong></CustomTableCell>
                                        <CustomTableCell><strong>Dr/Cr</strong></CustomTableCell>
                                        <CustomTableCell><strong>Amount</strong></CustomTableCell>
                                    </TableHead>
                                    <TableBody className="table-hover">
                                        {

                                            this.state.transactionHistory.map((item, i) => {
                                                return (
                                                    <TableRow className="table table-info table-striped" key={i}>
                                                        <TableCell>{++i}</TableCell>
                                                        <TableCell>{item.transactionDate}</TableCell>
                                                        <TableCell>{item.description}</TableCell>
                                                        <TableCell>{item.transactionStatus}</TableCell>
                                                        <TableCell>{item.amount}</TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            ) : null
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default AccountSummary;