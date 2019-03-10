import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    errors: {},
    email: '',
    name: '',
    address: '',
    phone: '',
    birthDate: '',
    emailVerified: false
  }

  checkEmail(name, value){
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(name === 'email'){
      const result = emailRegex.test(value);
      console.log(result)
      if(result){
        this.setState({
          emailVerified: true
        })
      }
    }
    return;
  }

  handleChange = e => {
    this.checkEmail(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { emailVerified } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          name="name"
          placeholder="name"
          required
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="email"
          placeholder="email"
          required
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="phone"
          required
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="address"
          required
          onChange={this.handleChange}
        />

        <input
          type="date"
          name="birthDate"
          placeholder="birth date"
          required
          onChange={this.handleChange}
        />

        <button disabled={!emailVerified}>Submit</button>
      </div>
    );
  }
}

export default App;
