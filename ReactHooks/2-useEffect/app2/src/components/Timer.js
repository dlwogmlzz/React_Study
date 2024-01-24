import React, { useEffect } from 'react';

const Timer = (props) => {
	// Timer 컴포넌트가 화면에 첫 렌더링 됐을때 실행된다.
	useEffect(() => {
		const timer = setInterval(() => {
			console.log('타이머가 돌아가는중...')
		} ,1000) // 1초마다 계속 콘솔로그가 반복적으로 찍히게된다.
		
		// return 함수를 써서 Timer기능을 Unmount를 시킨다.
		return () => {
			// Timer를 정리할 코드를 넣어준다.
			clearInterval(timer)
			console.log('타이머가 종료되었습니다.')
		}
	}, [])

	return (
		<div>
			<span>타이머를 시작합니다. 콘솔을 보세요!</span>
		</div>
	);
};

export default Timer;