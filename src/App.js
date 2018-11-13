import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import router from '@/router/router';
import '@/App.scss';
import api from '@/api/api_home';
import logo from '@/public/img/logo.f6560243.png';

api.test('http://10.254.4.41:5002/log/api/v1.0/test').then(res => {
  console.log(res.data);
}).catch(e => {
  console.log(e);
});
export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {

    return (
      <Router>
        <div>
          <div className='logo'>
            <img src={logo} alt=""/>
          </div>
          <ul className='route'>
            <li><Link to='/jenkins/home'>Home</Link></li>
            <li><Link to='/jenkins/link'>Link</Link></li>
            <li><Link to='/jenkins/about'>About</Link></li>
          </ul>
          <Route exact path="/jenkins/home" component={router.home.home}/>
          <Route exact path="/jenkins/link" component={router.link.link}/>
          <Route exact path="/jenkins/about" component={router.about.about}/>
        </div>
      </Router>
    );
  }
}
