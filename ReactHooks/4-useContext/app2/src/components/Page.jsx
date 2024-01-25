import React from 'react'
// import React, { useContext } from 'react';
// import { ThemeContext } from '../context/ThemeContext';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Page = () => {
	// context로 전달한 정보를 받아오려면 useContext훅을 사용하면된다.
	// const data = useContext(ThemeContext)
	// console.log('초기값: ', data)

	return (
		<div className='page'>
			<Header />
			<Content />
			<Footer />
		</div>
	);
};

export default Page;