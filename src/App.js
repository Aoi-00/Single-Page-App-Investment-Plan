import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';

import Routes from './router/Routes';
import Store from './Redux/Store/Store';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import './style.css';

class App extends Component {
  state = {
    collapseID: ''
  };

  render() {

    const { collapseID } = this.state;

    return (
      <Provider store={Store}>
        <Router>
          <div className='flyout'>
          {collapseID && overlay}
            <main >
              <br />
              <Routes />
              <br/>
            </main>
            <Footer></Footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
