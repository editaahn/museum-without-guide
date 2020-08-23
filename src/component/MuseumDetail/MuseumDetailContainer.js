import React, { useEffect } from 'react';
import MuseumDetailPage from './MuseumDetailPage';
import { connect } from 'react-redux';
import {
  changeMuseumID,
  getMuseumInfo,
  changeFloorInfo,
  clearMuseumInfo
} from '../../modules/museumDetail';
import { changeRoomID } from '../../modules/roomDetail';

const MuseumDetailContainer = ({
  museumID,
  museumInfo,
  loadingMuseumInfo,
  floorInfo,
  getMuseumInfo,
  changeFloorInfo,
  changeMuseumID,
  changeRoomID,
  clearMuseumInfo,
  match,
}) => {
  const { museumIDparam } = match.params;

  useEffect(() => {
    (museumID && !loadingMuseumInfo) ? getMuseumInfo(museumID) : changeMuseumID(museumIDparam * 1);
  }, [ museumID ]);

  useEffect(() => {
    return () => clearMuseumInfo()
  }, []);
  
  return (
    <MuseumDetailPage
      museumInfo={museumInfo}
      loadingMuseumInfo={loadingMuseumInfo}
      floorInfo={floorInfo}
      changeFloorInfo={changeFloorInfo}
      changeRoomID={changeRoomID}
      clearMuseumInfo={clearMuseumInfo}
    />
  );
};

export default connect(
  ({ museumDetail, roomDetail }) => ({
    museumID: museumDetail.museumID,
    loadingMuseumInfo: museumDetail.loading.GET_MUSEUM_INFO,
    museumInfo: museumDetail.museumInfo,
    floorInfo: museumDetail.floorInfo,
    roomID: roomDetail.roomID
  }), //리듀서를 통해 변경할 state
  { getMuseumInfo, changeFloorInfo, changeMuseumID, changeRoomID, clearMuseumInfo }, // 액션생성함수
)(MuseumDetailContainer);
