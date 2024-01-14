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
export const ButtonIcon = (
    { gap=6,size = 20, className = "bi-alarm", text ="Hello" ,onClick,color="black"}

) => {
    return (
        <ThisDiv gap={gap} onClick={onClick}>
            <span style={{fontSize: `${size}px`, color: `${color}`}}>{text}</span>
            <i className={className} style={{fontSize: `1.5rem`, color: `${color}`}}/>
        </ThisDiv>
    );
};
ButtonIcon.propTypes = {};

export default ButtonIcon;