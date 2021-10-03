import React from "react";
import './TrackList.css';
import Track from '../Track/Track'
class TrackList extends React.Component {
  render() {
    console.log(this.props.tracks)
    return (
      <div className="TrackList">
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {
          this.props.tracks.map(track => <Track track={track} key={track.id} isRemoval={this.props.isRemoval}/>)
        }
      </div>
    );
  }
}

export default TrackList;
