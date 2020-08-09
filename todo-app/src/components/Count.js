import React from "react";
import PropTypes from 'prop-types';


const Count = ({count}) => {
    return <span>{count} tasks left</span>
};

Count.propTypes = {
    count: PropTypes.number.isRequired
};

export default Count;
