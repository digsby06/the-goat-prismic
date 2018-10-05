import React from 'react';
import uuid from 'uuid';

import './ArtistContent.scss';

const ArtistContent = ({ bio, albums, bars }) => (
    <section className="artist-content bg-gray">
        <div className="info-wrapper">

            <div className="artist-details">
                <div className="info-bio">
                    <h1 className="info-header f-header gold">Bio</h1>
                    <p className="info-bio__copy white">{bio}</p>
                </div>

                <div className="info-bars">
                    <h1 className="info-header f-header gold">Bars</h1>
                    {bars}
                </div>
            </div>

            <div className="info-albums">
                <h1 className="info-header f-header gold">Notable Projects</h1>

                <div className="album-group">
                    { albums.map(album => {
                        return (
                          <div key={uuid()} className="album">
                              <img className="album__cover" src={album.album_cover.url} alt="album cover" />
                              <h1 className="album__title f-primary gold">{album.album_title[0].text}</h1>
                              <p className="album__copy white">{album.album_release_date[0].text}</p>
                              <p className="album__copy riaa white">{album.album_riaa_status[0].text}</p>
                          </div>
                        )
                    })}

                </div>
            </div>
        </div>
    </section>
);

export default ArtistContent;
