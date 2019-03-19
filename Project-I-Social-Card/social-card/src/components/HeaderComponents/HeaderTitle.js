import React from 'react';
import moment from 'moment';
import './Header.css';

const getDate = () => {
    return moment().format('Do MMM');                    // Thursday
}

const HeaderTitle = () => {
	return (
		<h3>Lambda School<span className="gray">@LambdaSchool . <time>{getDate()}</time></span></h3>
	)
}


export default HeaderTitle;
