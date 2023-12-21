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
import {Item, ItemText, LeftMovNavBarDiv, NavLeft, StyledButton, StyledFlex} from "./Styled";

const LeftMovNavBar = props => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <NavLeft>
            <HomeOutlined style={{fontSize: '50px',marginLeft:'10px'}}/>
            <Item>
                <HomeOutlined style={{fontSize: '20px'}} ></HomeOutlined>
                <ItemText>Search issues</ItemText>
            </Item>
            <Item>
                <HomeOutlined style={{fontSize: '20px'}} ></HomeOutlined>
                <ItemText>Search issues</ItemText>
            </Item>
            <Item style={{bottom :"0",position:"absolute" }}>
                <HomeOutlined style={{fontSize: '20px'}} ></HomeOutlined>
                <ItemText>About</ItemText>
            </Item>
        </NavLeft>
    );
};

LeftMovNavBar.propTypes = {

};

export default LeftMovNavBar;
