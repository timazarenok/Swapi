import React, { Component } from 'react';
import './App.css';
import swapiServices from './services'
import Header from "./components/Header";
import {Route} from "react-router-dom";
import Spinner from "./Spinner";
import Planets from "./components/Planets";
import People from "./components/People";

class App extends Component {
    state = {
      data: []
    };
    componentDidMount() {
    }

    render() {
        return (
        <div>
            <Header />
            <Spinner/>
            <Planets/>
            <People/>
        </div>
    );
  }
}

export default App;

