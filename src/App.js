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
  }

  checkEmail(value){
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailRegex.test(value);
  }

  onSubmit = () =>{
    const errors = {};
    if (this.state.name === '') errors.name = 'Field harus diisi';
    if (!this.state.birthDate) errors.birthDate = 'Field harus diisi';
    if (this.state.phone === '') errors.phone = 'Field harus diisi';
    if (!this.checkEmail(this.state.email)) errors.email = 'Format email salah';
    if (this.state.address === '') errors.address = 'Field harus diisi';

    const valid = Object.keys(errors).length === 0;
    if(valid){
      // DO API CALL
      alert('success submiting form');
    }
    else {
      this.setState({
        errors
      })
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          name="name"
          placeholder="name"
          required
          onChange={this.handleChange}
        />
        <span>{errors.name || ''}</span>

        <input
          type="text"
          name="email"
          placeholder="email"
          required
          onChange={this.handleChange}
        />
        <span>{errors.email || ''}</span>


        <input
          type="text"
          name="phone"
          placeholder="phone"
          required
          onChange={this.handleChange}
        />

        <span>{errors.phone || ''}</span>


        <input
          type="text"
          name="address"
          placeholder="address"
          required
          onChange={this.handleChange}
        />
        <span>{errors.address || ''}</span>


        <input
          type="date"
          name="birthDate"
          placeholder="birth date"
          required
          onChange={this.handleChange}
        />
        <span>{errors.birthDate || ''}</span>


        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
