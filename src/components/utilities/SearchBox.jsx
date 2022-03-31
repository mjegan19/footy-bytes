import React from 'react';

import Form from 'react-bootstrap/Form';

function SearchBox(props) {

  const { refreshSeasonData, refreshTeamData, refreshRoundData, year, team, round, error } = props;

  return (

    <section id="search-box">
      <Form.Select name="year" id="year" value={year} onChange={refreshSeasonData}>
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

      {/* <Form.Label htmlFor="inputTeamSearch"></Form.Label> */}
      <Form.Control type="search" id="inputTeamSearch" value={team} onChange={refreshTeamData} placeholder="Adelaide" />
      <p className='text-danger'>{error && error}</p>

      <Form.Text id="teamSearchHelpText">
        To return all season match results for a<br />particular team, enter a valid team name above.
      </Form.Text>

      <Form.Select name="round" id="round" value={round} onChange={refreshRoundData}>
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
      </Form.Select>
    </section>
  )
}

export default SearchBox;