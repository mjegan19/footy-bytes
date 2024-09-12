// Import Core React Modules
import React, { useState, useEffect } from 'react'

const Footer = () => {

  // Define variables for dynamic site styling and set state for default load
  const styleLight = '/style-light.css';
  const styleDark = '/style-dark.css';
  const [darkTheme, setDarkTheme] = useState(false);

  const currentYear = new Date().getFullYear();

  // useEffect Hook applied for updating site styling via the DOM
  useEffect(() => {
    let darkThemeSetting = localStorage.getItem("darkTheme");
    if (darkThemeSetting === "true") {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  // Updates state of Dark Theme to false when 'Light' button clicked
  const handleLight = async (e) => {
    setDarkTheme(false);
    localStorage.setItem("darkTheme", "false");
  }

  // Updates state of Dark Theme to true when 'Dark' button clicked
  const handleDark = async (e) => {
    setDarkTheme(true);
    localStorage.setItem("darkTheme", "true");
  }

  return (
    <footer>
      <link rel="stylesheet" type="text/css" href={!darkTheme ? styleLight : styleDark} />
      Choose a theme: <button className="light" onClick={handleLight}>Light</button><button onClick={handleDark}>Dark</button><br />
      Copyright &#169; {currentYear} <span>&#60;mixel&#62;</span> Web Studios
    </footer>
  )
}

export default Footer;