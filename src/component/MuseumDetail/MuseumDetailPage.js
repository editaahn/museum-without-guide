import React, { useCallback } from 'react';
import FloorList from './FloorList';
import Floor from './Floor';
import PageHeader from '../Common/PageHeader';
import { withRouter } from "react-router-dom";

const MuseumDetailPage = ({
  museumInfo,
  loadingMuseumInfo,
  floorInfo,
  changeFloorInfo,
  changeRoomID,
  history
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
          <h1>화면 로딩중</h1>
        </header>
      )}
      {!loadingMuseumInfo && museumInfo && (
        <PageHeader
          title={
            `${museumInfo['museum_name']}, ${museumInfo.city}`
          }
          history={history}
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

export default withRouter(MuseumDetailPage);
