
export const authEndpoint =
"https://accounts.spotify.com/authorize";

const redirectUri= "http://localhost:3000/";

const clientId="97d6224590144ddba967ff90e1bfecf5"

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl= `${authEndpoint}?client_id=
${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;

export const getTokenFromUrl= () =>{
    return window.location.hash
    .substring().split('&')
    .reduce((initial,item)=>{
        let parts= item.split('=')
        initial[parts[0]]=decodeURIComponent([parts[1]])

        return initial;
    },{}); 
}