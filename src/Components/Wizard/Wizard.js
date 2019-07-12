import React, { Component } from "react";
import "./../Dashboard/Dashboard.css";
import {Switch, Route} from 'react-router-dom'

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0,
      mortgage: 0,
      rent: 0,
      img: '',
      step: 2,
    };
  }

  handleChange = e => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.addHouse(this.state);
    this.setState({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0,
      mortgage: 0,
      rent: 0,
      img: ''
    });
    window.location = "/";
  };

  handleReset = e => {
    e.preventDefault();
    this.setState({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0,
      mortgage: 0,
      rent: 0,
      img: ''
    });
  }

  goNextStep = () => {
    let {step} = this.state
    window.location = `/#/wizard/step${step}`
    let newStep = step++
    this.setState({step: newStep});
  }

  render() {
    const { name, address, city, state, zip, step } = this.state;
    return (
      <div className="Wizard-Container">
        <nav className="Dashboard-Header">
          <h2>Add New Listing</h2>
          <div>
            <button id="reset" onClick={this.handleReset}>
              Cancel
            </button>
          </div>
        </nav>
          <div className="Wizard-Form">
          <div>
            <h3>Property Name</h3>
            <input
              value={name}
              placeholder={name}
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <h3>Address</h3>
            <input
              value={address}
              name="address"
              onChange={this.handleChange}
            />
          </div>
          <div className="Form-Bottom">
            <div>
              <h3>City</h3>
              <input
                className="Short-Form"
                value={city}
                name="city"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <h3>State</h3>
              <input
                className="Short-Form"
                value={state}
                name="state"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <h3>Zip</h3>
              <input value={zip} name="zip" onChange={this.handleChange} />
            </div>
          </div>
        </div>
        <div className="Wizard-Bottom">
          <p />
          <button id="addBtn" onClick={this.goNextStep}>
            Next Step
          </button>
        </div>

      </div>
    );
  }
}
