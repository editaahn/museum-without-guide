import React from "react";
import ArtworkList from './ArtworkList'
import Header from '../Common/Header';

const RoomDetailPage = ({ artworkList }) => {
  return (
    <div>
      <Header title='이 방의 작품' />
      <ArtworkList 
        artworkList={artworkList}
      />
    </div>
  )
}

export default RoomDetailPage;