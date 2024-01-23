// CSS
import './App.css';
import { useState } from 'react'

// JSX 문법
function App() {
  // JS
  // 리액트에서의 변수는, 항상 Local state 또는 global state로 관리해야 한다. 
  const [ number, setNumber ] = useState(0) 
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

// import를 할수 있게 준비를 해라는 의미
export default App;
