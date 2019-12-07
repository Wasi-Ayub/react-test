import React, { Component } from 'react';
import Quiz from './components/quiz';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Quiz />
      </div>
    );
  }
}

export default App;
