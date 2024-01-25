import React from 'react';

const Content = ({ isDark }) => {
	return (
		<div
			className="content"
			style={{ 
				backgroundColor: isDark ? 'black' : 'lightgray',
				color: isDark ? 'white' : 'black',
			}}
		>
			<h1>리액트를 하고 싶어요!</h1>
		</div>
	);
};

export default Content;