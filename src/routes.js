import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
import axios from "axios";

export default class Routes extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/houses")
      .then(res => {
        this.setState({ houses: res.data });
      })
      .catch(err => {
        console.log("Error from server", err);
      });
  }

  componentDidUpdate() {
    axios
      .get("/api/houses")
      .then(res => {
        this.setState({ houses: res.data });
      })
      .catch(err => {
        console.log("Error from server", err);
      });
  }

  addHouse = newHouse => {
    let { name, address, city, state, zip } = newHouse;
    axios
      .post("/api/houses", {
        name,
        address,
        city,
        state,
        zip
      })
      .then(res => {
        this.setState({ houses: res.data });
      })
      .catch(err => console.log("Error from server", err));
  };

  render() {
    const { houses } = this.state;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <Dashboard {...props} houses={houses} />;
            }}
          />
          <Route
            path="/wizard"
            render={props => {
              return (
                <Wizard {...props} houses={houses} addHouse={this.addHouse} />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
