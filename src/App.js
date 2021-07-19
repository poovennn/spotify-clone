
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { gettokenUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./Player"
import { useDatalayervalue } from './DataLayer';


const spotify = new SpotifyWebApi();



function App() {
  // const [token,setToken] = useState(null)
  const [{user,token,playlists}, dispatch] = useDatalayervalue();

  
  useEffect(()=>{
    const hash = gettokenUrl();
    window.location.hash=""
    const _token = hash.access_token;
    
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user =>{
        console.log(user)
        dispatch({
          type:"SET_USER",
          user:user,
        })

      }) 
      spotify.getUserPlaylists().then(playlists =>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
      })     
    }
    

  },[])
  console.log(token)

  return (
    <div className="App">
      {/* <h1>Pooven Coder .com</h1> */}
      {/* <Login /> */}
      {token? (
        <Player spotify={spotify} />
      ) : (
        <Login />
      )
      }
       
    </div>
  );
}

export default App;
