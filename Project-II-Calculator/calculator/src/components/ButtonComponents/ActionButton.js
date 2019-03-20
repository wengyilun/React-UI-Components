import React from 'react';
import './Button.css';

const ActionButton = (props)=> {
	const {text, buttonStyle} = props
	return (
		<button className={buttonStyle}>{text}</button>
	)
}

export default ActionButton;
