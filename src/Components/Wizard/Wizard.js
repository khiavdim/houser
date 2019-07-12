import React, { Component } from "react";
import "./../Dashboard/Dashboard.css";
import { Switch, Route } from "react-router-dom";

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
      img: "",
      step: 2,
      recommend: 0
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
      img: ""
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
      img: ""
    });
  };

  goNextStep = () => {
    let { step } = this.state;
    window.location = `/#/wizard/step${step}`;
    this.setState({ step: 3 });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    let {
      name,
      address,
      city,
      state,
      zip,
      img,
      mortgage,
      rent,
      recommend
    } = this.state;
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

        <Switch>
          <Route
            exact
            path="/wizard"
            render={props => {
              return (
                <div>
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
                        <input
                          value={zip}
                          name="zip"
                          onChange={this.handleChange}
                        />
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="Wizard-Bottom">
            
                    <button id="addBtn" onClick={this.goNextStep}>
                      Next Step
                    </button>
                  </div>
                </div>
              );
            }}
          />
          <Route
            exact
            path="/wizard/step2"
            render={props => {
              return (
                <div>
                  <div className="Wizard-Form">
                    <div>
                      <h3>Image URL</h3>
                      <input
                        value={img}
                        placeholder={img}
                        name="img"
                        onChange={this.handleChange}
                      />
                    </div>
                    <br />
                    <br />
                  </div>
                  <div className="Wizard-Bottom">
                    <p />
                    <button id="addBtn" onClick={this.goBack}>
                      Previous Step
                    </button>
                    <button id="addBtn" onClick={this.goNextStep}>
                      Next Step
                    </button>
                  </div>
                </div>
              );
            }}
          />
          <Route
            exact
            path="/wizard/step3"
            render={props => {
              return (
                <div>
                  <div className="Wizard-Form">
                    <div>
                      <h4>Recommended Rent: ${recommend}</h4>
                      <h3>Monthly Mortgage Amount</h3>
                      <input
                        type="number"
                        value={mortgage}
                        placeholder={mortgage}
                        name="mortgage"
                        onChange={this.recommended}
                      />
                    </div>
                    <h3>Desired Monthly Rent</h3>
                    <input
                      value={rent}
                      type="number"
                      placeholder={rent}
                      name="rent"
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <br />

                  <div className="Wizard-Bottom">
                    <p />
                    <button id="addBtn" onClick={this.goBack}>
                      Previous Step
                    </button>
                    <button id="addBtn" onClick={this.handleSubmit}>
                      Continue
                    </button>
                  </div>
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
