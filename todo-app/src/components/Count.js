import React from "react";
import PropTypes from 'prop-types';


const Count = ({count}) => {
    const test  = {count} + ' tasks left';
    return <span>{test}</span>
};

Count.propTypes = {
    count: PropTypes.number.isRequired
};

export default Count;
