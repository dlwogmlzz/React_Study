import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { StudyContext } from '../context/StudyContext';

const Header = () => {
	const { isDark } = useContext(ThemeContext)
	// console.log('isDark: ', isDark)
	const user = useContext(StudyContext)
	// 값을 잘 받아왔는지 콘솔로그로 확인
	console.log('user: ', user)
	return (
		<header
			className='header'
			style={{ 
				backgroundColor: isDark ? 'black' : 'lightgray',
				color: isDark ? 'white' : 'black',
			}}
		>
			<h1>{user}를 이용한 웹사이트 </h1>
		</header>
	);
};

export default Header;