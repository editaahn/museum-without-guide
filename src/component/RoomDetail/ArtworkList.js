import React from 'react';
import Artwork from './Artwork';

const ArtworkList = ({ artworkList }) => {
  return (
    <ul className="artwork__ul">
      {artworkList
        ? artworkList.map((artwork, i) => (
            <Artwork
              key={i}
              index={i}
              title={artwork.title}
              artist={artwork.artist}
              img={artwork.img}
              recommendation={artwork.recommendation}
            />
          ))
        : 'loading' }
    </ul>
  );
};

export default ArtworkList;
