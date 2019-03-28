import React, { Component } from 'react';
import axios from 'axios';
import SearchResult from './SearchResult';

class Search extends Component {

  constructor(props) {
    super(props)
    this.searchForm = React.createRef();

    this.state = {
      showAdvanced: false,
      foundProperties: [],
      loading: false
    }
  }


  advanceSearch = () => {
    this.setState({
      showAdvanced: !this.state.showAdvanced,
    })
  }

  // .value.charAt(0).toUpperCase() + this.searchForm.current.location.value.slice(1)

  searchHandler = (e) => {
    e.preventDefault();
    const query = {
      city: this.searchForm.current.location.value.charAt(0).toUpperCase() + this.searchForm.current.location.value.slice(1),
      min: this.searchForm.current.min ? Number(this.searchForm.current.min.value) : 0,
      max: this.searchForm.current.max ? Number(this.searchForm.current.max.value) : 10000,
      bedrooms: this.searchForm.current.bedroom ? Number(this.searchForm.current.bedroom.value) : ''
    }

    const config = {
      method: "POST",
      url: "http://localhost:8080/search",
      data: query,
      headers: {
        "content-type": "application/json"
      }
    }

    axios(config)
      .then((result) => {
        this.setState({
          foundProperties: result.data
        })
      }).catch((err) => {
        console.log(err);
      });

    e.target.reset();

    this.setState({
      loading: true
    })

    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000);
  }


  render() {


    return (
      <div className="container">
        <div className="back-image">
          <div className="search">
            <form className="search__form" onSubmit={this.searchHandler} ref={this.searchForm}>
              <input type="text" className="search__location" placeholder="Enter city ..." name="location" required />
              <button type="submit" className="search__submit">Search</button>

              <p>Advanced search<i className={this.state.showAdvanced ? "fas fa-minus" : "fas fa-plus"} style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={this.advanceSearch}></i></p>

              {this.state.showAdvanced ?
                <div className="search__advanced">
                  <label htmlFor="min-price">Min price:</label>
                  <input type="number" className="search__minPrice" placeholder="min" name="min" />

                  <label htmlFor="max-price">Max price:</label>
                  <input type="number" className="search__maxPrice" placeholder="max" name="max" />

                  <label htmlFor="">Number of bedrooms:</label>
                  <select name="bedroom" className="search__bedrooms" >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div> : null}
            </form>


          </div>
        </div>

        {this.state.loading ? <div className="loader"><img style={{ position: 'relative', left: '350px', top: '40px' }} src="./assets/images/loading.gif" alt="loader" /></div> : ''}

        {!this.state.loading ? <div id="result">
          {this.state.foundProperties.length > 0 ? <h1 style={{ color: '#BA265D' }}>Search result</h1> : ''}

          {this.state.foundProperties.map(item => <SearchResult result={item} key={item._id} id={item._id} />)}

        </div> : ''}
      </div>
    )
  }
}


export default Search;