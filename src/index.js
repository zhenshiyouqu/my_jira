import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Navigate, redirect, Route, RouterProvider} from "react-router-dom";
import LeftStaticNavBar from "./LeftStaticNavBar";
import Requirements from "./Requirements";
import BugBoard from "./BugBoard";
import GeneralBoard from "./GeneralBoard";
import PlanBoard from "./PlanBoard";
import LoginPage from "./LoginPage";
import RegisterPage from "./LoginPage/RegisterPage";
import {message} from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));

const loginLoader = () => {
    console.log("loginLoader")
    //校验是否有登录信息
    if (localStorage.getItem("token") === null || localStorage.getItem("user") === null) {
        message.error("请先登录")
        return  redirect("/login")
    }
    return null;
};

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>,
            loader: loginLoader,
            children: [
                {
                    index: true,
                    element: <Navigate to={"/projects/requirements"}/>
                },
                {
                    path:"projects",
                    element:<LeftStaticNavBar/>,
                    children:[
                        {
                            path:"board",
                            element:<GeneralBoard/>
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
                            element:<PlanBoard />
                        }
                    ]
                },
            ]
        },
        {
            path:"login",
            element:<LoginPage/>
        },
        {
            path:"register",
            element:<RegisterPage/>
        }
    ]
);


root.render(<RouterProvider router={router} />);

reportWebVitals();
