import React, { Component } from 'react';
import auth from './Auth';

export default class AuthCallback extends Component {

  componentDidMount() {
    auth.handleAuthentication();
  }

  render() {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    )
  }
}
