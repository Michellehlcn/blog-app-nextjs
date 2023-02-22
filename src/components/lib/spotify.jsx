var SPOTIFY_REFRESH_TOKEN="";
var SPOTTIFY_CLIENT_ID="6d34de28c3e4e909045a4bc89f7715a";
var SPOTIFY_CLIENT_SECRET="a7d3ea3682464d3a80f1270dc3e68ae5";


const getAccessToken = async () =>{
    
    const refresh_token = SPOTIFY_REFRESH_TOKEN;
    const response = await fetch ("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${Buffer.from(`${SPOTTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });
    
    return response.json();
};

export const currentlyPlayingSong = async () =>{
    // console.log(`Basic ${Buffer.from(`${SPOTTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64")}`);
    const { access_token } = await getAccessToken();
    return fetch ("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};