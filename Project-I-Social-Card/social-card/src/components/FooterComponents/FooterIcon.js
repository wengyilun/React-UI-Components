import React from 'react';
import './Footer.css';

const FooterIcon = (props) => {
	let {iconName, txt} = props;
	return (
		<a className= "icon-container">
			<i className={`fa fa-${iconName}`}></i>
			<span>{txt}</span>
		</a>
	)
}

export default FooterIcon;
