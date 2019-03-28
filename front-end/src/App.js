import React, { Component } from 'react';
import './App.scss';
import Main from './components/Main';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import AdvertisementUpload from './components/AdvertisementUpload';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import IndividualProperty from './components/IndividualProperty';
import AuthCallback from './components/AuthCallback';
import Search from './components/Search';


class App extends Component {


  searchParentFunc = (res) => {

  }



  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/callback" component={AuthCallback} />
            <Route path="/" exact render={() => { return <Main searchTransfer={this.searchParentFunc} /> }} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/advertisement_upload" component={AdvertisementUpload} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/properties/:id" component={IndividualProperty} />
            {/*<Route path="/searchResult" render={() => { return <SearchResult searchTransfer={this.finalResult} /> }} />*/}
            <Route path="/search" component={Search} />

          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
