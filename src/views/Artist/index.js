import React, { Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import { Query } from 'react-apollo';
import ReactLoading from "react-loading";

import { GET_ARTIST } from 'queries';
import BackButton from 'components/BackButton';

import ArtistHero from './components/ArtistHero';
import ArtistContent from './components/ArtistContent';

import './Artist.scss';

const Artist = ({ match }) => {
    const slug = match.params.id;

    return (
        <div className="ArtistPage">

            <Query query={GET_ARTIST} variables={{ slug }}>
                {({ loading, error, data }) => {
                     if (loading) return (<ReactLoading type="spinningBubbles" color="#000" />);
                     if (error) return <div>Error</div>;
                     if (data.artist === null) return (<div><p>Artist Didn't Make The Cut</p></div>)

                     return (
                        <Fragment>
                            <ArtistHero
                                ranking={data.artist.artist_rank}
                                name={data.artist.artist_name[0].text}
                                hometown={data.artist.artist_hometown[0].text}
                                image={data.artist.artist_image.url}
                            />

                            <ArtistContent
                                bio={data.artist.artist_bio[0].text}
                                bars={RichText.render(data.artist.artist_bars)}
                                albums={data.artist.artist_albums}
                            />
                        </Fragment>
                     )
                }}
            </Query>

            <BackButton />
        </div>
    );
}

export default Artist;
