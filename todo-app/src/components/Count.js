import React from "react";
import PropTypes from 'prop-types';


const Count = ({count}) => {
    return <span style={{
        marginLeft:"20px",
        marginRight:"530px"
}}>{count} tasks left</span>
};

Count.propTypes = {
    count: PropTypes.number.isRequired
};

export default Count;
