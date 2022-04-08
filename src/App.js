// Import Core React Modules, Hooks
import React, { useEffect, useState } from 'react';

// Import React Router DOM & Joi Validation
import { Route, Routes } from 'react-router-dom';
import Joi from 'joi';

// Import Routing Pages
import About from './pages/containers/About';
import Contact from './pages/containers/Contact';
import Ladder from './pages/containers/Ladder';
import Container from 'react-bootstrap/Container';
import MenuPanel from './components/layout/MenuPanel';
import Matches from './pages/containers/Matches';
import { fetchMatchData } from './services/squiggleMatchData';
import PageNotFound from './pages/containers/PageNotFound';

// Import App level styling
import './App.css';

function App() {

  // Define variables and set their initial state
  const [year, setYear] = useState(2021); // Store season value
  const [round, setRound] = useState(null); // Store round value
  const [team, setTeam] = useState("Adelaide"); // Store team value

  const [savedMatchData, setSavedMatchData] = useState([]); // Save match data when filtering results
  const [matchData, setMatchData] = useState([]); // Store returned API match data 
  const [error, setErrors] = useState(null); // Store returned error messaging

  // Define acceptable strings for text input Joi validation
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


  // useEffect Hook applied for updating API results dynamically - matchData
  // Makes new API call each time state of 'year' & 'round' changes
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

  // Updates state if season value changes
  const updateSeasonChange = (e) => {
    console.log(e.target.value);
    setYear(e.target.value);
  }

  // Updates state if round value changes
  const updateRoundChange = (e) => {
    console.log(e.target.value);
    setRound(e.target.value);
  }

  // Performs validation of user team input against approved list
  // Returns result based via Joi Schema
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

  // Resets values on Reset button click
  const handleResetSearch = () => {
    setYear(2021);
    setRound(null);
    setTeam('Adelaide');
  }

  // Compare team input with API results to filter & render team specific match results
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
      return homeTeam === team || awayTeam === team;
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
