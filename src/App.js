import React, {useContext} from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/nav'
import Container from './components/container'
import { UserCourseAllotmentProvider,UserCourseAllotmentContext } from './context'
import './assets/css/main.css';

function App() {

  return (
    <div className="bg-light h-100">
      <UserCourseAllotmentProvider>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Container />
            </Switch>
          </div>
        </Router>
      </UserCourseAllotmentProvider>
    </div>

  );
}

export default App;
