import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainApp from './MainApp'
import UploadPhotoScreen from './UploadPhotoScreen'
import UploadLineartScreen from './UploadLineartScreen'


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MainApp} />
      <Route path="/uploadPhoto" component={UploadPhotoScreen} />
      <Route path="/uploadLineart" component={UploadLineartScreen}  />
      <Route path="/filter" component={MainApp}  />
    
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={MainApp} />
    </Switch>
  );
}