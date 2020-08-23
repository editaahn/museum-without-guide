import React from 'react';
import MuseumListPage from './MuseumListPage';
import { connect } from 'react-redux';
import { getMuseumList } from '../../modules/museumList';
import { changeMuseumID } from '../../modules/museumDetail';

const { useEffect } = React;
const MuseumListContainer = ({
  wholeMuseumList,
  getMuseumList,
  loadingMuseumList,
  changeMuseumID,
}) => {
  useEffect(() => { getMuseumList()}, [getMuseumList]);

  return (
    <MuseumListPage
      wholeMuseumList={wholeMuseumList}
      loadingMuseumList={loadingMuseumList}
      changeMuseumID={changeMuseumID}
    />
  );
};

export default connect(
  ({ museumList, museumDetail }) => ({
    wholeMuseumList: museumList.wholeMuseumList,
    loadingMuseumList: museumList.loading.GET_MUSEUM_LIST,
    museumID: museumDetail.museumID,
  }),
  { getMuseumList, changeMuseumID },
)(MuseumListContainer);