import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    errors: {},
    email: '',
    name: '',
    address: '',
    phone: '',
    birthDate: ''
  }

  handleChange = e => {

  }

  render() {
    return (
      <div className="App">
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="phone" placeholder="phone"/>
        <input type="text" name="email" placeholder="email"/>
        <input type="text" name="address" placeholder="address"/>
        <input type="date" name="birthDate"/>
        <button>Submit</button>
      </div>
    );
  }
}

export default App;
