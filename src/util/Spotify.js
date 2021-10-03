let accessToken;
const clientId = "d0753e7581f0412ea8fa41f4cdb66076";
const redirectUri = "http://locahost:3000";
const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    // Check for access Token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },
  search(term){
      const accessToken = Spotify.getAccessToken();
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, 
      {headers:{
          Authorization:   `Bearer ${accessToken}`
      }}).then(res=> {
          return res.json()
      }).then(jsonResponse => {
          if(!jsonResponse.track){
              return []
          }
          return jsonResponse.tracks.items.map(track=> ({
              name: track.name,
              id: track.name,
              artist: track.artist[0].name,
              album: track.album.name,
              uri: track.uri
            
          }))
      }
      )
  }
};

export default Spotify;
