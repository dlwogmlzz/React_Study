import React, { useState, useEffect } from 'react'

// 부모인 App.js에서 props로 받을때 1
// export default function Counter(props) {
// const { number, setNumber } = props

// 부모인 App.js에서 props로 받을때 2 (Destructuring 방식으로)
export default function Counter({ number, setNumber }) {
  // 리액트에서의 변수는, 항상 Local state 또는 global state로 관리해야 한다. 
  // const [ number, setNumber ] = useState(0) // Local State 

  // LifeCycle
  // Mount : 컴포넌트가 렌더링된 시점
  useEffect(() => {
    console.log('Mounted / Rendering')
  }, []) // DEPS가 비어있으면 Mount 시점에만 실행됨

  // Update : 컴포넌트가 업데이트된 시점
  useEffect(() => {
    console.log('Updated')
    // -로 안내려가게 number가 0보다 작아지면 0으로 바꿔라
    // if (number < 0) { setNumber(0) }
    number < 0 && setNumber(0)
    // if ( number < 0 ) {
    //   setNumber(0)
    //   alert('카트가 비어있어요!')
    // }
  }, [number, setNumber]) // DEPS에  number가 있으면 number가 업데이트될 때마다 실행됨

  // Unmount : 컴포넌트가 사라진 시점
  useEffect(() => {
    return () => {
      console.log('Unmounted')
    }
  }, []) // DEPS가 비어있는데, return안에 함수가 있으면, 그 함수를 Unmount 시점에만 실행됨




  // 함수를 function을 안쓰고 화살표 함수로 표현
  // const increase = (v) => v++ // { return v++ }과 같은의미
  const increase = () => setNumber(number + 1)
  // c onst decrease = (v) => v-- // { return v-- }과 같은의미
  const decrease = () => setNumber(number - 1)

  // XML
  return (
    // 원래 div 하나로 감싸줘야 하는데 두개를 쓰고 싶을때는 <></>프레그먼트로 한번더 감싸줘야 한다.
    <>
      <div className="App">
        <div>Hello, React{ number }</div>

        {/*
          Dom에서 함수를 이벤트리스너로 불러올 때는 함수형 업데이트가 필수!!
          함수형 업데이트 : () => { return sth } 
        */}
        {/* <button onClick={() => increase(number)}>+</button> */}
        <button onClick={ increase }>+</button>
        {/* <button onClick={() => decrease(number)}>-</button> */}
        <button onClick={ decrease }>-</button>
      </div>
    </>
  );
}
// 같의의미
// export default function App() {
//   return (
//     <div className="App">
//       Hello, React
//     </div>
//   );
// }
