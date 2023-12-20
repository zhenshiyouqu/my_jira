import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    function handleClick() {
        alert("点击了")
    }
    return (
        <button onClick={handleClick}/>
    );
};

Button.propTypes = {

};

export default Button;
