import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { StudyContext } from '../context/StudyContext';

const Content = () => {
	const { isDark } = useContext(ThemeContext)
	const study = useContext(StudyContext)

	return (
		<div
			className="content"
			style={{ 
				backgroundColor: isDark ? 'black' : 'lightgray',
				color: isDark ? 'white' : 'black',
			}}
		>
			<h1>{study}를 배웠습니다!</h1>
		</div>
	);
};

export default Content;