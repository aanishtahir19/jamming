import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchResults: [
        {name: "Track1", artist: "Artist1", album: "Album1", id:"01" },
        {name: "Track2", artist: "Artist2", album: "Album2", id:"02" },
        {name: "Track3", artist: "Artist3", album: "Album3", id:"03" },
        {name: "Track4", artist: "Artist4", album: "Album4", id:"04" }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar/>
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults searchResults={this.state.searchResults}/>
            {/* <!-- Add a Playlist component --> */}
            <Playlist/>
          </div>
        </div>
      </div>
    );
  }
}
