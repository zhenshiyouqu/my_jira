import React from 'react';
import PropTypes from 'prop-types';
import {Space} from "antd";

const IconSpaceButton =(
    { gap=6,size = 20, className = "bi-alarm", text ="Hello" ,onClick,color="black"}
) => {
    return (
        <>
            <Space>
                <span style={{fontSize: `${size}px`, color: `${color}`}}>{text}</span>
                <i className={className} style={{fontSize: `1.5rem`, color: `${color}`}}/>
            </Space>
        </>
    );
};

IconSpaceButton.propTypes = {};

export default IconSpaceButton;