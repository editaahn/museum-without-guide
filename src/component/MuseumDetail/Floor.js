import React from 'react';
import RoomMap from './RoomMap';

const Floor = ({ floorMapUrl, rooms, changeRoomID }) => {
  return (
    <div className="museum_detail__main__floor">
      <img
        src={floorMapUrl}
        // useMap="#floor-map"
        alt=""
        className="museum_detail__main__floor__img"
      />
      <div className="museum_detail__main__floor___map">
        <RoomMap rooms={rooms} changeRoomID={changeRoomID} />
      </div>
    </div>
  );
};

export default Floor;
