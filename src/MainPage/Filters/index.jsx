import React, {useState} from 'react';
import PropTypes from 'prop-types';

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
        <Filter >
            <input />
            <div className={"avatars"}>
                avatars
            </div>
            <SearchButton onClick = {handleClick}  primary = {clicked}>
                Only my issues
            </SearchButton>
            <SearchButton >
                Recently Updated
            </SearchButton>
            {clicked ? (
                <ClearButton onClick = {handleClearClick}>
                Clear all
                 </ClearButton>
            ):<div/>}
        </Filter>
    );
};

Filters.propTypes = {
    projectUsers: PropTypes.array.isRequired,
    defaultFilters: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    mergeFilters: PropTypes.func.isRequired,
};

export default Filters;
