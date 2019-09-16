import React, { Component } from 'react';
import FilterSection from '../components/FilterSection/FilterSection'
import './App.css';


class App extends Component {
    state = { 
        showResults: false 
    }

  render() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <FilterSection/>
        </div>
        )
    }
}

export default App;
