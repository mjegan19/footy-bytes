import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Navbar from './components/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';


function App() {

  // Set State
  const [year, setYear] = useState(2021);
  const [round, setRound] = useState(1);
  const [matchData, setMatchData] = useState([]);
  const [ladderPositions, setLadderPositions] = useState([]);

  // Use Effect
  useEffect(() => {
    fetchFootyData();
  }, [year, round]);

  const updateSeasonChange = (e) => {
    console.log(e.target.value);
    setYear(e.target.value);
  }

  const updateRoundChange = (e) => {
    console.log(e.target.value);
    setRound(e.target.value);
  }

  async function fetchFootyData() {
    const roundResponse = await axios.get(`https://api.squiggle.com.au/?q=games&year=${year}&round=${round}`);
    console.log(roundResponse.data.games);
    setMatchData(roundResponse.data.games);

    const ladderResponse = await axios.get(`https://api.squiggle.com.au/?q=standings&year=${year}&round=${round}`);
    console.log(ladderResponse.data.standings);
    setLadderPositions(ladderResponse.data.standings);
  }

  return (
    <Container className="App">
      <Navbar year={year} round={round} refreshSeasonData={updateSeasonChange} refreshRoundData={updateRoundChange} />

      <div id="game-result-card">
        <Row xs={1} md={2} className="mt-2 mb-4 g-4">
          {matchData.map(match => (
            <Col key={match.id}>
              <Card>
                <Card.Body>
                  <Card.Title><strong>{match.date}</strong></Card.Title>
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

      <div id="ladder">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Team</th>
              <th>Pts</th>
              <th>P</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Drawn</th>
              <th>PF</th>
              <th>PA</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {ladderPositions.map(standings => (
              <tr key={standings.rank}>
                <td>{standings.rank}</td>
                <td><strong>{standings.name}</strong></td>
                <td>{standings.pts}</td>
                <td>{standings.played}</td>
                <td>{standings.wins}</td>
                <td>{standings.losses}</td>
                <td>{standings.draws}</td>
                <td>{standings.for}</td>
                <td>{standings.against}</td>
                <td>{standings.percentage}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default App;
