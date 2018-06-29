import React, { Component } from 'react';
import SearchResultContainer from "./components/SearchResultContainer";
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="../assets/crateDiggingRedStamp_Resize.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">CrateDigging</h1>
        </header>
        
        <SearchResultContainer>{this.state.response}</SearchResultContainer>;
          
      
        
      </div>
    );
  }
}

export default App;
