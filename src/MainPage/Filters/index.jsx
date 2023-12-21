import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Flex, Space,Avatar, Divider, Tooltip } from 'antd';

import "./index.css"
import {ClearButton, Filter, SearchButton, SearchInput} from "./Styled"


const Filters = ({projectUsers, defaultFilters, filters, mergeFilters}) => {
    const [clicked, setClicked] = useState(false)
    function handleClick() {
        setClicked(!clicked)
    }
    function handleClearClick() {
        setClicked(false)
    }
    return (
        <Space >
            <input />
            <Avatar.Group>
                <Avatar  />
                <div onClick={handleClick}>
                    <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                </div>
            </Avatar.Group>
            <SearchButton type="dashed" onClick = {handleClick}  isclicked = {clicked} >Only my issues</SearchButton>
            <SearchButton >
                Recently Updated
            </SearchButton>
            {clicked ? (
                <ClearButton onClick = {handleClearClick}>
                Clear all
                 </ClearButton>
            ):<div/>}
        </Space>
    );
};

Filters.propTypes = {
    projectUsers: PropTypes.array.isRequired,
    defaultFilters: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    mergeFilters: PropTypes.func.isRequired,
};

export default Filters;
