import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

var SPOTIFY_CLIENT_ID="6d34de28c3e4e909045a4bc89f7715a";
var SPOTIFY_CLIENT_SECRET="a7d3ea3682464d3a80f1270dc3e68ae5";

export default NextAuth ({
    providers: [
        SpotifyProvider({
            authorization:
            'https://accounts.spotify.com/authorize?scope-user-read-email,playlist-read-private',
            clientId: SPOTIFY_CLIENT_ID,
            clientSecret: SPOTIFY_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.refresh_token;
            }
            return token;
        },
        async session(session, user) {
            session.user = user;
            return session;
        },
    },
});