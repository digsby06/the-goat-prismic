import React from 'react';

import './ArtistHero.scss';

const ArtistHero = ({ ranking, name, hometown, image }) => (
    <section className="hero bg-gold">
        <div className="artist-wrapper">

            <div className="artist-info">
                <div className="artist-ranking">
                    <div className="artist-ranking__hash f-header">#</div>
                    <h1 className="artist-ranking__headline f-header">{ranking}</h1>
                </div>

                <div className="artist-image--mobile">
                      <img className="rounded" src={image} alt={`${name} Pic`} />
                </div>

                <div className="artist-copy">
                    <p className="artist-copy__alpha black">{name}</p>
                    <p className="artist-copy__beta black">{hometown}</p>
                </div>
            </div>

            <div className="artist-image">
                <picture>
                    <img src={image} alt={`${name} Pic`} />
                </picture>
            </div>
        </div>
    </section>
);

export default ArtistHero;
