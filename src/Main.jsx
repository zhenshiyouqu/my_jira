import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './Main.css'
import MainPage from "./MainPage";
import {Flex, Layout} from "antd";
import LeftMovNavBar from "./LeftMovNavBar";
import LeftStaticNavBar from "./LeftStaticNavBar";
import {MainContain, MainContainer} from "./Styled";


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
        <MainContainer>

            <div style={{display:"flex",flexBasis:"68px",flexGrow:0,flexShrink:0}}><LeftMovNavBar/></div>
            <div style={{display:"flex",flexBasis:"230px",flexGrow:0,flexShrink:0}}><LeftStaticNavBar/></div>
            <div style={{display:"flex",flexGrow:1 ,flexBasis:"100%"}}>
                <MainPage/>
            </div>

        </MainContainer>
        // <div style={{display:"flex"}}>
        //     <div style={{left:"30px"}}>1</div>
        //     <div>2</div>
        //     <div>3</div>
        // </div>
    );
};


Main.propTypes = {

};

export default Main;
