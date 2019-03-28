import React, { Component } from 'react';
import Gallery from './Gallery';
import axios from 'axios';
import ReactTab from './ReactTab';

export default class IndividualProperty extends Component {

  state = {
    propItemData: {}
  }

  componentDidMount() {
    const propId = this.props.match.params.id;

    axios.get(`http://localhost:8080/properties/${propId}`)
      .then(res => {
        this.setState({
          propItemData: res.data
        })
      })
      .catch(err => {
        console.log(err)
      });

  }


  render() {

    const { propItemData } = this.state;

    return (
      <div className="eachProp">
        <div className="eachProp__container">
          <div className="eachProp__container--img">
            <Gallery images={propItemData.images} />
          </div>

          <div className="eachProp__details">
            <h1 className="eachProp__details--price">${propItemData.price} per Month</h1>
            <p className="eachProp__details--available"><i className="fas fa-check"></i>Available from <b>{propItemData.availableDate}</b></p>
            <hr />

            <div className="eachProp__area">
              <div>
                <p><i className="fas fa-bed"></i> {propItemData.bedrooms} bedrooms</p>
                <p><i className="fas fa-warehouse"></i> {propItemData.area} m<sup>2</sup></p>
                <p><i className="fas fa-couch"></i><b>{propItemData.furnished === "yes" ? 'Furnished' : 'Unfurnished'}</b></p>
              </div>

              <div>
                <p className="eachProp__area--address"><b>Address: </b>{propItemData.address}</p>
                <p className="eachProp__area--city"><b>City: </b>{propItemData.city}</p>
              </div>
            </div>
            <hr />

            <div className="eachProp__agent">
              <p><b>Rental Agent</b></p>
              <p><i className="fas fa-user"></i><span className="eachProp__agent--name">{propItemData.agentName}</span></p>

              <p><i className="fas fa-envelope"></i><a className="eachProp__agent--email"
                href={"mailto:"}>{propItemData.agentEmail}</a></p>

              <p><i className="fas fa-phone"></i><span className="eachProp__agent--phone">{propItemData.agentPhone}</span></p>

              <div className="eachProp__agent--photo">
                <img src={propItemData.agentPhoto} alt="Seller agent" />
              </div>
            </div>

            <div className="eachProp__register">
              <h3>Please contact agent for more details about the property</h3>
            </div>

          </div> {/* end of div on the right */}
        </div>

        <ReactTab propInfo={propItemData} />

      </div>
    )
  }
}

