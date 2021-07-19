import React from 'react'
import "./sidebar.css"
import Sidebaroption from './Sidebaroption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDatalayervalue } from './DataLayer';


function Sidebar() {
    const [{playlists},dispatch] = useDatalayervalue();
    console.log(playlists)

    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotifylogo"/>
            <Sidebaroption title="Home" Icon={HomeIcon}/>
            <Sidebaroption title= "Search" Icon={SearchIcon}/>
            <Sidebaroption title= "Library" Icon = {LibraryMusicIcon}/>
            <br />
            <strong className="sidebar_strong" >PLAYLISTS</strong>
            <hr />
            
            {playlists?.items?.map(playlist =>{
                return <Sidebaroption title ={playlist.name} />             
                
            })}
            {/* <Sidebaroption title= "Hip Hop"/>
            <Sidebaroption title= "Rock"/>
            <Sidebaroption title= "Kuthu"/>
            <Sidebaroption title= "Romantic"/> */}
        </div>
    )
}

export default Sidebar
