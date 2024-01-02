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

        <StaticNavBar>
            <div style={{height:"100px",width:'230px',display:'flex'}}>
                <HomeOutlined style={{fontSize:"25px",fontFamily:"CircularStdBook",color:"rgb(23, 43, 77)",alignSelf:'center',justifySelf:'center'}}/>
            </div>
            {
                data.map(
                    (d)=>(
                        <ItemDiv style={{display:"flex",justifyContent:"space-between",alignItems:"end",padding:"0% 15%",height:"50px"}}>
                            <HomeOutlined style={{fontSize:"25px",fontFamily:"CircularStdBook",color:"rgb(23, 43, 77)"}}></HomeOutlined>
                            <div style={{fontSize:"15px"}}>{d}</div>
                        </ItemDiv>
                    )
                )
            }

        </StaticNavBar>
    );
};

LeftMovNavBar.propTypes = {

};

export default LeftMovNavBar;
