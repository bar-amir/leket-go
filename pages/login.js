import React, { Component } from 'react';
import "../statics/styles.scss"
import { connect } from "react-redux"
import fire from '../config/firebaseConfig'
import Header from '../components/Header.js'
import Router from 'next/router'
import checkAuthAndRefresh from '../dbActions/checkAuth'
import Loading from './loading'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    componentWillMount() {
        if (!this.props.authChecked) checkAuthAndRefresh(this.props.dispatch)
    }
	
    handleSubmit = (e) => {
        const db = fire.firestore();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password
        ).then(
            (user) => {
                db.collection("users").doc(user.user.uid).get().then((doc) => {
                    Router.push('/');
                })
            }).catch(
                (err) => {
                    this.props.dispatch({ type: 'LOGIN_ERR', msg: err.message });
                });
    }

    render() {
        console.log(this.props)
        if (!this.props.authChecked) {
            return (<Loading />)
        }
        return (
            <div>
                <Header isLogin={true} />
                <main className="m-2" style={{ paddingBottom: '3rem' }}>
                    <div className="card">
                        <h5 className="card-header">התחברות</h5>
                        <div className="card-body">
                            <h5 className="card-title">ברוכים הבאים ללקט־night!</h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">כתובת דואר אלקטרוני</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">סיסמה</label>
                                    <input type="password" className="form-control" id="password" onChange={this.handleChange} />
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                    <label className="custom-control-label" htmlFor="customCheck3">זכרוני</label>
                                </div>
                                <a href="#">שכחתי סיסמה</a>
                            </form>
                            <a role="button" onClick={this.handleSubmit} className="mt-2 btn btn-primary">התחברות</a>
                        </div>
                    </div>
                    <div style={{ color: 'red' }}>
                        {this.props.loginErr ? <h3>{this.props.loginErr}</h3> : null}
                    </div>
                </main>
            </div>
        )
    }
}

export default connect(state => state)(Login);