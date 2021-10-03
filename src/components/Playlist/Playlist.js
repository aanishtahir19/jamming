import React from "react";
import TrackList from "../TrackList/TrackList";
import './Playlist.css'
class Playlist extends React.Component {
  
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={e => this.props.changeName(e.target.value)}/>
        {/* <!-- Add a TrackList component --> */}
        <TrackList tracks={this.props.playlist} isRemoval={true} onRemove={this.props.onRemove}/>
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
