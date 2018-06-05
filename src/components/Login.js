import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {

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

    axios.post('/user/signin', { email, password })
      .then((result) => {
        console.log('Loginnnn>>>>', result);
        this.props.history.push('/user/profile')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    const { email, password, message } = this.state;
    return (
      <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <form onSubmit={this.onSubmit}>
                         <h2 className="form-signin-heading">Please sign in</h2>
                        <div class="form-group">
                            <label for="email">E-Mail</label>
                            <input type="email" className="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
                        </div>
                        <button type="submit" class="btn btn-primary">SignIn</button>
                    </form>
                </div>
            </div>
      </div>
    );
  }
}

export default Login;