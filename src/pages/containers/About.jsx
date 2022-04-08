// Import Core React Modules
import React from 'react';

const About = () => {
  return (
    <div id="results-panel">
      <h2>About Footy Bytes</h2>
      <div className="about-body">
        <p>We're footy mad!  As a part of learning React and jsx, our class was challenged with an assignment to connect to an API.  Thus, Footy Bytes was born.</p>
        <p>Footy Bytes connects to the <a href="https://api.squiggle.com.au/" rel="noreferrer" target="_blank">Squiggle API</a> to pull out game results between 2000 and 2021, and dynamically display it on the site.</p>
        <p>The use of AFL logos are sourced from the Squiggle API and remain the property of the clubs and the AFL.</p>
        <p>The use of the grass background image is sourced from <a href="https://unsplash.com/" rel="noreferrer" target="_blank">Unsplash</a>, attributed to <a href="https://unsplash.com/@jakenackos" rel="noreferrer" target="_blank">Jake Nackos</a>.</p>
      </div>
    </div>
  )
}

export default About;