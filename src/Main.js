import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './Main.css'
// const h1Style = {
//      display: "flex"
//
// }
const Main = props => {
    return (
        <Fragment>
            <div className={"left_div"}>左边</div>
            <div>中间</div>
            <div>右边</div>
            <ul className={"ul1"}>
                <div>Item One</div>
                <div>Item Two</div>
                <div>Item Three</div>
            </ul>
        </Fragment>
    );
};

Main.propTypes = {

};

export default Main;
