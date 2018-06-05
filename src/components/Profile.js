/*
import React, { Component } from 'react';
import './App.css';
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    
    render() {
        return (
            <div className="App">
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                        <div class="page-header text-center">
                            <h1>Welcome to MiePick</h1>
                            <a href="/user/logout" class="btn btn-default btn-sm">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
