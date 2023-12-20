import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Filters from "./Filters";
import Header from "./Header";
import List from "./List";


const MainPage = props => {
    return (
        <Fragment>
            <Header/>
            <Filters/>
            <List/>
        </Fragment>
    );
};

MainPage.propTypes = {

};

export default MainPage;
