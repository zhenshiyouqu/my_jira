import React from 'react';
import PropTypes from 'prop-types';
import Icon, {AppleFilled, AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import {LeftStaticNavBarDiv, ProjectCategory, ProjectInfo, ProjectName, ProjectTexts} from "./Styled";
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    {
        type: 'divider',
    },
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
    getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];
const LeftMovNavBar = props => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
       <LeftStaticNavBarDiv>
            <ProjectInfo>
                <AppleFilled />
                <ProjectTexts>
                    <ProjectName>JJJdasf</ProjectName>
                    <ProjectCategory>dsafdsaf</ProjectCategory>

                </ProjectTexts>
            </ProjectInfo>
       </LeftStaticNavBarDiv>
    );
};

LeftMovNavBar.propTypes = {

};

export default LeftMovNavBar;
