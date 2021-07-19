export const authEndpoint = "https://accounts.spotify.com/authorize";
//https://developer.spotify.com/documentation/web-palyback-sdk/quic-kstart/

const redirectUrl = "http://localhost:3000/"
const clientId = "92f7d378e780421aa1b4390cbd167af7"
const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const gettokenUrl = ()=>{
    return window.location.hash
           .substring(1)
           .split("&")
           .reduce((initial , item)=>{
               var parts= item.split("=")
               initial[parts[0]] = decodeURIComponent(parts[1])
               return initial
           },{})
}
console.log(gettokenUrl())
export const spotifyUrl= `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;