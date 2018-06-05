/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/user/signin' component={Login} />
        <Route path='/user/signup' component={Register} />
        <Route path='/user/profile' component={Profile} />
        <Route path='/user/logout' component={App} />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();