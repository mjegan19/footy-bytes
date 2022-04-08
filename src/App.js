import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Joi from 'joi';

// Import Routing Pages
import About from './pages/containers/About';
import Contact from './pages/containers/Contact';
import Ladder from './pages/containers/Ladder';

// Bootstrap Components
// import Navbar from './components/Navbar';

import './App.css';

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

  const [savedMatchData, setSavedMatchData] = useState([]);
  const [matchData, setMatchData] = useState([]);
  const [error, setErrors] = useState(null);

  const schema = Joi.object({
    team: Joi.string().valid(
      '',
      'adelaide',
      'brisbane lions',
      'carlton',
      'collingwood',
      'essendon',
      'fremantle',
      'geelong',
      'gold coast',
      'greater western sydney',
      'hawthorn',
      'melbourne',
      'north melbourne',
      'port adelaide',
      'richmond',
      'st kilda',
      'sydney',
      'west coast',
      'western bulldogs'
    ),
  });


  // Use Effect
  useEffect(() => {
    let localData = localStorage.getItem('team')
    if (localData) {
      setTeam(localData);
    }
    async function getResults() {
      try {
        const matchResponse = await fetchMatchData(year, round);
        setMatchData(matchResponse.data.games);
        setSavedMatchData(matchResponse.data.games);
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

  const searchTeamChange = async (e) => {
    let searchTeam = e.target.value;
    searchTeam = searchTeam.toLowerCase();
    let result = schema.validate({ team: searchTeam });
    if (result.error) {
      setErrors(result.error.details[0].message);
    } else {
      localStorage.setItem('team', searchTeam);
      setErrors(null);
      handleFilterTeam(searchTeam);
    }
    setTeam(searchTeam);
  }

  const handleResetSearch = () => {
    setYear(2021);
    setRound(null);
    setTeam('Adelaide');
  }

  const handleFilterTeam = (team) => {
    if (team === '') {
      setMatchData(savedMatchData);
      return
    }
    console.log("TEAM", team);
    const updateResults = savedMatchData.filter(m => {

      let homeTeam = m.hteam
      homeTeam = homeTeam.toLowerCase()
      let awayTeam = m.ateam
      awayTeam = awayTeam.toLowerCase()
      console.log(homeTeam, awayTeam);
      return homeTeam === team || awayTeam === team
    });
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
