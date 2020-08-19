import React, { useEffect } from 'react';
import RoomDetailPage from './RoomDetailPage';
import { connect } from 'react-redux';
import { getArtworkList, changeRoomID } from '../../modules/roomDetail';

const RoomDetailContainer = ({
  roomID,
  artworkList,
  getArtworkList,
  changeRoomID,
  match,
}) => {
  const { roomIDparam } = match.params;

  useEffect(() => {
    roomID ? getArtworkList(roomID) : changeRoomID(roomIDparam * 1);
  }, [roomID, roomIDparam, changeRoomID, getArtworkList]);

  return <RoomDetailPage artworkList={artworkList} />;
};

export default connect(
  ({ roomDetail }) => ({
    artworkList: roomDetail.artworkList,
    roomID: roomDetail.roomID,
  }),
  { getArtworkList, changeRoomID },
)(RoomDetailContainer);
