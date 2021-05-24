import React from 'react';
import {Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
//import Profile from './Profile';
import Profiles from './Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/Profiles">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/Profiles">gildong 프로필</Link>
        </li>
      </ul>
      <hr/>
      <Route path = "/" component={Home} exact={true}/>
      <Route path ={['/about', '/info']} component={About} />
      <Route path ="/profiles" component={Profiles} />
    </div>
  )
}
export default App;
