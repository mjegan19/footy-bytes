// Import API Service
import axios from 'axios';
import config from '../config.json';

export function fetchLadderData(year, round) {
  return axios.get(`${config.squiggleAPIRootURL}/?q=standings&year=${year}&round=${round}`);
}