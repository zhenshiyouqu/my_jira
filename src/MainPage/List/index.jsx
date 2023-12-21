import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Card, Flex, Space} from 'antd';
import ListItem from "./ListItem";

const List = props => {
    const s = [1,2,3,4,5]

    return (

            <Flex gap={"large"} wrap={"wrap"}>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </Flex>

    );
};

List.propTypes = {

};

export default List;
