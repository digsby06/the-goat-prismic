import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import { graphql } from 'react-apollo';
import ReactLoading from "react-loading";
import ReactFullpage from '@fullpage/react-fullpage';
import arrow from 'images/right-arrow.svg';
import down from 'images/down-arrow.svg';
import maximize from 'images/maximize.svg';
import { TwitterShareButton } from 'react-twitter-embed';


import { GET_ALL_ARTISTS } from 'queries';

import './Home.scss';

class Home extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          activeArtist: 1
      }

      this.handleArtist = this.handleArtist.bind(this);
      this.honorableMentions = ['Tupac Shakur', 'Scarface', 'Method Man', 'Eminem', 'Andre 3000'];
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

    return (
        <ReactFullpage
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section bg-gray">
                            <div className="home-intro">
                                <h1 className="f-header white">Who's The Best Emcee...</h1>
                                <p className="f-primary white">An Undisputable Top 5 List</p>

                                <a className="circle-btn" tabIndex="0" role="button" onClick={() => fullpageApi.moveSectionDown()}>
                                    <img src={down} alt="See Rankings" />
                                </a>
                            </div>
                        </div>

                        {
                          this.props.allArtists.edges.map(artist => {
                              const isGoat = artist.node.artist_rank === 1 ? 'gold' : 'white';
                              return (
                                <div className="section bg-gray">
                                    <div className={`artist-rank ${isGoat} f-primary`}>
                                        <h1>{artist.node.artist_rank}</h1>
                                    </div>

                                    <div className="artist-content">
                                        <h1 className="artist-content__name f-primary gold">{artist.node.artist_name[0].text}</h1>
                                        <p className="artist-content__hometown white">{artist.node.artist_hometown[0].text}</p>

                                        <Link className="circle-btn f-primary white" to={`/artist/${artist.node._meta.uid}`}><img src={arrow} alt="Go to Artist Page"/></Link>
                                    </div>
                                </div>

                              )
                          })
                        }

                        <div className="section bg-gold">
                            <section className="honorable-mentions">
                                <h1 className="f-header">Honorable Mentions</h1>

                                <div className="honorable-artists">
                                    { this.honorableMentions.map(rapper => {
                                        return (
                                                <p>{rapper}</p>
                                        )
                                    })}
                                </div>

                                <div className="debate-your-mother">
                                    <p className="f-primary">So, you don't agree with my list? I get it, Tupac is the greatest blah blah blah. Start an argument with me on Twitter.</p>
                                    <TwitterShareButton
                                        options={{ text: 'Yo @ellodigsby your list is trash! My #TopFiveRappers are', size: 'large' }}
                                    />
                                </div>
                            </section>
                        </div>

                    </ReactFullpage.Wrapper>
                )
            }}
        />
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
