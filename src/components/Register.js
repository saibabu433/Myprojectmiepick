import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;
        console.log('from signup', email, password);

        axios.post('/user/signup', { email, password })

            .then((result) => { 
            this.props.history.push('/user/profile')
        });
    }

    render() {
        const { email, password } = this.state;
        return (
            <div classname="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <form onSubmit={this.onSubmit}>
                            <h2>Register</h2>
                            <div class="form-group">
                                <label for="email">E-Mail</label>
                                <input type="email" className="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
                            </div>
                            <button type="submit" class="btn btn-primary">SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;