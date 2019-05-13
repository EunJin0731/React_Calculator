import React from 'react';
import PropTypes from 'prop-types';

const Delta = props => (
        <div>
            <input value={props.delta} onChange={props.handleChange}/>
        </div>
    );

Delta.propTypes = {
    
};

export default Delta;