import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

export default class PropSlider extends Component {

  state = {
    properties: [],
    property: {}
  }

  componentDidMount() {
    axios.get('http://localhost:8080/properties')
      .then(data => {
        this.setState({
          properties: data.data,
          property: data.data[2]
        })
      })
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: this.state.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: this.state.properties[newIndex]
    })
  }

  render() {

    const { properties, property } = this.state;

    return (
      <div className="slider">
        <h1 className="slider__header">Availble Houses to Rent in Greater Toronto Area</h1>

        <i className="fas fa-angle-left"
          onClick={() => this.prevProperty()} style={{ display: property.index === 0 ? 'none' : 'block' }}
        ></i>

        <i className="fas fa-angle-right"
          onClick={() => this.nextProperty()}
          style={{ display: property.index === this.state.properties.length - 1 ? 'none' : 'block' }}
        ></i>


        <div className={`cards-slider active-slide-${property.index}`}>
          <div className="cards-slider-wrapper" style={{ transform: `translateX(-${property.index * (100 / properties.length)}%)` }}>

            {properties.map(property => <Card key={property._id} property={property} id={property._id} />)}
          </div>
        </div>
      </div>
    );

  }
}
