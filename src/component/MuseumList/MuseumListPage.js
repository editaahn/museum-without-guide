import React from 'react';
import PageHeader from '../Common/PageHeader';
import { Link } from 'react-router-dom';

const MuseumListPage = ({
  wholeMuseumList,
  loadingMuseumList,
  changeMuseumID
}) => {

  const museumClickEvt = e => {
    changeMuseumID(e.target.getAttribute('data-key')*1);
  };

  return (
    <div className="wrapper">
      {!loadingMuseumList && wholeMuseumList && (
        <PageHeader title={'미술관 선택하기'} />
      )}
      <ul className="ul--col">
        {!loadingMuseumList &&
          wholeMuseumList &&
          wholeMuseumList.map((museum, i) => (
            <li key={i} className="li" onClick={museumClickEvt}>
              <Link
                to={`/museum-detail/${museum.museum_id}`}
                data-key={museum.museum_id}
              >
                {museum.museum_name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MuseumListPage;
