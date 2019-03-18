import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from './ImageThumbnail'

const HeaderContainer = () => {
	return (
		<div className="header-container">
				<ImageThumbnail/>
			<div className="header-content">
				<HeaderTitle className="header-content-title"/>
				<HeaderContent/>
			</div>
		</div>
	)
}

export default HeaderContainer;
