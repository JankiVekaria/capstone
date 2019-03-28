import React, { Component } from 'react'
import Hero from './Hero';
import MoreInfo from './MoreInfo';
import PropSlider from './PropSlider';
import PropertyList from './PropertyList';
import Charts from './Charts';
import axios from 'axios';

export default class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      chartData: {},
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    //ajax call here
    axios.get('http://localhost:8080/average')
      .then((result) => {
        const data = result.data;

        const avg = data.map(each => {
          return (each.total / each.count).toFixed(0)
        })

        const labels = data.map(each => {
          return each._id + ` (${each.count} property)`;
        })

        this.setState({
          chartData: {
            // labels: ['Mississuaga', 'Brampton', 'Toronto', 'Scarborough', 'Vaughaun', 'Ajax'],
            labels: labels,
            datasets: [{
              label: 'Price (CAD)',
              data: avg,
              backgroundColor: ['rgb(16, 175, 29)', 'black', 'orangered', 'orange', 'skyblue', 'blue', 'red', 'brown', 'lightgreen']
            }]
          }
        })
      })
  }

  render() {
    return (
      <>
        <Hero />
        <MoreInfo />
        <Charts legendPosition="bottom" chartData={this.state.chartData} />
        <PropSlider />
        <PropertyList />
      </>
    )
  }
}
