import './App.css';

import React from "react";
import {Link, Outlet} from "react-router-dom";
import {MainContainer} from "./Styled";
import LeftMovNavBar from "./LeftMovNavBar";
import LeftStaticNavBar from "./LeftStaticNavBar";
import Board from "./Board";


function App() {
  return (
              <LeftMovNavBar/>
  );
}

export default App;
