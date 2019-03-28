import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


export default class Charts extends Component {

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City'
  }

  render() {
    return (
      <div className="outer">
        <div className="chart">
          <h1>Average Price of House Rental In GTA</h1>
          <Bar
            data={this.props.chartData}
            options={{
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              },

              title: {
                display: this.props.displayTitle,
                text: 'Average price of rent in GTA ($)',
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />

        </div>
      </div>
    );
  }
}
