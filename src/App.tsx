import React, { Fragment } from 'react';
import Landing from './pages/Landing';
import Header from './components/Header';
import './main.css';

function App() {

  return (
    <Fragment>
      <Header>
        <h1>Anne Chanson</h1>
      </Header>
      <Landing />
    </Fragment>
  );
}

export default App;
