import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Us from './components/Us';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Us />
      </div>
    );
  }
}
export default App;

