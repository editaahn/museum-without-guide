import React, { useCallback } from 'react';
import FloorList from './FloorList';
import Floor from './Floor';
import '../../style/common.scss';
import Header from '../Common/Header.js';

const MuseumDetailPage = ({
  museumInfo,
  loadingMuseumInfo,
  floorInfo,
  changeFloorInfo,
  changeRoomID,
}) => {
  const floorClickEvt = useCallback(
    (e) => {
      changeFloorInfo(e.target.getAttribute('data-key') * 1);
      document
        .querySelectorAll('li.floorNav')
        .forEach((v) => v.classList.remove('li--active'));
      e.target.classList.toggle('li--active');
    },
    [changeFloorInfo],
  );

  return (
    <div className="wrapper">
      {(loadingMuseumInfo || !museumInfo) && (
        <header>
          <h1>로딩중</h1>
        </header>
      )}
      {!loadingMuseumInfo && museumInfo && (
        <Header
          title={
            <strong>
              {museumInfo['museum_name']}, {museumInfo.city}
            </strong>
          }
        />
      )}
      <main>
        {loadingMuseumInfo && <p>로딩중</p>}
        {!loadingMuseumInfo && museumInfo && floorInfo && (
          <React.Fragment>
            <FloorList
              floors={museumInfo.floors}
              floorInfo={floorInfo}
              floorClickEvt={floorClickEvt}
            />
            <Floor
              floorMapUrl={floorInfo.floor_map_img}
              rooms={floorInfo.rooms}
              changeRoomID={changeRoomID}
            />
          </React.Fragment>
        )}
      </main>
    </div>
  );
};

export default MuseumDetailPage;
