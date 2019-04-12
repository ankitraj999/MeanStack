import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetProd from './prodGet';
import Create from './prodCreate';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import{BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import ProdUpdate from './prodUpdate';

class App extends Component {
  render() {
    return (
      <Router>
        <h2>Product CRUD using React JS</h2>
        <nav className="navbar navbar-inverse">
        <div className="container">
        
        <ul id='ank' className="nav navbar-nav">
          <li><Link to={'/create'}>Create</Link></li>
          <li ><Link to={'/Get'}>List</Link></li>
          
        </ul>
        </div>
        </nav>
        <Switch>
            <Route exact path='/create' component={ Create } />
            <Route path='/Get' component={ GetProd } />
            <Route path='/update' component={ ProdUpdate } />
        </Switch>
        
        <img src={logo} className="App-logo" alt="logo" />
      
    </Router>
    );
  }
}

export default App;
