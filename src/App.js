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
  const [round, setRound] = useState(1);
  const [matchData, setMatchData] = useState([]);
  const [team, setTeam] = useState('Adelaide');
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
    setTeam(e.target.value);
  }


  // const [ladderPositions, setLadderPositions] = useState([]);

  // async function fetchFootyData() {
  //   const ladderResponse = await axios.get(`https://api.squiggle.com.au/?q=standings&year=${year}&round=${round}`);
  //   console.log(ladderResponse.data.standings);
  //   setLadderPositions(ladderResponse.data.standings);
  // }



  return (
    <Container className="App">

      <MenuPanel refreshSeasonData={updateSeasonChange} refreshTeamData={searchTeamChange} refreshRoundData={updateRoundChange} year={year} team={team} round={round} error={error} />


      <Routes>
        <Route path="/" element={<Matches matchData={matchData} />}></Route>
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
