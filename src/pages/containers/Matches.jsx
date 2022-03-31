import React from 'react';

// Service Call - API Details


import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

    return `${myDate[2]}/${myDate[1]}/${myDate[0]}`;
  }

  return (
    <div id="results-panel">

      <Row xs={1} md={2} className="mt-2 mb-4 g-4">
        {matchData.map(match => (
          <Col key={match.id}>
            <Card>
              <Card.Body>
                <Card.Title><strong>{formatDate(match.date)}</strong></Card.Title>
                <Card.Text className="mt-4">
                  <p><strong>{match.hteam}</strong></p>
                  <p><strong>{match.hgoals}.{match.hbehinds}.{match.hscore}</strong></p>
                  <p><strong>Vs</strong></p>
                  <p><strong>{match.ateam}</strong></p>
                  <p><strong>{match.agoals}.{match.abehinds}.{match.ascore}</strong></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Matches;