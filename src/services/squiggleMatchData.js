// Import API Service
import axios from 'axios';
import config from '../config.json';

export function fetchMatchData(year, round) {
  let queryString = "";

  if (round == null) {
    queryString = `?q=games&year=${year}`;
  } else {
    queryString = `?q=games&year=${year}&round=${round}`;
  }

  return axios.get(`${config.squiggleAPIRootURL}` + queryString);
}