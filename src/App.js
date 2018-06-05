/*
import React, { Component } from 'react';
import './App.css';
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="container">
                            <div className="jumbotron text-center">
                                <h1><span className="fa"></span> MiePick</h1> 
                                <p>Login or Register with:</p> 
                                <a href="/user/signin" className="btn btn-default"><span className="fa fa-user"></span>  Login</a>
                                <a href="/user/signup" className="btn btn-default"><span className="fa fa-user"></span>  Signup</a>
                            </div>

                        </div>
                    </div>
                </div>
        );
    }
}

export default App;
