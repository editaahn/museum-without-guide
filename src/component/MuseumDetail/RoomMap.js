import React from 'react';
import { Link } from 'react-router-dom';

const RoomMap = ({ rooms, changeRoomID }) => {
  return rooms.map((room) => {
    const coordsArray = room.coordinate.split(',');
    return (
      <Link
        className="museum_detail__main__floor__link"
        key={room.room_id}
        to={`/room-detail/${room.room_id}`}
        style={{
          top: coordsArray[1]+'px',
          left: coordsArray[0]+'px',
          width: coordsArray[2] - coordsArray[0],
          height: coordsArray[3] - coordsArray[1],
        }}
        alt={room.room_num+'번 방'}
      >
      </Link>
    );
  });
};

export default RoomMap;
