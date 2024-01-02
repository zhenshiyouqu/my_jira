import React from 'react';
import PropTypes from 'prop-types';
import Icon, {AppleFilled, AppstoreOutlined, HomeOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
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
    "看板","需求","缺陷","任务"
]
const LeftMovNavBar = props => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <div style={{marginLeft:"68px"}}>
        <StaticNavBar>
            <div style={{height:"100px",width:'230px',display:'flex'}}>
                <div style={{flexBasis: "30px", margin: "0 19px"}}>
                    <svg style={{marginTop: "6px"}} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"
                         fill="currentColor" className="bi bi-motherboard-fill" viewBox="0 0 16 16">
                        <path d="M5 7h3V4H5v3Z"/>
                        <path
                            d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1Zm7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Z"/>
                    </svg>
                </div>
            </div>
            {
                data.map(
                    (d) => (
                        <Link to="board">
                        <ItemDiv style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "end",
                            padding: "0% 15%",
                            height: "50px"
                        }}>
                            <div style={{flexBasis: "30px", margin: "0 19px"}}>
                                <svg style={{marginTop: "6px"}} xmlns="http://www.w3.org/2000/svg" width="30px"
                                     height="30px" fill="currentColor" className="bi bi-motherboard-fill"
                                     viewBox="0 0 16 16">
                                    <path d="M5 7h3V4H5v3Z"/>
                                    <path
                                        d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1Zm7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Z"/>
                                </svg>
                            </div>
                            <div style={{fontSize: "15px"}}>{d}</div>
                        </ItemDiv>
                        </Link>
                    )
                )
            }
        </StaticNavBar>
        <Outlet/>
        </div>
    );
};

LeftMovNavBar.propTypes = {};

export default LeftMovNavBar;
