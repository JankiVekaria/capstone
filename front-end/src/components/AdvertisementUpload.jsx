
import React, { Component } from 'react';
import axios from 'axios';

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  })
}

export default class AdvertisementUpload extends Component {

  constructor(props) {
    super(props);
    this.uploadForm = React.createRef();

    this.state = {
      showPopup: false,
      index: '',
      price: '',
      address: '',
      city: '',
      bedrooms: '',
      bathrooms: '',
      parking: '',
      furnished: '',
      latitude: '',
      longitude: '',
      area: '',
      date: '',
      name: '',
      phone: '',
      email: '',
      description: '',
      formErrors: {
        price: '',
        address: '',
        city: '',
        bedrooms: '',
        bathrooms: '',
        parking: '',
        furnished: '',
        latitude: '',
        longitude: '',
        area: '',
        date: '',
        name: '',
        phone: '',
        email: '',
        description: ''
      }
    }
  }



  //In order to auto increment index of property, last index in DB is fetch and added +1 to last index
  componentDidMount() {
    axios.get('http://localhost:8080/properties')
      .then(res => {
        this.setState({
          index: res.data[0] ? res.data[res.data.length - 1].index + 1 : 0
        })
      })
  }



  showPopup = () => {
    if (this.state.showPopup) {
      this.setState({
        showPopup: false
      })
    } else {
      this.setState({
        showPopup: true
      })
    }
  }

