import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Card, Space } from 'antd';

const List = props => {
    return (
        <Fragment>
            <Card style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Fragment>
    );
};

List.propTypes = {

};

export default List;
