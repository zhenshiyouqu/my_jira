import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './Main.css'
import MainPage from "./MainPage";
import {Flex, Layout} from "antd";
import LeftMovNavBar from "./LeftMovNavBar";
import LeftStaticNavBar from "./LeftStaticNavBar";


// const h1Style = {
//      display: "flex"
//
// }

//  //测试用
// const Main = props => {
//     return (
//         <Fragment>
//             <div className={"left_div"}>左边</div>
//             <div>中间</div>
//             <div>右边</div>
//             <ul className={"ul1"}>
//                 <div>Item One</div>
//                 <div>Item Two</div>
//                 <div>Item Three</div>
//             </ul>
//         </Fragment>
//     );
// };

//正式
const Main = props => {
    return (
        <Flex gap={"large"}>
            <LeftMovNavBar/>
            <LeftStaticNavBar/>
            <MainPage/>
        </Flex>
    );
};


Main.propTypes = {

};

export default Main;