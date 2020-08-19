import { handleActions } from 'redux-actions';
import axios from 'axios';

const GET_MUSEUM_LIST = 'museumList/GET_MUSEUM_LIST';
const GET_MUSEUM_LIST_SUCCESS = 'museumList/GET_MUSEUM_LIST_SUCCESS';
const GET_MUSEUM_LIST_FAILURE = 'museumList/GET_MUSEUM_LIST_FAILURE';

export const getMuseumList = () => async dispatch => {
  dispatch({type: GET_MUSEUM_LIST});
  try {
    const res = await axios.get('/museumlist');
    dispatch({
      type: GET_MUSEUM_LIST_SUCCESS,
      payload: res.data
    });
  } catch(e) {
    dispatch({
      type: GET_MUSEUM_LIST_FAILURE,
      payload: e,
      error: true
    });
  }
}

const initialState = {
  loading: {
    GET_MUSEUM_LIST: false,
  },
  wholeMuseumList: null
}

const museumList = handleActions(
  {
    [GET_MUSEUM_LIST]: state => ({
      ...state,
      loading: {
        GET_MUSEUM_LIST: true,
      }
    }),
    [GET_MUSEUM_LIST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        GET_MUSEUM_LIST: false,
      },
      wholeMuseumList: action.payload,
    }),
    [GET_MUSEUM_LIST_FAILURE]: state => ({
      ...state,
      loading: {
        GET_MUSEUM_LIST: false,
      }
    })
  }, initialState
)

export default museumList;