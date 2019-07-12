import React, { Component } from "react";
import House from "./../House/House";
import "./Dashboard.css";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
  }

  deleteHouse = id => {
    axios
      .delete(`/api/houses/${id}`)
      .then(res => {
        this.setState({ houses: res.data });
      })
      .catch(err => console.log("Could not delete", err));
  };

  goWizard() {
    window.location = "/#/wizard";
  }

  render() {
    const { houses } = this.props;
    return (
      <div className="Dashboard-Container">
        <nav className="Dashboard-Header">
          <h2>Dashboard</h2>
          {console.log("In dashboard", houses)}
          <div>
            <button id="addBtn" onClick={this.goWizard}>
              Add New Property
            </button>
          </div>
        </nav>
        <hr />
        <h3>Home Listings</h3>
        {houses.map(house => {
          return (
            <House
              key={house.id}
              houses={houses}
              name={house.name}
              address={house.address}
              city={house.city}
              state={house.state}
              zip={house.zip}
              id={house.id}
              deleteHouse={this.deleteHouse}
              img={house.img}
              mortgage={house.mortgage}
              rent={house.rent}
            />
          );
        })}
      </div>
    );
  }
}
