import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

const CHANGE_ROOM_ID = 'roomDetail/CHANGE_ROOM_ID';
const CLEAN_ROOM_INFO = 'roomDetail/CLEAN_ROOM_INFO';
const GET_ARTWORK_LIST = 'roomDetail/GET_ARTWORK_LIST';
const GET_ARTWORK_LIST_SUCCESS = 'roomDetail/GET_ARTWORK_LIST_SUCCESS';
const GET_ARTWORK_LIST_FAILURE = 'roomDetail/GET_ARTWORK_LIST_FAILURE';

export const changeRoomID = createAction(CHANGE_ROOM_ID, (room_id) => room_id);
export const cleanRoomInfo = createAction(CLEAN_ROOM_INFO);
export const getArtworkList = (room_id) => async (dispatch) => {
  dispatch({ type: GET_ARTWORK_LIST });
  try {
    const res = await axios.get(`/room/${room_id}`);
    dispatch({
      type: GET_ARTWORK_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ARTWORK_LIST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

const initialState = {
  loading: {
    GET_ARTWORK_LIST: false,
  },
  roomID: null,
  artworkList: null,
};

const roomDetail = handleActions(
  {
    [CHANGE_ROOM_ID]: (state, { payload: room_id }) => ({
      ...state,
      roomID: room_id,
    }),
    [GET_ARTWORK_LIST]: (state) => ({
      ...state,
      loading: {
        GET_ARTWORK_LIST: true,
      },
    }),
    [GET_ARTWORK_LIST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        GET_ARTWORK_LIST: false,
      },
      artworks: action.payload,
    }),
    [GET_ARTWORK_LIST_FAILURE]: (state) => ({
      ...state,
      loading: {
        GET_ARTWORK_LIST: false,
      },
    }),
    [CLEAN_ROOM_INFO]: () => initialState,
  },
  initialState,
);

export default roomDetail;
