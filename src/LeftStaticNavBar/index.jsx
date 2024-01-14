import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Icon, {AppleFilled, AppstoreOutlined, HomeOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import styled from 'styled-components';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
    ItemDiv,
    LeftStaticNavBarDiv,
    ProjectCategory,
    ProjectInfo,
    ProjectName,
    ProjectTexts,
    StaticNavBar
} from "./Styled";
import {Link, Outlet} from "react-router-dom";
import {MyLink} from "../general/Styled";
import IconButton from "../general/IconButton";
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const data = [
    {
        name: "看板",
        path: "board",
        icon: "bi bi-columns-gap"
    },
    // 需求 缺陷 计划
    {
        name: "需求",
        path: "requirements",
        icon: "bi bi-list-task"
    },
    {
        name: "缺陷",
        path: "bugs",
        icon: "bi bi-bug-fill"
    },
    {
        name: "计划",
        path: "plans",
        icon: "bi bi-calendar-event"
    },
    ]
const LeftMovNavBar = props => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <>
            <div style={{width:"298px"}}>
                <StaticNavBar>
                    <i className="bi bi-three-dots-vertical" style={{fontSize: `1.5rem`, color: `black`}}/>
                    {
                        data.map(
                            (d) => (
                                <MyLink to={d.path}>
                                    <IconButton gap="30" size={20} className={d.icon} text={d.name}/>
                                </MyLink>
                            )
                        )
                    }
                </StaticNavBar>
            </div>
            <div style={{marginLeft:"298px",padding:"0 30px"}}>
                <Outlet/>
            </div>
        </>


    );
};



LeftMovNavBar.propTypes = {};

export default LeftMovNavBar;
