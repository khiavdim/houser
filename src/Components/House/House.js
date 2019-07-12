import React, { Component } from "react";
import './House.css'

export default class House extends Component {
  render() {
    const {name, address, city, state, zip, deleteHouse, id, img, mortgage, rent} = this.props
    return (
      <div>
      <div className="House-Container">
        <div className="House-Img"><img src={img} alt={name}/></div>
        <div>
        <p>Property Name: {name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p> 
        <p>Zip: {zip}</p>
        </div>
        <div>
        <p>Monthly Mortgage: {mortgage}</p>
        <p>Desired Rent: {rent}</p>
        </div>
        <div><button onClick={() => deleteHouse(id)}>x</button></div>
      </div>
      <br></br>
      </div>
    );
  }
}
