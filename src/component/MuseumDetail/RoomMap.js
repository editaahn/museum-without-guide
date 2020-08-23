import React from 'react';
import { Link } from 'react-router-dom';

const RoomMap = ({ rooms, changeRoomID }) => {
  const roomClickEvt = e => {
    changeRoomID(e.target.getAttribute('data-key')*1);
  };

  return rooms.map((room) => (
    <Link key={room.room_id} onClick={roomClickEvt} to={`/room-detail/${room.room_id}`} >
      <area
        className="museum_detail__main__floor__area"
        shape="rect"
        alt=""
        title={`roomNo${room.room_id}`}
        coords={room.coordinate}
        data-key={room.room_id}
      />
    </Link>
  ));
};

export default RoomMap;
