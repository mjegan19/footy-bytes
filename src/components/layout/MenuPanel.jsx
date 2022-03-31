import React from 'react';
import Navbar from '../utilities/Navbar';
import SearchBox from '../utilities/SearchBox';



const MenuPanel = (props) => {

  const { refreshSeasonData, refreshTeamData, refreshRoundData, year, team, round, error } = props;

  return (
    <header id="menu-panel">
      MenuPanel
      <h1>Footy<br />Bytes</h1>
      <Navbar />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem libero totam corporis laudantium id facilis veritatis aliquid assumenda impedit quia quos eum, est omnis?</p>
      <SearchBox refreshSeasonData={refreshSeasonData} refreshTeamData={refreshTeamData} refreshRoundData={refreshRoundData} year={year} team={team} round={round} error={error} />

    </header>
  )
}

export default MenuPanel;