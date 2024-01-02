import './App.css';

import React from "react";
import {Link, Outlet} from "react-router-dom";
import {MainContainer} from "./Styled";
import LeftMovNavBar from "./LeftMovNavBar";
import LeftStaticNavBar from "./LeftStaticNavBar";
import MainPage from "./MainPage";


function App() {
  return (
      <MainContainer>
        <div style={{display:"flex",flexBasis:"68px",flexGrow:0,flexShrink:0}}><LeftMovNavBar/></div>
          <Outlet></Outlet>
        {/*<div style={{display:"flex",flexBasis:"230px",flexGrow:0,flexShrink:0}}><LeftStaticNavBar/></div>*/}
        {/*<div style={{display:"flex",flexGrow:1 ,flexBasis:"100%"}}>*/}
        {/*  <MainPage/>*/}
        {/*</div>*/}
      </MainContainer>

      //react-route测试
      // <div>
      //     <h1>Bookkeeper</h1>
      //     <nav
      //         style={{
      //             borderBottom: "solid 1px",
      //             paddingBottom: "1rem"
      //         }}
      //     >
      //         <Link to="/invoices">Invoices</Link> |{" "}
      //         <Link to="/expenses">Expenses</Link>
      //     </nav>
      //     <Outlet />
      // </div>
  );
}

export default App;
