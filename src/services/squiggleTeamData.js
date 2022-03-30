// Import API Service
import axios from 'axios';
import config from '../config.json';

export function fetchTeamData(teamID) {
  return axios.get(`${config.squiggleAPIRootURL}/?q=teams&team=${teamID}`);
}