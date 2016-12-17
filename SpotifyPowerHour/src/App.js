import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songUrl: 'https://embed.spotify.com/?uri=spotify%3Atrack%3A6Tsu3OsuMz4KEGKbOYd6A0'
    }
  }

  render(){
    return <button><iframe allowfullscreen="" frameborder="0" height="1" src="http://www.youtube.com/embed/UkWd0azv3fQ?autoplay=1" width="1"></iframe></button>
 }

}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songUrl: 'https://embed.spotify.com/?uri=spotify%3Atrack%3A6Tsu3OsuMz4KEGKbOYd6A0'
    }
  }

  changeSong() {
    this.setState({
      songUrl: (this.state.songUrl == 'https://embed.spotify.com/?uri=spotify%3Atrack%3A0nmxH6IsSQVT1YEsCB9UMi')
      ? 'https://embed.spotify.com/?uri=spotify%3Atrack%3Aspotify:track:3zSCNTXI7Ed0PiidZVmzIe'
      : 'https://embed.spotify.com/?uri=spotify%3Atrack%3A6Tsu3OsuMz4KEGKbOYd6A0'
    });
    console.log("Switch song")
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Welcome to React<code>src/App.js</code> and save to reload.
          <br />
          <br />
          <br />
          <Button />
        </p>
      </div>
    );
  }
}

export default App;
