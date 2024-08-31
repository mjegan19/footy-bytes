// Import Core React Modules
import React, { useEffect, useState } from 'react';

// Import useParams to recieve data passed through Address Bar
import { useParams } from 'react-router-dom';

// Import API Service Call Function
import { fetchLadderData } from '../../services/squiggleLadderData';


const Ladder = () => {

  const { year, round } = useParams();

  const [ladderData, setLadderData] = useState(null);

  // useEffect Hook applied for updating API results dynamically - ladderData
  useEffect(() => {
    async function getResults() {
      try {
        const ladderResponse = await fetchLadderData(year, round);
        console.log(ladderResponse.data.standings);
        setLadderData(ladderResponse.data.standings);
      }
      catch (error) {
        console.log(error);
      }
    }
    getResults();
  }, [year, round]);

  // Dynamically Render Page Header
  function handlePageHeader() {
    return "Season " + year + " - " + "Round " + round + " Ladder";
  }

  // Format Percentage Value to 2 decimal points
  function handlePercent(percent) {
    return percent.toFixed(2);
  }

  // Conditional statement to Create 'Top 8' dividing line between teams
  function handleDivider(rank) {
    if (rank === 8) {
      const style = { borderBottom: '3px crimson solid' };
      return style;
    } else {
      const style = { borderBottom: '1px grey solid' };
      return style;
    }
  }

  return (
    <div id="results-panel">
      <h2>{handlePageHeader()}</h2>
      <div id="ladder">
        <table>
          <thead>
            <tr>
              <th>Pos</th>
              <th className="team">Team</th>
              <th>Pts</th>
              <th>Played</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Drawn</th>
              <th>PF</th>
              <th>PA</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {/* Map function to loop over array of results and render on page */}
            {ladderData && ladderData.map(standings => (
              <tr key={standings.rank} style={handleDivider(standings.rank)}>
                <td>{standings.rank}</td>
                <td className="team">{standings.name}</td>
                <td>{standings.pts}</td>
                <td>{standings.played}</td>
                <td>{standings.wins}</td>
                <td>{standings.losses}</td>
                <td>{standings.draws}</td>
                <td>{standings.for}</td>
                <td>{standings.against}</td>
                <td>{handlePercent(standings.percentage)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Ladder;