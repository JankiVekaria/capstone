import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchResult extends Component {
  render() {

    var result = this.props.result;
    const id = this.props.id;

    return (
      <div>

        <div style={{ display: 'flex', padding: '10px', background: '#fff' }}>

          <div style={{ width: '225px', height: '225px', marginRight: '40px' }}><img src={result.picture} alt="result" width="100%" height="100%" /></div>

          <div style={{ width: '746px', border: '1px solid #ccc', padding: '10px 10px 50px 10px', position: 'relative' }}>
            <h2>{result.address}, {result.city} <span style={{ float: 'right', color: '#BA265D', fontSize: '16px' }}>${result.price}  /Month</span></h2>
            <p>{result.description.substring(0, 400)} {result.description.length > 400 ? '...' : ''}</p>

            <Link to={`/properties/${id}`} style={{ display: 'inline-block', padding: '10px', background: 'blue', color: '#fff', position: 'absolute', bottom: '10px', right: '10px', borderRadius: '4px', textDecoration: 'none', marginTop: '40px' }}>Read more &rarr;</Link>


          </div>
        </div>

      </div>
    )
  }
}
