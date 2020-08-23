import React from 'react';
import ArtworkList from './ArtworkList';
import PageHeader from '../Common/PageHeader';
import { withRouter } from 'react-router-dom';

const RoomDetailPage = ({ artworkList, history }) => {
  return (
    <div className="wrapper">
      <PageHeader title="이 방의 작품" history={history} />
      <ArtworkList artworkList={artworkList} />
    </div>
  );
};

export default withRouter(RoomDetailPage);
