import React from 'react'
import './Login.css'
import logo from './Logo.png'
import { spotifyUrl } from './spotify'


// const queryParams = new URLSearchParams(window.location.hash);
// const token = queryParams.get("acces_token")
// console.log(token)

function Login() {
    return (
        <div className="login">
            <img 
            src={logo}
            alt="spotify login"

            />
            <a href={spotifyUrl}>Login with Spotify</a>
    
        </div>
    )
}

export default Login
