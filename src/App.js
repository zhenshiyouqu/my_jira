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
