import gql from 'graphql-tag';

export const GET_ALL_ARTISTS = gql`
    query {
        allArtists(sortBy: artist_rank_ASC) {
            edges {
                node {
                    _meta {
                        uid
                    }
                    artist_name
                    artist_hometown
                    artist_rank
                    artist_image
                }
            }
        }
    }
`;

export const GET_ARTIST = gql`
    query Artist($slug: String!) {
        artist(uid: $slug, lang:"en-us") {
            artist_rank
            artist_name
            artist_hometown
            artist_bio
            artist_image
            artist_bars
            artist_albums {
               album_cover
               album_title
               album_release_date
               album_riaa_status
            }
        }
    }
`
