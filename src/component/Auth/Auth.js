import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserData } from './../../ducks/reducer';

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (key, val) => {
        // console.log(val)
        this.setState({
            [key]: val
        });
    };


    async login() {
        const { username, password } = this.state;
        const res = await axios.post('/auth/login', { username: username, password: password })
        this.props.getUserData(res.data.userData[0])
        if (res.data.loggedIn) {
            this.props.history.push('/dashboard')  //redirect
            console.log('logged in')
        }
    }

    async register() {
        // console.log(this.state)
        const { username, password } = this.state;
        const res = await axios.post('/auth/register', { username: username, password: password })
        this.props.getUserData(res.data.userData[0])
        if (res.data.loggedIn) {
            this.props.history.push('/dashboard')  //redirect
            console.log('registered')
        }
    }


    render() {
        // console.log(this.props)
        // const {updateUsername} = this.props
        return (
            <div>
                Auth
                <p>Username:
                    <input onChange={(e) => this.handleChange('username', e.target.value)} type="text" />
                </p>
                <p>Password:
                    <input onChange={(e) => this.handleChange('password', e.target.value)} type="text" />
                </p>
                <button onClick={() => this.login()}>Login</button>
                <button onClick={() => this.register()}>Register</button>
            </div>
        )
    }
}

export default connect(null, { getUserData })(Auth); 