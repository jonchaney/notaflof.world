import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

import SessionFormContainer from './sessionForm/sessionFormContainer';
import HeaderContainer from './header/headerContainer';
import AboutContainer from './about/aboutContainer';
import EventContainer from './events/eventsContainer';
import UploadContainer from './upload/uploadContainer';

const App = () => (
  <div>   
      <Route path='/' component={HeaderContainer}/>
      <Switch>
        <Route path='/upload' component={UploadContainer}/>
      </Switch>
  </div>
);

export default App;