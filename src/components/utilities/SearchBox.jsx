// Import Core React Modules
import React from 'react';

// Import Form Component from Bootstrap
import Form from 'react-bootstrap/Form';

function SearchBox(props) {

  // Allow data collected to be passed to parent components
  const { refreshSeasonData, refreshTeamData, refreshRoundData, year, team, round, error, resetButton } = props;

  return (

    <section id="search-box">
      <Form.Select name="year" id="year" className="input-field" value={year} onChange={refreshSeasonData}>
        <option value={2024}>2024</option>
        <option value={2023}>2023</option>
        <option value={2022}>2022</option>
        <option value={2021}>2021</option>
        <option value={2020}>2020</option>
        <option value={2019}>2019</option>
        <option value={2018}>2018</option>
        <option value={2017}>2017</option>
        <option value={2016}>2016</option>
        <option value={2015}>2015</option>
        <option value={2014}>2014</option>
        <option value={2013}>2013</option>
        <option value={2012}>2012</option>
        <option value={2011}>2011</option>
        <option value={2010}>2010</option>
        <option value={2009}>2009</option>
        <option value={2008}>2008</option>
        <option value={2007}>2007</option>
        <option value={2006}>2006</option>
        <option value={2005}>2005</option>
        <option value={2004}>2004</option>
        <option value={2003}>2003</option>
        <option value={2002}>2002</option>
        <option value={2001}>2001</option>
        <option value={2000}>2000</option>
      </Form.Select>

      <Form.Control type="search" id="inputTeamSearch" className="input-field" value={team} onChange={refreshTeamData} />
      <p className='text-danger'>{error && error}</p>

      <Form.Text id="teamSearchHelpText">
        To return all season match results for a<br />particular team, enter a valid team name above.
      </Form.Text>

      <Form.Select name="round" id="round" className="input-field" value={round} onChange={refreshRoundData}>
        <option value={null} selected disabled>Filter Results By Round</option>
        <option value={1}>Round 1</option>
        <option value={2}>Round 2</option>
        <option value={3}>Round 3</option>
        <option value={4}>Round 4</option>
        <option value={5}>Round 5</option>
        <option value={6}>Round 6</option>
        <option value={7}>Round 7</option>
        <option value={8}>Round 8</option>
        <option value={9}>Round 9</option>
        <option value={10}>Round 10</option>
        <option value={11}>Round 11</option>
        <option value={12}>Round 12</option>
        <option value={13}>Round 13</option>
        <option value={14}>Round 14</option>
        <option value={15}>Round 15</option>
        <option value={16}>Round 16</option>
        <option value={17}>Round 17</option>
        <option value={18}>Round 18</option>
        <option value={19}>Round 19</option>
        <option value={20}>Round 20</option>
        <option value={21}>Round 21</option>
        <option value={22}>Round 22</option>
        <option value={23}>Round 23</option>
        <option value={24}>Round 24</option>
      </Form.Select>

      <button onClick={resetButton}>Reset Search</button>
    </section>
  )
}

export default SearchBox;