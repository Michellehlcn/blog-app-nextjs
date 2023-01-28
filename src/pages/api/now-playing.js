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

const currentlyPlayingSong = async () =>{
    const { access_token } = await getAccessToken();
    return fetch ("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export default async function handler(req, res) {
    
    const response = await currentlyPlayingSong();

    if (response.status === 204 || response.status > 400) {
        console.log(response.status);
        return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();
    
    /* Extract info */
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.image[0].url;
    const songUrl = song.item.external_urls.sportify;

    /* Return the data as JSON */
    return res.status(200).json({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
    });
}