  submitHandler = (e) => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(this.state.price)
      console.log(this.state.city)
      console.log(this.state.address)
    } else {
      console.error("Form Invalid")
    }

    const newProperty = {
      index: this.uploadForm.current.index.value,
      picture: this.uploadForm.current.picture.value,
      price: Number(this.uploadForm.current.price.value),
      city: this.uploadForm.current.city.value.charAt(0).toUpperCase() + this.uploadForm.current.city.value.slice(1),

      address: this.uploadForm.current.address.value,
      latitude: Number(this.uploadForm.current.latitude.value),
      longitude: Number(this.uploadForm.current.longitude.value),
      bedrooms: Number(this.uploadForm.current.bedrooms.value),
      bathrooms: Number(this.uploadForm.current.bathrooms.value),
      carSpaces: Number(this.uploadForm.current.parking.value),
      availableDate: this.uploadForm.current.date.value,
      area: this.uploadForm.current.area.value,
      furnished: this.uploadForm.current.furnished.value,
      agentName: this.uploadForm.current.name.value,
      agentEmail: this.uploadForm.current.email.value,
      agentPhone: this.uploadForm.current.phone.value,
      // agentImage: this.uploadForm.current.photo.value,
      description: this.uploadForm.current.description.value
    }

    const config = {
      method: "POST",
      url: "http://localhost:8080/properties",
      data: newProperty,
      headers: {
        "content-type": "application/json"
      }
    }

    axios(config).then(result => {
      console.log(result)
    }).catch(err => {
      console.log(err)
    })

    window.location.pathname = "/";
    e.target.reset();
  }


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    // console.log(name);
    // console.log(value);

    switch (name) {
      case 'price':
        formErrors.price = value.length < 1 ? 'Value required' : '';
        break;

      case 'address':
        formErrors.address = value.length < 3 ? 'Minimum 3 characters required' : '';
        break;

      case 'city':
        formErrors.city = value.length < 1 ? 'City required' : '';
        break;

      default:
        break;
    }

    this.setState({
      formErrors, [name]: value
    }, () => {
      console.log(this.state);
    })
  }



  render() {
    const { formErrors } = this.state;

    return (
      <div className="adUpload">
        <h1>Upload your Advertisement</h1>
        <p>Please enter the details of your property</p>

        <div className="adUpload__container">
          <form ref={this.uploadForm} onSubmit={this.submitHandler} noValidate>
            <div className="adUpload__row">
              <div>
                <label>Price ($):</label>
                <input type="number" name="price" className="adUpload__container--price" noValidate onChange={this.handleChange} />
              </div>

              <div style={{ position: 'relative' }}>
                <label>Address:</label>
                <input type="text" name="address" className="adUpload__container--address" noValidate onChange={this.handleChange} />
                {formErrors.address.length > 0 && (<span className="adUpload__container--errorMsg"><small>{formErrors.address}</small></span>)}

              </div>

              <div style={{ position: 'relative' }}>
                <label>City:</label>
                <input type="text" name="city" className="adUpload__container--city" noValidate onChange={this.handleChange} />
                {formErrors.city.length > 0 && (<span className="adUpload__container--errorMsgCity"><small>{formErrors.city}</small></span>)}
              </div>
            </div>

            <div className="adUpload__row">
              <div>
                <label>Bedrooms:</label>
                <input type="number" name="bedrooms" className="adUpload__container--bedrooms" noValidate onChange={this.handleChange} />
              </div>
              <div>
                <label>Bathrooms:</label>
                <input type="number" name="bathrooms" className="adUpload__container--bathrooms" noValidate onChange={this.handleChange} />
              </div>
              <div>
                <label>Parking spaces:</label>
                <input type="number" name="parking" className="adUpload__container--parking" noValidate onChange={this.handleChange} />
              </div>
              <div>
                <label>Furnished:</label>
                <select name="furnished" className="adUpload__container--furnished" noValidate onChange={this.handleChange}>
                  <option value=""></option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>


            </div>

            <div className="adUpload__row">
              <div>
                <label>Latitude:</label><sup><i className="far fa-question-circle" onClick={this.showPopup}></i></sup>

                <input type="text" name="latitude" className="adUpload__container--latitude" noValidate onChange={this.handleChange} />
                <span className="adUpload__row--popup" style={{ display: this.state.showPopup ? 'block' : 'none' }}>
                  <a className="adUpload__row--link" target="blank" href="https://www.gps-coordinates.net/">Find latitude and longitude</a>
                </span>
              </div>

              <div>
                <label>Longitude:</label>
                <input type="text" name="longitude" className="adUpload__container--longitude" noValidate onChange={this.handleChange} />
              </div>

              <div>
                <label>Area (m<sup>2</sup>):</label>
                <input type="number" name="area" className="adUpload__container--area" noValidate onChange={this.handleChange} />
              </div>

              <div>
                <label>Available from:</label>
                <input type="date" name="date" className="adUpload__container--available" noValidate onChange={this.handleChange} />
              </div>
            </div>
            <div style={{ display: 'none' }}>
              <label htmlFor="">Index</label>
              <input type="text" disabled value={this.state.index ? this.state.index : 0} className="adUpload__container--index" name="index" />
            </div>

            <hr />
            <h2>Selling Agent Information:</h2>

            <div className="adUpload__row">
              <div>
                <label>Agent name:</label>
                <input type="text" name="name" className="adUpload__container--agentName" noValidate onChange={this.handleChange} />
              </div>

              <div>
                <label>Agent phone:</label>
                <input type="text" name="phone" className="adUpload__container--agentPhone" noValidate onChange={this.handleChange} />
              </div>
            </div>

            <div className="adUpload__row">
              <div>
                <label>Agent email:</label>
                <input type="email" name="email" className="adUpload__container--agentEmail" noValidate onChange={this.handleChange} />
              </div>

              <div>
                <label>Property Main photo URL:</label>
                <input type="text" name="picture" className="adUpload__container--mainPhoto" /><a href="https://postimages.org/" target="blank">Convert to URL</a>
              </div>
            </div>

            <div className="adUpload__row">
              <textarea name="description" className="adUpload__container--description" placeholder="Please provide a brief description of the property..." noValidate onChange={this.handleChange}></textarea>
            </div>

            <div className="adUpload__row">
              <button type="submit" className="adUpload__container--btn" disabled={formErrors.address.length > 0}>Publish</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

