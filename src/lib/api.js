import axios from 'axios';

export const fetchMuseum = (museumID) => {
  axios.get(`/museum/${museumID}`)
};

export const fetchRooms = (floorID) => {
  axios.get(`/floor/${floorID}`)
}