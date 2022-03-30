// Import API Service
import axios from 'axios';
import config from '../config.json';

export function fetchMatchData(year, round) {
  return axios.get(`${config.squiggleAPIRootURL}/?q=games&year=${year}&round=${round}`);
}