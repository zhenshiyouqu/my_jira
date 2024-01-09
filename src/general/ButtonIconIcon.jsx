import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ThisDiv=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 5px;
//  间隔
    gap: ${props => props.gap}px;
    &:hover{
        background-color: rgba(253,255,212,0.59);
    }
`;
export const IconButton = ({ gap=6,size = 20,iconSize = 1.5, className1 = "bi-alarm",fontWeight = 700 ,className2="bi bi-three-dots-vertical", text ="Hello" ,onClick,color="black"}) => {
    return (
        <ThisDiv gap={gap} onClick={onClick}>
            <span style={{fontSize: `${size}px`, color: `${color}`,fontWeight: "700" }}>{text}</span>
            <i className={className1} style={{fontSize: `${iconSize}rem`, color: `${color}`}}/>
            <i className={className2} style={{fontSize: `${iconSize}rem`, color: `${color}`}}/>
        </ThisDiv>
    );
};
IconButton.propTypes = {};

export default IconButton;