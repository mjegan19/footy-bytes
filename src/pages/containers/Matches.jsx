import React from 'react';

// Service Call - API Details
import { logoWebAddress } from '../../services/squiggleLogoData';


import Joi from 'joi';


const Matches = (props) => {

  const { matchData } = props;

  const schema = Joi.object({
    teamSearch: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
  });

  // Function Splits Date & Time String Apart, Returns As Seperate Variables
  function formatDate(date) {
    let text = date;
    const myArray = text.split(" ");
    const myDate = myArray[0].split("-");
    const month = myDate[1];

    if (month == 1) {
      let dateString = myDate[2] + " January " + myDate[0];
      return dateString;
    } else if (month == 2) {
      let dateString = myDate[2] + " February " + myDate[0];
      return dateString;
    } else if (month == 3) {
      let dateString = myDate[2] + " March " + myDate[0];
      return dateString;
    } else if (month == 4) {
      let dateString = myDate[2] + " April " + myDate[0];
      return dateString;
    } else if (month == 5) {
      let dateString = myDate[2] + " May " + myDate[0];
      return dateString;
    } else if (month == 6) {
      let dateString = myDate[2] + " June " + myDate[0];
      return dateString;
    } else if (month == 7) {
      let dateString = myDate[2] + " July " + myDate[0];
      return dateString;
    } else if (month == 8) {
      let dateString = myDate[2] + " August " + myDate[0];
      return dateString;
    } else if (month == 9) {
      let dateString = myDate[2] + " September " + myDate[0];
      return dateString;
    } else if (month == 10) {
      let dateString = myDate[2] + " October " + myDate[0];
      return dateString;
    } else if (month == 11) {
      let dateString = myDate[2] + " November " + myDate[0];
      return dateString;
    } else if (month == 12) {
      let dateString = myDate[2] + " December " + myDate[0];
      return dateString;
    }
  }

  return (
    <div id="results-panel">

      {matchData.map(match => (
        <div className="match-result" key={match.id}>
          <div className="card">
            <div className="card-head">{formatDate(match.date)}</div>
            <div className="card-top">
              <div className="team-details home">
                <img src={logoWebAddress(match.hteamid)} alt="" />
                <p><strong>{match.hteam}</strong></p>
                <p><strong>{match.hgoals}.{match.hbehinds}.{match.hscore}</strong></p>
              </div>
              <div className="inner">Vs</div>
              <div className="team-details away">
                <img src={logoWebAddress(match.ateamid)} alt="" />
                <p><strong>{match.ateam}</strong></p>
                <p><strong>{match.agoals}.{match.abehinds}.{match.ascore}</strong></p>
              </div>
            </div>
            <div className="game-details">

            </div>

          </div>
        </div>
      ))}

      {/* <Row xs={1} md={2} className="mt-2 mb-4 g-4">
        {matchData.map(match => (
          <Col key={match.id}>
            <h6 id="date">{formatDate(match.date)}</h6>
            <Card>
              <Card.Body>
                <Card.Title><strong></strong></Card.Title>
                <Card.Text className="mt-4" id="card">
                  <p><img src={logoWebAddress(match.hteamid)} alt="" /></p>
                  <p><strong>{match.hteam}</strong></p>
                  <p><strong>{match.hgoals}.{match.hbehinds}.{match.hscore}</strong></p>
                  <p><strong>Vs</strong></p>
                  <p><strong>{match.agoals}.{match.abehinds}.{match.ascore}</strong></p>
                  <p><strong>{match.ateam}</strong></p>
                  <p><img src={logoWebAddress(match.ateamid)} alt="" /></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}
    </div >
  )
}

export default Matches;