import React, { useEffect } from 'react';
import RoomDetailPage from './RoomDetailPage';
import { connect } from 'react-redux';
import {
  getArtworkList,
  changeRoomID,
  cleanRoomInfo,
} from '../../modules/roomDetail';

const RoomDetailContainer = ({
  roomID,
  artworkList,
  getArtworkList,
  changeRoomID,
  match,
  loadingArtworkList,
  cleanRoomInfo,
}) => {
  const { roomIDparam } = match.params;

  useEffect(() => {
    roomID ? getArtworkList(roomID) : changeRoomID(roomIDparam * 1);
  }, [roomID]);

  useEffect(() => {
    return () => {
      cleanRoomInfo();
    };
  }, []);

  return (
    <RoomDetailPage artworkList={artworkList} />
  );
};

export default connect(
  ({ roomDetail }) => ({
    artworkList: roomDetail.artworkList,
    loadingArtworkList: roomDetail.loading.GET_ARTWORK_LIST,
    roomID: roomDetail.roomID,
  }),
  { getArtworkList, changeRoomID, cleanRoomInfo },
)(RoomDetailContainer);
