import React from 'react';
import './Footer.css';
import FooterIcon from './FooterIcon';

const FooterContainer = () => {
	return (
		<div className = "footer-container">
			<FooterIcon iconName="comment"/>
			<FooterIcon iconName="circle" txt="6"/>
			<FooterIcon iconName="heart" txt="4"/>
			<FooterIcon iconName="envelope"/>
		</div>
	)
}

export  default FooterContainer;
