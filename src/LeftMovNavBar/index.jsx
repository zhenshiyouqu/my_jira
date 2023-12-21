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
import {Item, LeftMovNavBarDiv, StyledButton, StyledFlex} from "./Styled";

const LeftMovNavBar = props => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <LeftMovNavBarDiv>
            <HomeOutlined/>
            <Item>
                <HomeOutlined/>

            </Item>
        </LeftMovNavBarDiv>
    );
};

LeftMovNavBar.propTypes = {

};

export default LeftMovNavBar;
