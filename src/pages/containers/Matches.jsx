import React, { useEffect, useState } from 'react';

// Service Call - API Details
import { fetchMatchData } from '../../services/squiggleMatchData';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Matches = () => {

  // Set State
  const [year, setYear] = useState(2021);
  const [round, setRound] = useState(1);
  const [matchData, setMatchData] = useState([]);


  // Use Effect
  useEffect(() => {
    async function getResults() {
      try {
        const response = await fetchMatchData(year, round);
        setMatchData(response.data.games);
      }
      catch (error) {
        console.log(error);
      }
    }
    getResults();
  }, [year, round]);

  const updateSeasonChange = (e) => {
    console.log(e.target.value);
    setYear(e.target.value);
  }

  const updateRoundChange = (e) => {
    console.log(e.target.value);
    setRound(e.target.value);
  }

  // Function Splits Date & Time String Apart, Returns As Seperate Variables
  function formatDate(date) {
    let text = date;
    const myArray = text.split(" ");
    const myDate = myArray[0].split("-");

    return `${myDate[2]}/${myDate[1]}/${myDate[0]}`;
  }

  return (
    <div id="game-result-card">
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