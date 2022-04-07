import React from 'react';
import { Link } from 'react-router-dom';

// Service Call - API Details
import { logoWebAddress } from '../../services/squiggleLogoData';


import { FaExternalLinkAlt } from 'react-icons/fa';

import Joi from 'joi';




const Matches = (props) => {

  const { matchData, year, round } = props;

  const schema = Joi.object({
    teamSearch: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
  });

  function handlePageHeader() {
    let dynamicHeading = "";

    if (round == null) {
      dynamicHeading = "Season " + year + " Match Results";
    } else if (round != null) {
      dynamicHeading = "Season " + year + " - " + "Round " + round + " Match Results";
    }

    return dynamicHeading;
  }


  // Function Splits Date & Time String Apart, Returns Re-Formatted Date & Time As Array
  function formatDate(date) {
    let text = date;
    const myArray = text.split(" ");
    const myDate = myArray[0].split("-");
    const myTime = myArray[1].split(":");

    const monthString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let hours = null;
    let timeNotation = "";
    const timePeriods = ["AM", "PM"];

    const month = monthString[(myDate[1] - 1)];

    if (myTime[0] >= 12) {
      hours = myTime[0] - 12;
      timeNotation = timePeriods[1];
    } else if (myTime[0] < 12) {
      hours = myTime[0];
      timeNotation = timePeriods[0];
    }

    const repackagedDate = [(myDate[2] + " " + month + " " + myDate[0]), (hours + ":" + myTime[1]) + " " + timeNotation];

    return repackagedDate;
  }


  function handleMatchResult(homeTeamScore, awayTeamScore) {
    if (homeTeamScore > awayTeamScore) {
      return "defeated"
    } else {
      return "defeated by"
    }
  }

  return (
    <div id="results-panel">

      <h2>{handlePageHeader()}</h2>

      {matchData.map(match => (
        <div className="match-result" key={match.id}>
          <div className="card">
            <div className="card-head">{formatDate(match.date)[0]}</div>
            <div className="card-top">
              <div className="team-details home">
                <img src={logoWebAddress(match.hteamid)} alt="" />
                <p className="team-name">{match.hteam}</p>
                <p><strong>{match.hgoals}.{match.hbehinds}.{match.hscore}</strong></p>
              </div>
              <div className="inner">
                <p>{handleMatchResult(match.hscore, match.ascore)}</p>
                <p className="ladder-link"><Link to={`ladder/${match.year}/${match.round}`}><FaExternalLinkAlt /> VIEW LADDER</Link></p>
              </div>
              <div className="team-details away">
                <img src={logoWebAddress(match.ateamid)} alt="" />
                <p className="team-name"><strong>{match.ateam}</strong></p>
                <p><strong>{match.agoals}.{match.abehinds}.{match.ascore}</strong></p>
              </div>
            </div>
            <div className="game-details">
              {match.venue}<br />
              {formatDate(match.date)[1]}
            </div>

          </div>
        </div>
      ))}
    </div >
  )
}

export default Matches;