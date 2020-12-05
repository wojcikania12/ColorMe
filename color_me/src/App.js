import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './Router';
import history from './history';
import './App.css';
function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}
export default App;


