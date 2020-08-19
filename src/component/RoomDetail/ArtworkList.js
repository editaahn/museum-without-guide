import React from 'react';
import Artwork from './Artwork';

const ArtworkList = ({ artworkList }) => {
  return (
    <ul>
      {artworkList
        ? artworkList.map((artwork, i) => (
            <Artwork
              index={i}
              title={artwork.title}
              artist={artwork.artist}
              img={artwork.img}
            />
          ))
        : 'loading' }
    </ul>
  );
};

export default ArtworkList;
