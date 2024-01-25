import React from 'react';

const Header = ({ isDark }) => {
	return (
		<header
			className='header'
			style={{ 
				backgroundColor: isDark ? 'black' : 'lightgray',
				color: isDark ? 'white' : 'black',
			}}
		>
			<h1>state와 Props를 사용한 웹사이트</h1>
		</header>
	);
};

export default Header;