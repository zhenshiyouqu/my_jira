import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Filters from "./Filters";
import Header from "./Header";
import List from "./List";
import {Flex} from "antd";
import {MainPageDiv} from "./Styled";
import List2 from "./List2";


const MainPage = props => {
    return (
        // <Flex vertical={true} gap={"large"}>
        //     <Header/>
        //     <Filters/>
        //     <List/>
        // </Flex>
        <div style={{display:"flex",flexDirection:"column",marginLeft:"100px",flexGrow:"1"}}>
            <Header/>
            <Filters/>
            <List/>
        </div>
    );
};

MainPage.propTypes = {

};

export default MainPage;
