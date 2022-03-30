import './App.css';

import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// Components
// import { updateSeasonChange, updateRoundChange } from './pages/containers/Matches';


// Bootstrap Components
// import Navbar from './components/Navbar';

// import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import MenuPanel from './components/layout/MenuPanel';
import ResultsPanel from './components/layout/ResultsPanel';


function App() {

  // const [ladderPositions, setLadderPositions] = useState([]);

  // async function fetchFootyData() {
  //   const ladderResponse = await axios.get(`https://api.squiggle.com.au/?q=standings&year=${year}&round=${round}`);
  //   console.log(ladderResponse.data.standings);
  //   setLadderPositions(ladderResponse.data.standings);
  // }



  return (
    <Container className="App">
      <MenuPanel />
      <ResultsPanel />

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


    </Container>
  );
}

export default App;
