import React from 'react';
import Navbar from '../utilities/Navbar';
import SearchBox from '../utilities/SearchBox';
import Footer from '../utilities/Footer';



const MenuPanel = (props) => {

  const { refreshSeasonData, refreshTeamData, refreshRoundData, year, team, round, error, resetButton } = props;

  return (
    <header id="menu-panel">
      <div id="bg-filter">
        <h1>Footy<br />Bytes</h1>
        <Navbar />
        <p>Welcome to Footy Bytes!<br />Here you'll find all the match results for games played from 2000-2021.</p>
        <p>To get started, select a year and a round.  You can even filter results by team!</p>
        <p>View the ladder for each round by clicking the link in each results card.</p>
        <SearchBox refreshSeasonData={refreshSeasonData} refreshTeamData={refreshTeamData} refreshRoundData={refreshRoundData} year={year} team={team} round={round} error={error} resetButton={resetButton} />
        <Footer />
      </div>
    </header>
  )
}

export default MenuPanel;