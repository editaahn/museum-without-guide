import { createAction, handleActions } from 'redux-actions';
//import * as api from '../lib/api';
import axios from 'axios';


const CHANGE_MUSEUM_ID = 'museumDetail/CHANGE_MUSEUM_ID';
const GET_MUSEUM_INFO = 'museumDetail/GET_MUSEUM_INFO';
const GET_MUSEUM_INFO_SUCCESS = 'museumDetail/GET_MUSEUM_INFO_SUCCESS';
const GET_MUSEUM_INFO_FAILURE = 'museumDetail/GET_MUSEUM_INFO_FAILURE';
const CHANGE_FLOOR_INFO = 'museumDetail/CHANGE_FLOOR_INFO';


export const changeMuseumID = createAction(
  CHANGE_MUSEUM_ID,
  (museum_id) => museum_id,
);

export const changeFloorInfo = createAction(
  CHANGE_FLOOR_INFO,
  (floor_num) => floor_num,
);

export const getMuseumInfo = museum_id => async dispatch => {
  dispatch({type: GET_MUSEUM_INFO});
  try {
    // const res = await api.fetchMuseum(museum_id);
    const res = await axios.get(`/museum/${museum_id}`);
    dispatch({
      type: GET_MUSEUM_INFO_SUCCESS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: GET_MUSEUM_INFO_FAILURE,
      payload: e,
      error: true
    });
    throw e;
  }
}


const initialState = {
  loading: {
    GET_MUSEUM_INFO: false,
    GET_FLOOR_INFO: false,
  },
  museumID: null,
  museumInfo: null,
  floorInfo: {
    floor_num: 1,
  },
};


const museumDetail = handleActions(
  {
    [GET_MUSEUM_INFO]: state => ({
      ...state,
      loading: {
        GET_MUSEUM_INFO: true
      }
    }),
    [GET_MUSEUM_INFO_SUCCESS]: (state, action) => ({
      ...state,
      museumInfo: action.payload,
      floorInfo: action.payload.floors.find(floor => floor.floor_num === state.floorInfo.floor_num),
      loading: {
        GET_MUSEUM_INFO: false
      },
    }),
    [GET_MUSEUM_INFO_FAILURE]: (state) => ({
      ...state,
      loading: {
        GET_MUSEUM_INFO: false
      }
    }),
    [CHANGE_MUSEUM_ID]: (state, action) => ({
      ...state,
      museumID: action.payload,
    }),
    [CHANGE_FLOOR_INFO]: (state, { payload: floor_num }) => ({
      ...state,
      floorInfo: state.museumInfo.floors.find(floor => floor.floor_num === floor_num),
    }),
    
  },
  initialState,
);

export default museumDetail;
