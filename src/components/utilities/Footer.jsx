import React, { useState, useEffect } from 'react'

const Footer = () => {

  const [styleLight, setStyleLight] = useState('/style-light.css');
  const [styleDark, setStyleDark] = useState('/style-dark.css');
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    let darkThemeSetting = localStorage.getItem("darkTheme");
    if (darkThemeSetting === "true") {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);


  const handleLight = async (e) => {
    setDarkTheme(false);
    localStorage.setItem("darkTheme", "false");
  }

  const handleDark = async (e) => {
    setDarkTheme(true);
    localStorage.setItem("darkTheme", "true");
  }

  return (
    <footer>
      <link rel="stylesheet" type="text/css" href={!darkTheme ? styleLight : styleDark} />
      Choose a theme: <button className="light" onClick={handleLight}>Light</button><button onClick={handleDark}>Dark</button><br />
      Copyright &#169; 2022 <span>&#60;mixel&#62;</span> Web Studios
    </footer>
  )
}

export default Footer