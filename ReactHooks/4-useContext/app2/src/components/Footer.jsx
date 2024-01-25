import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { StudyContext } from '../context/StudyContext';

const Footer = () => {
	const { isDark, setIsDark } = useContext(ThemeContext)
	const study = useContext(StudyContext)
	console.log('study: ', study)

	const toggleTheme = () => {
		setIsDark(!isDark)
	}
	return (
		<footer
			className="footer"
			style={{ 
				backgroundColor: isDark ? 'black' : 'lightgray',
			}}
		>
			<button className="button" onClick={toggleTheme}>
				밤이 되었습니다.
			</button>
		</footer>
	);
};

export default Footer;