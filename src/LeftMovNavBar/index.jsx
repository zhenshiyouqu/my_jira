import React from 'react';
import PropTypes from 'prop-types';
import {
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    HomeOutlined,
    PoweroffOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import {Button, Flex, Menu} from 'antd';
import {ItemText, LeftMovNavBarDiv, NavLeft, StyledButton, StyledFlex} from "./Styled";
import {Link, Outlet} from "react-router-dom";
import {MyLink} from "../general/Styled";
import styled from "styled-components";


const LeftMovNavBar = props => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    //"首页", "工作", "项目", "团队", "计划", "应用", "设置"
    let datas =[
        {
            name: "首页",
            icon: "bi bi-house-door",
            path: "/home"
        },
        {
            name: "工作",
            icon: "bi bi-briefcase",
            path: "/work"
        },
        {
            name: "项目",
            icon: "bi bi-star",
            path: "/projects"
        },
        {
            name: "团队",
            icon: "bi bi-people",
            path: "/teams"
        },
        {
            name: "计划",
            icon: "bi bi-calendar-event",
            path: "/plans"
        },
        {
            name: "应用",
            icon: "bi bi-app-indicator",
            path: "/apps"
        },
        {
            name: "设置",
            icon: "bi bi-gear",
            path: "/settings"
        }
    ]

    return (
        <>

            <NavLeft>
                {
                    datas.map(
                        (data) => (
                            <MyLink to={data.path}>
                                <IconItem className={data.icon} text={data.name}/>
                            </MyLink>
                        )
                    )
                }

                <div style={{bottom: "0", position: "absolute", flexBasis: "30px", margin: "0 19px"}}>
                    <svg style={{marginTop: "6px"}} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"
                         fill="currentColor" className="bi bi-motherboard-fill" viewBox="0 0 16 16">
                        <path d="M5 7h3V4H5v3Z"/>
                        <path
                            d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1Zm7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Z"/>
                    </svg>
                </div>
            </NavLeft>
            <div>
                <Outlet/>
            </div>
        </>
    );
};
const IconItem = ({className="bi bi-star",text="hello"}) => {
    return (
        <Item>
            <div style={{flexBasis: "30px", margin: "0 19px"}}>
                <i className={className} style={{fontSize: `2rem`}}/>
            </div>
            <ItemText>{text}</ItemText>
        </Item>
    )
}

const Item = styled.span`
    font-size: 30px;
    display: flex;
    align-items: center;
    margin: 20px 0;
    width: 100%;
    color: whitesmoke;
    cursor: pointer;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;
LeftMovNavBar.propTypes = {};

export default LeftMovNavBar;
