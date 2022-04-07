import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Joi from 'joi';

// Import Routing Pages
import About from './pages/containers/About';
import Contact from './pages/containers/Contact';
import Ladder from './pages/containers/Ladder';

// Bootstrap Components
// import Navbar from './components/Navbar';

// import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import MenuPanel from './components/layout/MenuPanel';
import Matches from './pages/containers/Matches';
import { fetchMatchData } from './services/squiggleMatchData';
import PageNotFound from './pages/containers/PageNotFound';


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
      'Brisbane Lions',
      'Carlton',
      'Collingwood',
      'Essendon',
      'Fremantle',
      'Geelong',
      'Gold Coast',
      'Greater Western Sydney',
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
        const matchResponse = await fetchMatchData(year, round);
        setMatchData(matchResponse.data.games);
        console.log(matchResponse.data.games);
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
    handleFilterTeam(e.target.value);
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
        <Route path="/" element={<Matches matchData={matchData} year={year} round={round} team={team} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="ladder/:year/:round" element={<Ladder />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
      </Routes>

    </Container >
  );
}

export default App;
