import React from 'react';
import Emoji from '../Common/Emoji';

const Artwork = ({ artist, title, img, index }) => {
  return (
    <li className="artwork__main__li">
      <img src={img} alt={`${title}, ${artist}`} />
      <div className="artwork__main__li__info">
        <strong className="artwork__main__li__info__title">{title}</strong>
        <em className="artwork__main__li__info__artist">{artist}</em>
        <span className="artwork__main__li__info__recommend"><Emoji label="heart-with-arrow" symbol="💘" />추천</span>
        <button className="artwork__main__li__info__add-btn">+ MY동선</button>
      </div>
    </li>
  );
};

export default Artwork;
