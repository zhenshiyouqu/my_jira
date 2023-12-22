import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Filters from "./Filters";
import Header from "./Header";
import List from "./List";
import {Flex} from "antd";
import {MainPageDiv} from "./Styled";


const MainPage = props => {
    return (
        // <Flex vertical={true} gap={"large"}>
        //     <Header/>
        //     <Filters/>
        //     <List/>
        // </Flex>
        <MainPageDiv>
            <Header/>
            <Filters/>
            <List/>
        </MainPageDiv>
    );
};

MainPage.propTypes = {

};

export default MainPage;
