import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "./style.css"

import Portrait from "./elements/Portrait"
import Links from "./elements/Links"
import About from "./elements/About"
// eslint-disable-next-line
import DarkBtn from "./buttons/BtnDark"
import ScrollTopBtn from "./buttons/ScrollTopBtn"
import Sidebar from "./Sidebar"

function App() {
  return (
    <div id="appBody">

      <div id="sidebar">
        <Sidebar />
      </div>

      <div id="main">

        <div id="title">
          <h1>Andrè's CV Website</h1> <hr />
        </div>

        <div id="portrait">
          <Portrait />
        </div>

        <div id="scrollBtn">
          <ScrollTopBtn />
        </div>

        <hr />

        <div id="links">
          <Links />
        </div>

      </div>
    </div>
  );
}

export default App