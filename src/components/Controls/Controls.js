import React from 'react';
import PropTypes from 'prop-types';

import './Controls.css';

const Controls = ({ onDecrement, onIncrement }) => (
	<div className="Controls">
		<p>Controls:</p>
		<button onClick={onDecrement}>Decrement</button>
		<button onClick={onIncrement}>Increment</button>
	</div>
);

Controls.propTypes = {
	onDecrement: PropTypes.func.isRequired,
	onIncrement: PropTypes.func.isRequired,
};

export default Controls;
