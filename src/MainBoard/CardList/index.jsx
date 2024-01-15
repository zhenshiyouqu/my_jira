import React from 'react';
import PropTypes from 'prop-types';
import {Card, Flex} from "antd";

const CardList = props => {
    return (
        <Flex gap="middle">
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "25%" }}>
                <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Card>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "25%" }}>
                <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Card><Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "25%" }}>
            <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Card><Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "25%" }}>
            <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Card>
        </Flex>
    );
};

CardList.propTypes = {

};

export default CardList;
