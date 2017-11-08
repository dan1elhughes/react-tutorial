import React from 'react';
import PropTypes from 'prop-types';

import './Count.css';

const Count = ({ number }) => (
	<div className="Count">
		<p>Count: {number}</p>
	</div>
);

Count.propTypes = {
	number: PropTypes.number.isRequired,
};

export default Count;
