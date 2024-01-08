import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes} from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import LeftStaticNavBar from "./LeftStaticNavBar";
import MainPage from "./Board";
import Requirements from "./Requirements";
import BugBoard from "./BugBoard";
import PlanBoard from "./PlanBoard";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    path:"projects",
                    element:<LeftStaticNavBar/>,
                    children:[
                        {
                            path:"board",
                            element:<MainPage/>
                        },
                        {
                            path:"requirements",
                            element:<Requirements/>
                        },
                        {
                            path:"bugs",
                            element:<BugBoard/>
                        },
                        {
                            path:"plans",
                            element:<PlanBoard/>
                        }
                    ]
                }

            ]
        }

    ]

);


root.render(<RouterProvider router={router} />);

    // {/*<BrowserRouter>*/}
    // {/*    <Routes>*/}
    // {/*        <Route path="/" element={<App/>} >*/}
    // {/*            <Route index={true} element={<Navigate  to={"/projects/board"}/> } />*/}
    // {/*            <Route path="projects" element={<LeftStaticNavBar />} >*/}
    // {/*                <Route path="board" element={<MainPage />}/>*/}
    // {/*                <Route path="requirements" element={<Requirements />}/>*/}
    // {/*                <Route path="bugs" element={<BugBoard />}/>*/}
    // {/*                <Route path="plans" element={<PlanBoard />}/>*/}
    // {/*            </Route>*/}
    // {/*            <Route path="other" element={<MainPage />} >*/}
    // {/*            </Route>*/}
    // {/*        </Route>*/}
    // {/*    </Routes>*/}
    // {/*</BrowserRouter>*/}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
