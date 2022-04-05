import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Joi from 'joi';

// import axios from 'axios';

// Components
// import { updateSeasonChange, updateRoundChange } from './pages/containers/Matches';

// Bootstrap Components
// import Navbar from './components/Navbar';

// import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import MenuPanel from './components/layout/MenuPanel';
import Matches from './pages/containers/Matches';
import Ladder from './pages/containers/Ladder'
import { fetchMatchData } from './services/squiggleMatchData';


function App() {

  // Set State
  const [year, setYear] = useState(2021);
  const [round, setRound] = useState(null);
  const [team, setTeam] = useState("Adelaide");

  const [matchData, setMatchData] = useState([]);
  const [error, setErrors] = useState(null);

  const schema = Joi.object({
    team: Joi.string().valid(
      'Adelaide',
      'Brisbane',
      'Carlton',
      'Collingwood',
      'Essendon',
      'Fremantle',
      'Geelong',
      'Gold Coast',
      'GWS',
      'Hawthorn',
      'Melbourne',
      'North Melbourne',
      'Port Adelaide',
      'Richmond',
      'St Kilda',
      'Sydney',
      'West Coast',
      'Western Bulldogs'
    ),
  });


  // Use Effect
  useEffect(() => {
    async function getResults() {
      try {
        const response = await fetchMatchData(year, round);
        setMatchData(response.data.games);
        console.log(response.data.games);
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

  const searchTeamChange = (e) => {
    console.log(e.target.value);
    let result = schema.validate({ team: e.target.value });
    if (result.error) {
      setErrors(result.error.details[0].message);
    } else {
      setErrors(null);
    }
    console.log(e.target.value);
    setTeam(e.target.value);
    console.log(team);
    handleFilterTeam(team);
  }

  const handleResetSearch = () => {
    setYear(2021);
    setRound(null);
    setTeam('Adelaide');
  }

  const handleFilterTeam = (team) => {
    console.log(matchData);
    console.log(team);
    const updateResults = matchData.filter(m => m.hteam === team || m.ateam === team);
    console.log(updateResults);
    setMatchData(updateResults);
  }

  return (
    <Container className="App">

      <MenuPanel refreshSeasonData={updateSeasonChange} refreshTeamData={searchTeamChange} refreshRoundData={updateRoundChange} year={year} team={team} round={round} error={error} resetButton={handleResetSearch} />


      <Routes>
        <Route path="/" element={<Matches matchData={matchData} year={year} round={round} team={team} />}></Route>
        <Route path="ladder" element={<Ladder />}></Route>
      </Routes>


      {/* <Navbar year={year} round={round} refreshSeasonData={updateSeasonChange} refreshRoundData={updateRoundChange} /> */}

      {/* <div id="ladder">
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
      </div> */}

    </Container >
  );
}

export default App;
