import React from 'react';
import RoomMap from './RoomMap';

const Floor = ({ floorMapUrl, rooms, changeRoomID }) => {
  return (
    <div className="museum_detail__main__floor">
      <img
        src={floorMapUrl}
        useMap="#floor-map"
        alt=""
        className="museum_detail__main__floor__img"
      />
      <map name="floor-map">
        <RoomMap rooms={rooms} changeRoomID={changeRoomID} />
      </map>
    </div>
  );
};

export default Floor;
