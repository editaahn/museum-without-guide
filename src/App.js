import React from "react";
import { Route } from 'react-router-dom';
//import MuseumDetailPage from "./pages/MuseumDetailPage.js";
//import { Route, Switch } from "react-router-dom";
import MuseumListContainer from "./component/MuseumList/MuseumListContainer";
import MuseumDetailContainer from "./component/MuseumDetail/MuseumDetailContainer";
import RoomDetailContainer from "./component/RoomDetail/RoomDetailContainer";
import './style/common.scss';

const App = () => {
  return (
    <div>
      <Route path="/" component={MuseumListContainer} exact={true} />
      <Route path="/museum-detail/:museumIDparam" component={MuseumDetailContainer}/>
      <Route path="/room-detail/:roomIDparam" component={RoomDetailContainer}/>
    </div>
  );
};

export default App;
