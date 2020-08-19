import React from 'react';

const FloorList = ({ floorInfo, floorClickEvt, floors }) => {
  return (
    <ul className="ul--row">
      {floors.map((floor, i) => (
        <li
          key={i}
          data-key={floor.floor_id}
          className={`floorNav${i === floorInfo.floor_num-1 ? ' li--active' : ' li'}`}
          onClick={floorClickEvt}
        >
          {floor.floor_num}층
        </li>
      ))}
    </ul>
  );
};

export default FloorList;
