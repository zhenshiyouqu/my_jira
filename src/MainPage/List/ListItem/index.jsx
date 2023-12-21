import React from 'react';
import PropTypes from 'prop-types';
import {Card, Flex} from "antd";

const ListItem = props => {
    const s = [1,2,3]

    return (

            <Flex gap={"large"} wrap={"wrap"} vertical={true} style={{backgroundColor:"blue"}}>
                {
                    s.map((i)=>(
                        <Card id={i}>
                            dsafdsa
                        </Card>
                    ))
                }

            </Flex>


    );
};

ListItem.propTypes = {

};

export default ListItem;
