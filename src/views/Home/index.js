import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import { graphql } from 'react-apollo';
import ReactLoading from "react-loading";

import { GET_ALL_ARTISTS } from 'queries';

import './Home.scss';

class Home extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          activeArtist: 1
      }

      this.handleArtist = this.handleArtist.bind(this);
  }

  handleArtist(ranking) {
      this.setState({
          activeArtist: ranking
      });
  }

  render() {
    const { activeArtist } = this.state;

    if (this.props.loading) {
        return (<ReactLoading type="spinningBubbles" color="#000" />);
    }

    const artist = this.props.allArtists.edges[activeArtist - 1];


    return (
        <div className="home bg-gray">
            <div className="home-wrapper">
                <div className="main-content bg-gray">
                    <div className="main-logo-wrapper">
                        <h1 className="f-header gold">THE GOAT</h1>
                        <p className="f-primary white">An Undisputable Top 5 List</p>
                    </div>

                    <div className="main-rankings">
                        {
                          this.props.allArtists.edges.map(ranking => {
                              const activeClass = activeArtist === ranking.node.artist_rank ? 'gold' : '';

                              return (
                                  <div key={uuid()} className={`rank f-header ${activeClass}`} tabIndex="0" role="button" onClick={() => this.handleArtist(ranking.node.artist_rank)}>{ranking.node.artist_rank}</div>
                              );
                          })
                        }
                    </div>
                </div>

                <div className="home-artist-content bg-gold">
                    <div className="home-artist bg-black">

                        <div className="home-artist-image">
                              <img src={artist.node.artist_image.url} alt={artist.node.artist_name[0].text} />
                        </div>

                        <div className="home-artist-details">
                            <h1 className="artist-details__name f-primary gold">{artist.node.artist_name[0].text}</h1>
                            <p className="artist-details__hometown white">{artist.node.artist_hometown[0].text}</p>
                            <Link className="artist-details__btn f-primary white" to={`/artist/${artist.node._meta.uid}`}>See Artist Info</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

}

export default graphql(GET_ALL_ARTISTS, {
  options: ({ refetch }) => ({
    fetchPolicy: refetch ? 'cache-and-network' : 'cache-first',
  }),
  props: ({ data: { loading, allArtists } }) => ({
    loading,
    allArtists,
  }),
})(Home);
