import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import { env } from 'process';
import querystring from 'querystring';

var SPOTIFY_REFRESH_TOKEN= process.env.SPOTIFY_REFRESH_TOKEN;
var SPOTTIFY_CLIENT_ID= process.env.SPOTTIFY_CLIENT_ID;
var SPOTIFY_CLIENT_SECRET= process.env.SPOTIFY_CLIENT_SECRET;
var basic = Buffer.from(`${SPOTTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

console.log(SPOTIFY_CLIENT_SECRET, "|",SPOTIFY_REFRESH_TOKEN,"|", basic);
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

var scope = 'playlist-read-private user-read-currently-playing' ;
var REDIRECT_URI = 'http://localhost:3000/';

const getAccessToken = async () =>{
    const response = await fetch (TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token: SPOTIFY_REFRESH_TOKEN,
        })
    })
    console.log("[AccessToken]",response.status)
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
    console.log(response);

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();
    console.log(song);
    
    /* Extract info */
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    console.log(JSON.stringify(albumImageUrl));
    const songUrl = song.item.external_urls.spotify;

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