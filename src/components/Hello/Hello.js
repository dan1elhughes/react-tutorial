import React from 'react';
import PropTypes from 'prop-types';

export default class Hello extends React.Component {
	render() {
		return (
			<div className="Hello">My foo property is equal to: {this.props.foo}.</div>
		);
	}
}

Hello.propTypes = {
	foo: PropTypes.string.isRequired,
};
