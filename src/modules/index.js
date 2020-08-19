import { combineReducers } from 'redux';
import museumDetail from './museumDetail';
import museumList from './museumList';
import roomDetail from './roomDetail'

const rootReducer = combineReducers({
  museumDetail,
  museumList,
  roomDetail
})

export default rootReducer;