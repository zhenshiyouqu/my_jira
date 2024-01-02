import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import LeftStaticNavBar from "./LeftStaticNavBar";
import MainPage from "./MainPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} >
                <Route path="projects" element={<LeftStaticNavBar />} >
                    <Route path="board" element={<MainPage />}/>
                </Route>
            </Route>



            {/*    react_router测试*/}

            {/*    <Route path="expenses" element={<Expenses />} />*/}
            {/*    <Route path="invoices" element={<Invoices />} >*/}
            {/*        <Route*/}
            {/*            index*/}
            {/*            element={*/}
            {/*                <main style={{ padding: "1rem" }}>*/}
            {/*                    <p>Select an invoice</p>*/}
            {/*                </main>*/}
            {/*            }*/}
            {/*        />*/}
            {/*        <Route path=":invoiceId" element={<Invoice />} />*/}
            {/*    </Route>*/}
            {/*</Route>*/}
            {/*<Route*/}
            {/*    path="*"*/}
            {/*    element={*/}
            {/*        <main style={{ padding: "1rem" }}>*/}
            {/*            <p>There's nothing here!</p>*/}
            {/*        </main>*/}
            {/*    }*/}
            {/*/>*/}
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
